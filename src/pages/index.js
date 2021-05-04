import React, { useRef, useState, useEffect } from "react"
import { FooterDark } from "../components/footer.js"
import SEO from "../components/seo.js"
// import { motion } from "framer-motion"
import "@fontsource/raleway"
import "@fontsource/open-sans"
import "../css/index.css"

// photos
import Landing from "../images/IMG_2025.jpg"
import me from "../images/me.jpg"
import ucsdcogsci from "../images/ucsd-cogsci-logo.png"
import theta from "../images/theta.png"
import dma from "../images/dma2.png"
import horizon from "../images/Horizon_Icon_Square.png"
import spaceship from "../images/Spaceship.jpg"
import breeze from "../images/breeze.png"


const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const Howard = () => {
  const [visibleSection, setVisibleSection] = useState();
  const landingRef = useRef(null);
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: "Landing", ref: landingRef },
    { section: "About", ref: aboutRef },
    { section: "Experience", ref: expRef },
    { section: "Projects", ref: projectsRef },
    { section: "Contact", ref: contactRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight + 2;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        } else {
          return null;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleSection]);

  const scrollTo = (ele) => {
    const { height: headerHeight } = getDimensions(headerRef.current);
    const headerHeightOffset = -Math.abs(headerHeight);
    const y = ele.getBoundingClientRect().top + window.pageYOffset + headerHeightOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };


  return (
    <div className="howard">
      <SEO title="Howard Kim" />

      <section className="ho-landing" id="Landing" ref={landingRef}>
        <img src={Landing} alt="landing backdrop" width="100%" height="100%" style={{ objectFit: "cover" }} />
        <div className="ho-landingText">
          <p style={{ fontSize: "14pt" }}>HELLO,&nbsp;&nbsp; I &nbsp;AM</p>
          <h1 style={{ fontSize: "50pt" }}>Howard Kim</h1>
          <p style={{ fontSize: "20pt" }}>I am a graduating senior at UCSD aspiring to be a SDE/SWE.</p>
        </div>
        <svg id="scrollArrow" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" onClick={() => { scrollTo(aboutRef.current); }} height="7vh" stroke="#fff" strokeWidth="7" strokeLinecap="round" fill="none">
          <polyline points="15,50 50,85 85,50"></polyline>
        </svg>
      </section>

      <header className="ho-navContainer" ref={headerRef}>
        <div className="ho-navbar">
          <div>
            <button
              className={`ho-title`}
              onClick={() => { scrollTo(landingRef.current); }}
            >Howard Kim</button>
          </div>
          <ul className="ho-nav">
            <li>
              <button
                className={`ho-navbutton ${visibleSection === "Landing" ? "ho-navSelected" : ""}`}
                onClick={() => { scrollTo(landingRef.current); }}
              >Home</button>
            </li>
            <li>
              <button
                className={`ho-navbutton ${visibleSection === "About" ? "ho-navSelected" : ""}`}
                onClick={() => { scrollTo(aboutRef.current); }}
              >About</button>
            </li>
            <li>
              <button
                className={`ho-navbutton ${visibleSection === "Experience" ? "ho-navSelected" : ""}`}
                onClick={() => { scrollTo(expRef.current); }}
              >Experience</button>
            </li>
            <li>
              <button
                className={`ho-navbutton ${visibleSection === "Projects" ? "ho-navSelected" : ""}`}
                onClick={() => { scrollTo(projectsRef.current); }}
              >Projects</button>
            </li>
            <li>
              <button
                className={`ho-navbutton ${visibleSection === "Contact" ? "ho-navSelected" : ""}`}
                onClick={() => { scrollTo(contactRef.current); }}
              >Contact</button>
            </li>
          </ul>
        </div>
      </header>

      <section className="ho-about" id="About" ref={aboutRef}>
        <h1>About Me</h1>
        <div className="ho-subtitleBar" />
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <img width="25%" height="auto" alt="portrait" src={me} />
          <p style={{ margin: "0 0 0 2rem" }}>
            My name is Howard, but I also go by these other names & alias: Ho Kim, 김호, 金瑚, enome; I am a 1.5
            generation Korean-American located in Silicon Valley (Bay Area), California.
            <br /><br />
            I am currently a senior at University of California, San Diego (UCSD) studying Computer Science and
            Cognitive Science with Specialization to Machine Learning & Neural Computation. I am also
            taking coursework in HCI (Human-Computer Interaction) & Design. Expected to graduate in June
            2021 after this coming Spring quarter.
            <br /><br />
            I am currently in the job market in hopes of branching out my career in the tech industry. Keeping
            my options open, I am working towards SDE/SWE, UI/UX Engineer, and entry level Machine Learning/Data
            Scientist positions. If you believe that you can lend a hand, please do not hesitate to&nbsp;
            <span className="amcontact" onClick={() => { scrollTo(contactRef.current); }} aria-hidden="true">contact</span>
            &nbsp;me; I will send you my resume ASAP, and thank you lastingly.
          </p>
        </div>
      </section>

      <section style={{ width: "100%", backgroundColor: "#f5f5f5" }} id="Experience" ref={expRef}>
        <div className="ho-experience">
          <h1>Experience</h1>
          <div className="ho-subtitleBar" />

          {/* <!-- UCSD IA --> */}
          <div className="ho-experienceEntry">
            <img src={ucsdcogsci} width="30%" height="auto" alt="org logo" />
            <div className="ho-entryDetails">
              <h3>UCSD Department of Cognitive Science</h3>
              <h4>Instructional Apprentice</h4>
              <h5>September 2020 ─ December 2020&nbsp; in &nbsp;La Jolla, California</h5>
              <ul className="ho-jobDetails">
                <li>Led discussion lectures to over 200 students to provide supplementary knowledge beyond course lectures</li>
                <li>Collaborated with instructors to improve course outlines and average class performance by a letter grade</li>
                <li>Garnered 96.7% positive evaluation from students and improved the course approval rating by 12%</li>
              </ul>
            </div>
          </div>

          {/* <!-- THETA.tv --> */}
          <div className="ho-experienceEntry">
            <img src={theta} width="30%" height="auto" alt="org logo" />
            <div className="ho-entryDetails">
              <h3>SLIVER VR Technologies (THETA.tv)</h3>
              <h4>User Engagement Specialist</h4>
              <h5>September 2017 ─ July 2019&nbsp; in &nbsp;San Jose, California</h5>
              <ul className="ho-jobDetails">
                <li>Shaped international partnership on a global enterprise-grade blockchain project via strategic overview</li>
                <li>Designed new platform features and functionality to improve platform usability and user experience</li>
                <li>Coordinated with engineering and marketing team to promote new campaigns and partnerships</li>
              </ul>
            </div>
          </div>

          {/* <!-- Digital Media Academy --> */}
          <div className="ho-experienceEntry">
            <img src={dma} width="30%" height="auto" alt="org logo" />
            <div className="ho-entryDetails">
              <h3>Digital Media Academy (Stanford University)</h3>
              <h4>Technical Assistant</h4>
              <h5>June 2016 ─ August 2017&nbsp; in &nbsp;Stanford, California</h5>
              <ul className="ho-jobDetails">
                <li>Automated resource reallocation tasks using python scripting, increasing productivity by 80%+</li>
                <li>Developed new plans for operation environment restructuring throughout all teams on campus</li>
                <li>Managed and maintained the technical systems & equipments and provided hotfixes ensuring 100% uptime</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ho-projects" id="projects" ref={projectsRef}>
        <h1>Projects</h1>
        <div className="ho-subtitleBar" />
        <h2>Current Project</h2>
        <div className="ho-currProject">
          <div className="ho-currProjectDetails">
            <img src={horizon} width="35%" height="auto" alt="current project logo" />
            <div style={{ margin: "0 0 0 3em" }}>
              <h3 style={{ marginTop: "0" }}>Horizon Designs</h3>
              <p>
                This is my personal brand project that I am currently working on to utilize as a gateway to explore
                different fields in the industry. It is purposed to bring life to my personal hobbies, and serves
                as an outlet to experiment new design ideas as I continue to dabble in more hobbies in the future.
              </p>
              <div style={{ marginTop: '1.3rem' }}><a className="homelinks" href="https://horizondesign.studio">Discover &gt;</a></div>
            </div>
          </div>
        </div>
        <h2 style={{ marginTop: "7em" }}>Past Projects</h2>
        <div style={{ marginTop: "1em" }}>
          {/* <!-- SpaceShip by Team Astronauts --> */}
          <div className="ho-projectEntry">
            <div className="gridContainer-spaceshipimg">
              <img className="projImage" width="100%" height="auto" src={spaceship} alt="project content" />
            </div>
            <div className="gridContainer-spaceshipCard">
              <div className="spaceshipDetailCard">
                <h2 style={{ marginTop: "0" }}>Comparing shipment options & rates simplified</h2>
                <p>
                  Mobile webapp to save users from headaches when sending domestic packages with an one-step solution to
                  take shipping efficiency to the moon.
                  </p>
                <div style={{ marginTop: '1.1rem' }}><a className="homelinks" href="https://a8-spaceship.herokuapp.com">Discover &gt;</a></div>
              </div>
            </div>
          </div>

          {/* <!-- Breeze by Team M-TEA --> */}
          <div className="ho-projectEntry">
            <div className="gridContainer-breezeimg">
              <img className="projImage" width="100%" height="auto" src={breeze} alt="project content" />
            </div>
            <div className="gridContainer-breezeCard">
              <div className="breezeDetailCard">
                <h2 style={{ marginTop: "0" }}>Catch wind of your next circle in UC San Diego</h2>
                <p>
                  Web platform to aid students in exploring and connecting with campus/student clubs, organizations,
                  and communities at UC San Diego.
                </p>
                <div style={{ marginTop: '1.1rem' }}><a className="homelinks" href="https://breeze-home.web.app/">Discover &gt;</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ho-contact" id="Contact" ref={contactRef}>
        <svg id="bigTriangleColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
          <path d="M0 0 L50 100 L100 0 Z"></path>
        </svg>
        <h1 style={{ marginTop: "2em", color: "#fff" }}>Contact</h1>
        <div className="ho-subtitleBar" style={{ background: "#fff" }} />
        <h2 style={{ color: "#04c2c9" }}><b>Let's Talk!</b></h2>
        <p style={{ color: "#04c2c9", marginBottom: "2em" }}>
          Drop me a message using the form below or email me at&nbsp;
          <a className="email" href="mailto:hello@howard.kim">hello@howard.kim</a>
        </p>
        <form className="form" name="Contact Form" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/thank-you">
          <input type="hidden" name="form-name" value="Contact Form" />
          <div className="hide-bot">
            <label>Last Name<input name="bot-field" /></label>
          </div>
          <div className="field">
            <input className="input" type="text" name="Name" placeholder="Name*" required />
          </div>
          <div className="field">
            <input className="input" type="text" name="Email" placeholder="Email*" required />
          </div>
          <div className="field">
            <input className="input" type="text" name="Subject" placeholder="Subject*" required />
          </div>
          <div className="field">
            <textarea className="input" rows="5" type="text" name="Message" placeholder="Message*" required />
          </div>
          <div data-netlify-recaptcha="true"></div>
          <button className="button1" type="submit">Submit Message</button>
        </form>
      </section>

      <FooterDark />
    </div>
  )
}

export default Howard