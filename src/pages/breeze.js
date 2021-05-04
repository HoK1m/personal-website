import React, { useRef, useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "@fontsource/raleway"
import "@fontsource/open-sans"
import "../css/spaceship.css"

//photos
import slide from "../images/Spaceship.jpg"
import storyboard1 from "../images/storyboard1.jpg"
import storyboard2 from "../images/storyboard2.jpg"
import storyboard3 from "../images/storyboard3.jpg"
import prototype1 from "../images/prototype1.jpg"
import prototype2 from "../images/prototype2.jpg"
import prototype3 from "../images/prototype3.jpg"
import wireframe1 from "../images/wireframe1.png"
import wireframe2 from "../images/wireframe2.png"
import wireframe3 from "../images/wireframe3.png"
import final1 from "../images/final-1.png"
import final2 from "../images/final-2.png"
import final3 from "../images/final-3.png"
import final4 from "../images/final-4.png"


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

const Breeze = () => {

    const [visibleSection, setVisibleSection] = useState();

    const headerRef = useRef(null);
    const backgroundRef = useRef(null);
    const storyboardRef = useRef(null);
    const prototypeRef = useRef(null);
    const wireframeRef = useRef(null);
    const testRef = useRef(null);
    const finalRef = useRef(null);
    const reflectionRef = useRef(null);

    const sectionRefs = [
        { section: "Background", ref: backgroundRef },
        { section: "Storyboarding", ref: storyboardRef },
        { section: "Prototyping", ref: prototypeRef },
        { section: "Wireframing", ref: wireframeRef },
        { section: "Testing", ref: testRef },
        { section: "Final", ref: finalRef },
        { section: "Reflection", ref: reflectionRef },
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
                                className={`ss-navbutton ${visibleSection === "Storyboarding" ? "ss-navSelected" : ""}`}
                                onClick={() => { scrollTo(storyboardRef.current); }}
                            >Storyboarding</button>
                        </li>
                        <li>
                            <button
                                className={`ss-navbutton ${visibleSection === "Prototyping" ? "ss-navSelected" : ""}`}
                                onClick={() => { scrollTo(prototypeRef.current); }}
                            >Prototyping</button>
                        </li>
                        <li>
                            <button
                                className={`ss-navbutton ${visibleSection === "Wireframing" ? "ss-navSelected" : ""}`}
                                onClick={() => { scrollTo(wireframeRef.current); }}
                            >Wireframing</button>
                        </li>
                        <li>
                            <button
                                className={`ss-navbutton ${visibleSection === "Testing" ? "ss-navSelected" : ""}`}
                                onClick={() => { scrollTo(testRef.current); }}
                            >Testing</button>
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

            <section className="ss-section" id="Storyboarding" ref={storyboardRef}>
                <h3>Storyboarding</h3>
                <img className="ss-projImage" width="100%" height="auto" src={storyboard1} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={storyboard2} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={storyboard3} alt="project content" />
            </section>

            <section className="ss-section" id="Prototyping" ref={prototypeRef}>
                <h3>Prototyping</h3>
                <img className="ss-projImage" width="100%" height="auto" src={prototype1} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={prototype2} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={prototype3} alt="project content" />
            </section>

            <section className="ss-section" id="Wireframing" ref={wireframeRef}>
                <h3>Wireframing</h3>
                <img className="ss-projImage" width="100%" height="auto" src={wireframe1} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={wireframe2} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={wireframe3} alt="project content" />
            </section>

            <section className="ss-section" id="Testing" ref={testRef}>
                <h3>Testing</h3>
            </section>

            <section className="ss-section" id="Reflection" ref={reflectionRef}>
                <h3>Reflection</h3>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <img className="ss-projImage" width="30%" height="auto" src={final1} alt="project content" />
                    <img className="ss-projImage" width="30%" height="auto" src={final2} alt="project content" />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <img className="ss-projImage" width="30%" height="auto" src={final3} alt="project content" />
                    <img className="ss-projImage" width="30%" height="auto" src={final4} alt="project content" />
                </div>
            </section>


        </Layout >
    )
}

export default Breeze