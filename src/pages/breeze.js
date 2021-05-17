import React, { useRef, useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "@fontsource/raleway"
import "@fontsource/open-sans"
import "../css/breeze.css"

//photos
import slide from "../images/Breeze1.png"
import prototype1 from "../images/sketch1.jpg"
import prototype2 from "../images/sketch2.jpg"
import prototype3 from "../images/mockup.png"
import prototype4 from "../images/mockup1.png"
import prototype5 from "../images/mockup2.png"
import prototype6 from "../images/mockup3.png"
import wireframe1 from "../images/Landing_Page-1.png"
import wireframe2 from "../images/Landing_Page-2.png"
import wireframe3 from "../images/Landing_Page-3.png"
import wireframe4 from "../images/Landing_Page-4.png"
import wireframe5 from "../images/Landing_Page-5.png"
import wireframe7 from "../images/settings1.png"
import wireframe8 from "../images/settings2.png"
import wireframe9 from "../images/settings3.png"
import wireframe10 from "../images/calendar1.png"
import wireframe11 from "../images/Feed1.png"
import wireframe12 from "../images/Feed2.png"
import search from "../images/search.png"


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

const Breeze = () => {
    const [visibleSection, setVisibleSection] = useState();
    const headerRef = useRef(null);
    const backgroundRef = useRef(null);
    const useCaseRef = useRef(null);
    const groundworkRef = useRef(null);
    const refineRef = useRef(null);
    const improvisationRef = useRef(null);
    const reflectionRef = useRef(null);

    const sectionRefs = [
        { section: "Background", ref: backgroundRef },
        { section: "Use Cases", ref: useCaseRef },
        { section: "Groundwork", ref: groundworkRef },
        { section: "Refining", ref: refineRef },
        { section: "Improvisation", ref: improvisationRef },
        { section: "Reflection", ref: reflectionRef },
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
        <Layout seo="Breeze | Howard Kim">
            <header className="ho-navContainer" ref={headerRef}>
                <div className="ho-navbar">
                    <div>
                        <Link
                            to="/"
                            className={`ho-title`}
                        >Howard Kim</Link>
                    </div>
                    <ul className="ho-nav">
                        <li>
                            <button
                                className={`ss-navbutton ${visibleSection === "Background" ? "ss-navSelected" : ""}`}
                                onClick={() => { scrollTo(backgroundRef.current); }}
                            >Background</button>
                        </li>
                        <li>
                            <button
                                className={`ss-navbutton ${visibleSection === "Use Cases" ? "ss-navSelected" : ""}`}
                                onClick={() => { scrollTo(useCaseRef.current); }}
                            >Use Cases</button>
                        </li>
                        <li>
                            <button
                                className={`ss-navbutton ${visibleSection === "Groundwork" ? "ss-navSelected" : ""}`}
                                onClick={() => { scrollTo(groundworkRef.current); }}
                            >Groundwork</button>
                        </li>
                        <li>
                            <button
                                className={`ss-navbutton ${visibleSection === "Refining" ? "ss-navSelected" : ""}`}
                                onClick={() => { scrollTo(refineRef.current); }}
                            >Refining</button>
                        </li>
                        <li>
                            <button
                                className={`ss-navbutton ${visibleSection === "Improvisation" ? "ss-navSelected" : ""}`}
                                onClick={() => { scrollTo(improvisationRef.current); }}
                            >Improvisation</button>
                        </li>
                        <li>
                            <button
                                className={`ss-navbutton ${visibleSection === "Reflection" ? "ss-navSelected" : ""}`}
                                onClick={() => { scrollTo(reflectionRef.current); }}
                            >Reflection</button>
                        </li>
                    </ul>
                </div>
            </header>

            <section className="ss-section" id="Background" ref={backgroundRef} style={{ paddingTop: "1.75rem" }}>
                <h1>Breeze</h1>
                <img className="ss-projImage" width="100%" height="auto" src={slide} alt="project content" />
                <h3>Background</h3>
                <p>
                    Back when I first started at UC San Diego, what I found to be significantly inconvenient was the
                    fact that there was a lack of online resources for UCSD campus organizations. All I found was a
                    list of currently active clubs (that was registered with Associated Students) for that particular
                    school year. This list would especially be sparse when it's the first few weeks of the academic
                    year because there would be some clubs that weren’t ‘renewed’ for that academic year resulting in
                    not showing up on the list. Even if particular clubs were on that list, the amount of information
                    that I can access about that club was very limited and skimpy. There was a need to change that. A
                    way for students to access primary contact information for these clubs/organizations as well as
                    the club official website or page on a social media platform were all very much needed.
                </p>
                <h2 style={{ fontFamily: "Open Sans" }}>
                    " Because of the lack of school resources online, students looking for a specific area of interest
                    or finding information in clubs/organizations of their interests can be difficult. "
                </h2>
            </section>

            <section className="ss-section" id="Use Cases" ref={useCaseRef}>
                <h3>Design Use Cases / User Stories</h3>
                <p>
                    For this project, the foundation of all deliverables and implementations were based on the 
                    descriptions outlined by the 'Use Cases'. Each 'Use Case' is a detailed description and the steps 
                    involved with a users' interaction with the application on how it provides functionality. A 'Use Case' 
                    is needed for each complete idea implemented by the application. Some examples of 'Use Case' includes 
                    the following: Register, Login, Logout, View Page, Create Event, Edit Event, Add Events to Calendar.
                    <br/><br/>
                    In addition, 'User Stories' were used in tandem with 'Use Cases' to design and implement features of 
                    the web platform. Each 'User Story' describes the type of user, what they want and why; basically 
                    describing each 'Use Cases' from an end-user perspective. For Breeze, we divided the 'User Stories' 
                    into three different cases: Baseline General User, Student User, and Campus Affiliate User. The 
                    following list is few examples of what a typical 'User Story' would look like: 
                    <ul>
                        <li>As a general user, I want to log-in, so that I can be secure and save the preferences linked to my account.</li>
                        <li>As a general user, I want to be able to message administrators, so that I can contact administrators with any inquiry or feedback that I have.</li>
                        <li>As a general user, I want to be able to delete my account, so that my information will not be saved or viewable if I no longer want to use the site.</li>
                        <br/>
                        <li>As a student, I want to add my interests to the app and view them in a visually straightforward manner, so that the discovery feed can be personalized and tailored to show me the clubs which match my interests.</li>
                        <li>As a student, I want to subscribe to affiliates so that I can keep up to date with the affiliates that I am interested in and receive their posts in my feed.</li>
                        <li>As a student, I want to be able to search for organizations by name and by tag so that I can find organizations that cater to my interests.</li>
                        <br/>
                        <li>As a campus affiliate, I want to be able to modify the tags of my organization so that students of the app with matching interest will see my organization.</li>
                        <li>As a campus affiliate, I want to post events to students subscribed to my org, and have those posts show up in their subscription feed, so that our subscribers can stay up-to-date with our events.</li>
                        <li>As a campus affiliate, I want to maintain my affiliate page, so that students can see all my updated information compiled in one place.</li>
                    </ul>
                </p>
            </section>

            <section className="ss-section" id="Groundwork" ref={groundworkRef}>
                <h3>Groundwork</h3>
                <p>
                    
                </p>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <img className="ss-projImage" width="45%" height="auto" src={prototype1} alt="project content" />
                    <img className="ss-projImage" width="45%" height="auto" src={prototype2} alt="project content" />
                </div>
                <img className="ss-projImage" width="100%" height="auto" src={prototype3} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={prototype5} alt="project content" />
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <img className="ss-projImage" width="40%" height="auto" src={prototype4} alt="project content" />
                    <img className="ss-projImage" width="40%" height="auto" src={prototype6} alt="project content" />
                </div>
            </section>

            <section className="ss-section" id="Refining" ref={refineRef}>
                <h3>Refining</h3>
                <img className="ss-projImage" width="100%" height="auto" src={wireframe1} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={wireframe2} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={wireframe3} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={wireframe4} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={wireframe5} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={wireframe8} alt="project content" />
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <img className="ss-projImage" width="45%" height="auto" src={wireframe7} alt="project content" />
                    <img className="ss-projImage" width="45%" height="auto" src={wireframe9} alt="project content" />
                </div>
                <img className="ss-projImage" width="100%" height="auto" src={wireframe10} alt="project content" />
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <img className="ss-projImage" width="45%" height="auto" src={wireframe11} alt="project content" />
                    <img className="ss-projImage" width="45%" height="auto" src={wireframe12} alt="project content" />
                </div>
            </section>

            <section className="ss-section" id="Improvisation" ref={improvisationRef}>
                <h3>Improvisation</h3>
                <img className="ss-projImage" width="100%" height="auto" src={search} alt="project content" />
            </section>

            <section className="ss-section" id="Reflection" ref={reflectionRef}>
                <h3>Reflection</h3>
            </section>
        </Layout >
    )
}

export default Breeze