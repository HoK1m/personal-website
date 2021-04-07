import React, { useRef, useState, useEffect } from "react"
import SEO from "../components/seo"
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


const scrollTo = (ele) => {
  const headerHeightOffset = -66;
  const y = ele.getBoundingClientRect().top + window.pageYOffset + headerHeightOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
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
      const scrollPosition = window.scrollY + headerHeight;

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

  return (
    <div className="howard">
      <SEO title="Howard Kim"/>

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
        <form className="form" name="Contact Form" method="POST" netlify-honeypot="bot-field" data-netlify="true">
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

      <footer className="ho-footer">
        <h4 style={{ color: "#fa7268" }}>Find me in other places!</h4>
        <div className="ho-footerSocialBar">
          <a href="https://www.linkedin.com/in/hok1m/">
            <div className="ho-logoBox">
              <svg className="ho-social" role="img" width="1.5em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </div>
          </a>
          <a href="https://github.com/HoK1m">
            <div className="ho-logoBox">
              <svg className="ho-social" role="img" width="1.5em" viewBox="0 0 256 250" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                <g>
                  <path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"></path>
                </g>
              </svg>
            </div>
          </a>
          <a href="https://www.instagram.com/_enome/">
            <div className="ho-logoBox">
              <svg className="ho-social" role="img" width="1.5em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
            </div>
          </a>
          <a href="mailto:hello@howard.kim">
            <div className="ho-logoBox">
              <svg className="ho-social" role="img" width="1.9em" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title /><path d="M116.73,31.83a3,3,0,0,0-4.2-.61L64.14,67.34a1,1,0,0,1-1.2,0L15.5,31.06a3,3,0,1,0-3.64,4.77L49.16,64.36,12.27,92.16A3,3,0,1,0,15.88,97L54.11,68.14l5.18,4a7,7,0,0,0,8.43.06l5.44-4.06L111.84,97a3,3,0,1,0,3.59-4.81L78.17,64.35,116.12,36A3,3,0,0,0,116.73,31.83Z" /><path d="M113,19H15A15,15,0,0,0,0,34V94a15,15,0,0,0,15,15h98a15,15,0,0,0,15-15V34A15,15,0,0,0,113,19Zm9,75a9,9,0,0,1-9,9H15a9,9,0,0,1-9-9V34a9,9,0,0,1,9-9h98a9,9,0,0,1,9,9Z" /></svg>
            </div>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Howard