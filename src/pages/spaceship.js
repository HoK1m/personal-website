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

const SpaceShip = () => {
    const [visibleSection, setVisibleSection] = useState();
    const headerRef = useRef(null);
    const backgroundRef = useRef(null);
    const storyboardRef = useRef(null);
    const prototypeRef = useRef(null);
    const wireframeRef = useRef(null);
    const testRef = useRef(null);
    const reflectionRef = useRef(null);

    const sectionRefs = [
        { section: "Background", ref: backgroundRef },
        { section: "Storyboarding", ref: storyboardRef },
        { section: "Prototyping", ref: prototypeRef },
        { section: "Wireframing", ref: wireframeRef },
        { section: "Testing", ref: testRef },
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
        <Layout seo="SpaceShip | Howard Kim">
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

            <section className="ss-section" id="Background" ref={backgroundRef} style={{ paddingTop: "1.75rem" }}>
                <h1>SpaceShip</h1>
                <img className="ss-projImage" width="100%" height="auto" src={slide} alt="project content" />
                <h3>Background</h3>
                <p>
                    One of my personal gripes about selling things from my hobby (mechanical keyboards) is that I often
                    need to invoice my individual buyers so they can pay for the item before I ship it out to the buyer.
                    However, the item collection (pick-up/delivery) is completely the buyer's responsibility; so in the
                    case of when the item needs to be shipped out, I would need to invoice the buyer again for the
                    shipping costs. <br />
                    <br />
                    Because the buyers have different preferences when it comes to the shipping carriers, I would have
                    to individually get shipping quotes from those carriers. I needed a quicker, more efficient,
                    one-stop solution so I can streamline my selling process within minutes. With just one-click, I can
                    get shipping quotes from all domestic shipping carriers and include that shipping cost on the first
                    invoice, eliminating the need for a second invoice.<br />
                    <br />
                    But maybe... maybe we can just make a more generalized solution? <br />
                    Sending packages for the first time? Or maybe you just don’t send packages that often. The amount of
                    domestic shipping carriers, their own list of shipping options, and their list of extra shipping
                    services (like signature confirmation and insurance), it’s just way too overwhelming for an average
                    person that doesn’t ship things often. What if there was a simple web tool that can simplify this
                    process in just one-go? No need to check with each carrier one by one, just fill out your origin,
                    destination, and package details followed by a single click to save ourselves the headache.
                </p>
            </section>

            <section className="ss-section" id="Storyboarding" ref={storyboardRef}>
                <h3>Storyboarding</h3>
                <p>
                    Normally, we would start the design process by storyboarding, and this would address the problem
                    statement using different potential solutions. However, my team and I were already considering quick
                    and on-the-spot solutions during our 'needfinding' process. In our 'needfinding' process, we would
                    each come up with personal/daily needs and throw them onto our board until they sticked. And when I
                    say "they sticked", I mean that the 'needs' were capable of being more generalized to the masses, as
                    well as considering whether our quick & on-the-spot solutions were feasible. <br />
                    <br />
                    For this particular focus, we realized there is no other way to go around the fact that we will always
                    require users to enter a set of information and get results. So for our storyboards, we focused on
                    potential target audience for our mobile webapp. We separated our target audience into three different
                    groups: a typical consumer, small business owners, and corporations.<br />
                    <br /><br />
                </p>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <img className="ss-projImage" width="60%" height="auto" src={storyboard1} alt="project content" />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <img className="ss-projImage" width="40%" height="auto" src={storyboard2} alt="project content" />
                    <img className="ss-projImage" width="40%" height="auto" src={storyboard3} alt="project content" />
                </div>
            </section>

            <section className="ss-section" id="Prototyping" ref={prototypeRef}>
                <h3>Prototyping</h3>
                <p>
                    For our next step of the design process, we went onto paper prototyping, which basically allows us 
                    to start mocking up our mobile webapp design as paper and pen sketches. In this process, we were 
                    stressed on the idea of 'buy-in' and 'ownership'; as a follow-up, we decided to come up 
                    with mock-up designs individually, then come together again to start pitching each other our design 
                    elements and ideas. This is contrary to the advice given by our mentor (to work on the prototypes 
                    together) because I was concerned that our each individual vision of the final product would become 
                    muddled/contaiminated by working together. <br/>
                    <br/>
                    Two of the paper prototypes came out relatively very similar to each other, so they were absorbed 
                    into one. The final two paper prototypes that were submitted are shown below.
                    <br/> <br/>
                </p>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <img className="ss-projImage" width="40%" height="auto" src={prototype1} alt="project content" />
                    <img className="ss-projImage" width="40%" height="auto" src={prototype2} alt="project content" />
                </div>
                <p>
                    After few sessions of Heuristic Evaluation(HE) and gathering feedback, we came back to discuss what 
                    particular design choices worked well and ran our bids on 'buy-in' and 'ownership'.  We also used this 
                    chance to iterate on certain elements with QoL changes and improvements with the feedback from our HE 
                    sessions.  The final paper prototype with combined design elements & improvements is shown below. <br/>
                    <br/><br/>
                </p>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <img className="ss-projImage" width="80%" height="auto" src={prototype3} alt="project content" />
                </div>
            </section>

            <section className="ss-section" id="Wireframing" ref={wireframeRef}>
                <h3>Wireframing</h3>
                <p>
                    Our wireframing process was different from others; this process was well-absorbed into our prototyping 
                    process. Because one of my teammates (Melody Yu) was very comfortable with wireframing & Figma 
                    mock-ups, we each took one paper prototypes to wireframe on Figma after we had our final two paper 
                    prototypes to be submitted. These two sets of wireframes from the final two paper prototypes are shown 
                    below.<br/>
                    <br/> <br/>
                </p>
                <img className="ss-projImage" width="100%" height="auto" src={wireframe1} alt="project content" />
                <img className="ss-projImage" width="100%" height="auto" src={wireframe2} alt="project content" />
                <p>
                    For our final paper prototype, Melody completed the wireframes while I completed the skeleton HTML/CSS 
                    for the live version of our mobile webapp. Wireframe for the final paper prototype is shown below.<br/>
                    <br/><br/>
                </p>
                <img className="ss-projImage" width="100%" height="auto" src={wireframe3} alt="project content" />
            </section>

            <section className="ss-section" id="Testing" ref={testRef}>
                <h3>Testing</h3>
                <p>
                    Our testing process was also different from others in the sense that we weren't necessarily testing 
                    for the purpose of design but rather for the purpose of functionality. In terms of design user testing, 
                    it was absorbed with the prototyping and wireframing process as Heuristic Evaluation Sessions. 
                    However for the functionality testing, I had to make sure that the front-end is asking for the correct 
                    necessary information for the API to fetch the shipping rate estimates. <br/>
                    <br/>
                    This process also includes making sure that the addresses inputted by the users are correctly being 
                    validated (check if address exist), form validation (checking for valid numbers for package 
                    specifications), and any other error handling that may be thrown by the API. During this phase, 
                    Melody stepped up to fix up rest of the front-end and add some proper styling to the webapp. The final 
                    product with proper styling is shown below. <br/>
                    <br/><br/>
                </p>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <img className="ss-projImage" width="30%" height="auto" src={final1} alt="project content" />
                    <img className="ss-projImage" width="30%" height="auto" src={final2} alt="project content" />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <img className="ss-projImage" width="30%" height="auto" src={final3} alt="project content" />
                    <img className="ss-projImage" width="30%" height="auto" src={final4} alt="project content" />
                </div>
            </section>

            <section className="ss-section" id="Reflection" ref={reflectionRef}>
                <h3>Reflection</h3>
                <p>
                    Overall, I believe that this experience was a really good way for me to learn  
                    one of the ways of going through a design process, as well as gaining experience in working 
                    in teams and making difficult decisions. I learned that its possible for people to have extremely
                    different work ethics, priorities/focus, as well as skills & their levels. Furthermore, I 
                    learned how important it is to hold people accountable for their assigned tasks and the needed 
                    soft skills in handling team dynamics. After all this, I still struggle in finding
                    the best course of action on handling teammates that may refuse 'growth'; however, I realized that 
                    it is still possible for those teammates to contribute as long as they work in their area of preference 
                    or expertise. <br/>
                    <br/>
                    I want to personally thank Melody for stepping up with me to fill the lack of manpower and presevering
                    throughout the rough situations and the project. I really appreciate the work that Melody put forward 
                    in making sure the front-end gets well taken care of while I focused on the backend to ensure this 
                    project is fully functional. In the future, I would like to continue on this project and build this 
                    into production level application with more interesting and QoL features. 
                </p>
            </section>
        </Layout >
    )
}

export default SpaceShip