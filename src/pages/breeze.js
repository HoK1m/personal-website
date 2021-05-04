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
import wireframe6 from "../images/Landing_Page-3.png"
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
    const adjustmentRef = useRef(null);
    const reflectionRef = useRef(null);

    const sectionRefs = [
        { section: "Background", ref: backgroundRef },
        { section: "Use Cases", ref: useCaseRef },
        { section: "Groundwork", ref: groundworkRef },
        { section: "Refining", ref: refineRef },
        { section: "Adjustments", ref: adjustmentRef },
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
                                className={`ss-navbutton ${visibleSection === "Adjustments" ? "ss-navSelected" : ""}`}
                                onClick={() => { scrollTo(adjustmentRef.current); }}
                            >Adjustments</button>
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

            <section className="ss-section" id="Background" ref={backgroundRef} style={{paddingTop: "1.75rem"}}>
                <h1>Breeze</h1>
                <img className="ss-projImage" width="100%" height="auto" src={slide} alt="project content" />
                <h3>Background</h3>
                <p></p>
            </section>

            <section className="ss-section" id="Use Cases" ref={useCaseRef}>
                <h3>Design Use Cases / User Stories</h3>
            </section>

            <section className="ss-section" id="Groundwork" ref={groundworkRef}>
                <h3>Groundwork</h3>
                <img className="ss-projImage" width="100%" height="auto" src={prototype1} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={prototype2} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={prototype3} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={prototype4} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={prototype5} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={prototype6} alt="project content" />
            </section>

            <section className="ss-section" id="Refining" ref={refineRef}>
                <h3>Refining</h3>
                <img className="ss-projImage" width="100%" height="auto" src={wireframe1} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={wireframe2} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={wireframe3} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={wireframe4} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={wireframe5} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={wireframe6} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={wireframe7} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={wireframe8} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={wireframe9} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={wireframe10} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={wireframe11} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={wireframe12} alt="project content" />
            </section>

            <section className="ss-section" id="Adjustments" ref={adjustmentRef}>
                <h3>Adjustments</h3>
                <img className="ss-projImage" width="100%" height="auto" src={search} alt="project content" />
            </section>

            <section className="ss-section" id="Reflection" ref={reflectionRef}>
                <h3>Reflection</h3>
            </section>
        </Layout >
    )
}

export default Breeze