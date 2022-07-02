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
import striim from "../images/striim.png"
import pacerpro from "../images/pacerpro.png"
import ucsdcogsci from "../images/ucsd-cogsci-logo.png"
import theta from "../images/theta.png"
import dma from "../images/dma2.png"
import horizon from "../images/Horizon_Icon_Square.png"
import spaceship from "../images/Spaceship.jpg"
import breeze from "../images/breeze.png"

const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect()
  const offsetTop = ele.offsetTop
  const offsetBottom = offsetTop + height

  return {
    height,
    offsetTop,
    offsetBottom,
  }
}

const Howard = () => {
  const [visibleSection, setVisibleSection] = useState()
  const landingRef = useRef(null)
  const headerRef = useRef(null)
  const aboutRef = useRef(null)
  const expRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const sectionRefs = [
    { section: "Landing", ref: landingRef },
    { section: "About", ref: aboutRef },
    { section: "Experience", ref: expRef },
    { section: "Projects", ref: projectsRef },
    { section: "Contact", ref: contactRef },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current)
      const scrollPosition = window.scrollY + headerHeight + 2

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele)
          return scrollPosition > offsetTop && scrollPosition < offsetBottom
        } else {
          return null
        }
      })

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section)
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleSection])

  const scrollTo = ele => {
    const { height: headerHeight } = getDimensions(headerRef.current)
    const headerHeightOffset = -Math.abs(headerHeight)
    const y =
      ele.getBoundingClientRect().top + window.pageYOffset + headerHeightOffset

    window.scrollTo({
      top: y,
      behavior: "smooth",
    })
  }

  return (
    <div className="howard">
      <SEO title="Howard Kim" />

      <section className="ho-landing" id="Landing" ref={landingRef}>
        <img
          src={Landing}
          alt="landing backdrop"
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
        <div className="ho-landingText">
          <p style={{ fontSize: "14pt" }}>HELLO,&nbsp;&nbsp; I &nbsp;AM</p>
          <h1 style={{ fontSize: "50pt" }}>Howard Kim</h1>
          <p style={{ fontSize: "20pt" }}>
            I am a Software Engineer based in San Francisco Bay Area.
          </p>
        </div>
        <svg
          id="scrollArrow"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            scrollTo(aboutRef.current)
          }}
          height="7vh"
          stroke="#fff"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        >
          <polyline points="15,50 50,85 85,50"></polyline>
        </svg>
      </section>

      <header className="ho-navContainer" ref={headerRef}>
        <div className="ho-navbar">
          <div>
            <button
              className={`ho-title`}
              onClick={() => {
                scrollTo(landingRef.current)
              }}
            >
              Howard Kim
            </button>
          </div>
          <ul className="ho-nav">
            <li>
              <button
                className={`ho-navbutton ${
                  visibleSection === "Landing" ? "ho-navSelected" : ""
                }`}
                onClick={() => {
                  scrollTo(landingRef.current)
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={`ho-navbutton ${
                  visibleSection === "About" ? "ho-navSelected" : ""
                }`}
                onClick={() => {
                  scrollTo(aboutRef.current)
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={`ho-navbutton ${
                  visibleSection === "Experience" ? "ho-navSelected" : ""
                }`}
                onClick={() => {
                  scrollTo(expRef.current)
                }}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                className={`ho-navbutton ${
                  visibleSection === "Projects" ? "ho-navSelected" : ""
                }`}
                onClick={() => {
                  scrollTo(projectsRef.current)
                }}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className={`ho-navbutton ${
                  visibleSection === "Contact" ? "ho-navSelected" : ""
                }`}
                onClick={() => {
                  scrollTo(contactRef.current)
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </header>

      <section className="ho-about" id="About" ref={aboutRef}>
        <h1>About Me</h1>
        <div className="ho-subtitleBar" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img width="25%" height="auto" alt="portrait" src={me} />
          <p style={{ margin: "0 0 0 2rem" }}>
            Hi!
            <br />
            My name is Howard Kim, but I also go by these other names/alias: Ho
            Kim, 김호, 金瑚, enome. I am a 1.5<sup>th</sup> generation
            Korean-American currently located in San Francisco Bay Area,
            California.
            <br />
            <br />
            I am a graduate of University of California, San Diego (UCSD) with a
            Bachelor of Science degree in Cognitive Science with Specialization
            to Machine Learning & Neural Computation. I have also studied
            Computer Science and Human-Computer Interaction (or also known as
            Design & Interaction), which focuses on design lifecycles and UI/UX
            frontend development.
            <br />
            <br />
            After being graduated, I am working as a Full Stack Software Engineer in
            the Bay Area. With a passion for automation, data, and design
            (both physical & digital), I am focused on engineering and building
            products that are high in quality, scalability, and performance.
          </p>
        </div>
      </section>

      <section
        style={{ width: "100%", backgroundColor: "#f5f5f5" }}
        id="Experience"
        ref={expRef}
      >
        <div className="ho-experience">
          <h1>Experience</h1>
          <div className="ho-subtitleBar" />

          {/* <!-- Striim, Inc. --> */}
          <div className="ho-experienceEntry">
            <img src={striim} width="30%" height="auto" alt="org logo" />
            <div className="ho-entryDetails">
              <h3>Striim</h3>
              <h4>Software Engineer</h4>
              <h5>
               July 2022 ─ CURRENT&nbsp; in &nbsp;Palo Alto, California
              </h5>
              <ul className="ho-jobDetails">
                <li>Part of Advanced Technology Group</li>
              </ul>
            </div>
          </div>

          {/* <!-- PacerPro, Inc. --> */}
          <div className="ho-experienceEntry">
            <img src={pacerpro} width="30%" height="auto" alt="org logo" />
            <div className="ho-entryDetails">
              <h3>PacerPro</h3>
              <h4>Software Engineer</h4>
              <h5>
                February 2022 ─ July 2022&nbsp; in &nbsp;Bay Area, California
              </h5>
              <ul className="ho-jobDetails">
                <li>
                  Enabled the Sales team to expand into new markets by building
                  the backend of a new SaaS offering to support smaller scale
                  law firms, legal organizations, and individual legal
                  practitioners
                </li>
                <li>
                  Designed and developed the backend infrastructure to offer new
                  prospects trial subscriptions by integrating with Stripe
                  compliant to Visa guidelines on monthly subscriptions and
                  automatic payments
                </li>
                <li>
                  Built automated reports to monitor enterprise clients' usage
                  activity of legal documents on a monthly cadence
                </li>
                <li>
                  Migrated deprecated SSO login to latest version of WorkOS to
                  upgrade codebase with improved error handling
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- UCSD IA --> */}
          <div className="ho-experienceEntry">
            <img src={ucsdcogsci} width="30%" height="auto" alt="org logo" />
            <div className="ho-entryDetails">
              <h3>UCSD Department of Cognitive Science</h3>
              <h4>Instructional Apprentice</h4>
              <h5>
                September 2020 ─ December 2020&nbsp; in &nbsp;La Jolla,
                California
              </h5>
              <ul className="ho-jobDetails">
                <li>
                  Led discussion lectures to over 200 students to provide
                  supplementary knowledge beyond course lectures
                </li>
                <li>
                  Collaborated with instructors to improve course outlines and
                  increase average class performance by a letter grade
                </li>
                <li>
                  Garnered 96.7% positive evaluation from students, and improved
                  the course approval rating by 12%
                </li>
                <li>
                  Mentored subset of first-year students to provide support in
                  their higher education progression and career goals
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- THETA.tv --> */}
          <div className="ho-experienceEntry">
            <img src={theta} width="30%" height="auto" alt="org logo" />
            <div className="ho-entryDetails">
              <h3>SLIVER VR Technologies (THETA.tv)</h3>
              <h4>User Engagement Specialist</h4>
              <h5>
                September 2017 ─ July 2019&nbsp; in &nbsp;San Jose, California
              </h5>
              <ul className="ho-jobDetails">
                <li>
                  Designed new features & functionality to improve usability and
                  user experience for both the content creators and their
                  audiences to showcase the company's blockchain as a
                  Peer-to-Peer live streaming platform
                </li>
                <li>
                  Facilitated international partnership with Kakao on a global
                  enterprise-grade blockchain project
                </li>
                <li>
                  Generated marketing content shown during live streams and
                  events throughout the site including banners, lightboxes, and
                  custom pages to promote partnerships and new campaigns
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Digital Media Academy --> */}
          <div className="ho-experienceEntry">
            <img src={dma} width="30%" height="auto" alt="org logo" />
            <div className="ho-entryDetails">
              <h3>Digital Media Academy (Stanford University)</h3>
              <h4>Technical Assistant</h4>
              <h5>
                June 2016 ─ August 2017&nbsp; in &nbsp;Stanford, California
              </h5>
              <ul className="ho-jobDetails">
                <li>
                  Managed and maintained the technical systems & equipment to
                  support a STEM summer camp for thousands of students
                </li>
                <li>
                  Initiated and executed a project to automate resource
                  reallocation tasks with python scripts, increasing
                  productivity of a team of 30+ by at least 80%
                </li>
                <li>
                  Developed new plans for operation environment restructuring
                  and provided hotfixes to ensure high uptime throughout all
                  teams on campus
                </li>
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
            <img
              src={horizon}
              width="35%"
              height="auto"
              alt="current project logo"
            />
            <div style={{ margin: "0 0 0 3em" }}>
              <h3 style={{ marginTop: "0" }}>Horizon Designs</h3>
              <p>
                This is my personal brand project that I am currently working on
                to utilize as a gateway to explore different fields. It is
                purposed to bring life to my personal hobbies, and serves as an
                outlet to experiment new design ideas as I continue to dabble in
                more hobbies in the future.
              </p>
              <div style={{ marginTop: "1.3rem" }}>
                <a className="homelinks" href="https://horizon.howard.kim">
                  Discover &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
        <h2 style={{ marginTop: "7em" }}>Past Projects</h2>
        <div style={{ marginTop: "1em" }}>
          {/* <!-- SpaceShip by Team Astronauts --> */}
          <div className="ho-projectEntry">
            <div className="gridContainer-spaceshipimg">
              <img
                className="projImage"
                width="100%"
                height="auto"
                src={spaceship}
                alt="project content"
              />
            </div>
            <div className="gridContainer-spaceshipCard">
              <div className="spaceshipDetailCard">
                <h2 style={{ marginTop: "0" }}>
                  Comparing shipment options & rates simplified
                </h2>
                <p>
                  Mobile webapp to save users from headaches when sending
                  domestic packages with an one-step solution to take shipping
                  efficiency to the moon.
                </p>
                <div style={{ marginTop: "1.1rem" }}>
                  <a
                    className="homelinks"
                    href="https://a8-spaceship.herokuapp.com"
                  >
                    Discover &gt;
                  </a>
                </div>
                <div style={{ marginTop: "1.1rem" }}>
                  <a className="homelinks" href="/spaceship">
                    Case Study &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Breeze by Team M-TEA --> */}
          <div className="ho-projectEntry">
            <div className="gridContainer-breezeimg">
              <img
                className="projImage"
                width="100%"
                height="auto"
                src={breeze}
                alt="project content"
              />
            </div>
            <div className="gridContainer-breezeCard">
              <div className="breezeDetailCard">
                <h2 style={{ marginTop: "0" }}>
                  Catch wind of your next circle in UC San Diego
                </h2>
                <p>
                  Web platform to aid students in exploring and connecting with
                  campus/student clubs, organizations, and communities at UC San
                  Diego.
                </p>
                <div style={{ marginTop: "1.1rem" }}>
                  <a className="homelinks" href="https://breeze-home.web.app/">
                    Discover &gt;
                  </a>
                </div>
                <div style={{ marginTop: "1.1rem" }}>
                  <a className="homelinks" href="/breeze">
                    Case Study &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ho-contact" id="Contact" ref={contactRef}>
        <svg
          id="bigTriangleColor"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100"
          viewBox="0 0 100 102"
          preserveAspectRatio="none"
        >
          <path d="M0 0 L50 100 L100 0 Z"></path>
        </svg>
        <h1 style={{ marginTop: "2em", color: "#fff" }}>Contact</h1>
        <div className="ho-subtitleBar" style={{ background: "#fff" }} />
        <h2 style={{ color: "#04c2c9" }}>
          <b>Let's Talk!</b>
        </h2>
        <p style={{ color: "#04c2c9", marginBottom: "2em" }}>
          Drop me a message using the form below or email me at&nbsp;
          <a className="email" href="mailto:hello@howard.kim">
            hello@howard.kim
          </a>
        </p>
        <form
          className="form"
          name="Contact Form"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/thank-you"
        >
          <input type="hidden" name="form-name" value="Contact Form" />
          <div className="hide-bot">
            <label>
              Last Name
              <input name="bot-field" />
            </label>
          </div>
          <div className="field">
            <input
              className="input"
              type="text"
              name="Name"
              placeholder="Name*"
              required
            />
          </div>
          <div className="field">
            <input
              className="input"
              type="text"
              name="Email"
              placeholder="Email*"
              required
            />
          </div>
          <div className="field">
            <input
              className="input"
              type="text"
              name="Subject"
              placeholder="Subject*"
              required
            />
          </div>
          <div className="field">
            <textarea
              className="input"
              rows="5"
              type="text"
              name="Message"
              placeholder="Message*"
              required
            />
          </div>
          <div data-netlify-recaptcha="true"></div>
          <button className="button1" type="submit">
            Submit Message
          </button>
        </form>
      </section>

      <FooterDark />
    </div>
  )
}

export default Howard
