import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Main1 from "./Main1.js";
import Main2 from "./Main2.js";
import Main3 from "./Main3.js";
import Main4 from "./Main4.js";
import Main5 from "./Main5.js";
import Main6 from "./Main6.js";
import ScrollDown from "../ScrollDown.js";
import Type from "./Type.js";

import {useState, useEffect} from "react";

function Main() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
    }, []);

    return (
        <Container fluid="fluid" className="p-0">
            <Row style={{
                    justifyContent: "center"
                }}>
                <Col
                    md={12}
                    style={{
                        height: "600px",
                        backgroundImage: "url(img/main.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        filter: "brightness(0.4)"
                    }}></Col>

                <Col md={12}>
                    <div className="typeBox">
                        <Type/>
                    </div>
                    <div className="MainTitleBox">
                        <h1 className="MainTitle">멋쟁이사자처럼 삼육대학교 11기</h1>
                    </div>
                    <button className="MainButton">아기사자 지원하기</button>
                    <ScrollDown/>

                </Col>

                <Col
                    md={12}
                    className={scrollPosition > 250
                        ? "scroll-section-move"
                        : "noscroll-section-move"}>
                    <Main1/>
                </Col>
                <Col
                    md={12}
                    className={scrollPosition > 1000
                        ? "scroll-section-blur"
                        : "noscroll-section-blur"}
                    style={{
                        backgroundImage: "url(img/study-background.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}>
                    <Main2/>
                </Col>
                <Col
                    md={12}
                    className={scrollPosition > 1550
                        ? "scroll-section-blur"
                        : "noscroll-section-blur"}>
                    <Main3/>
                </Col>
                <Col
                    md={12}
                    className={scrollPosition > 2300
                        ? "scroll-section-blur"
                        : "noscroll-section-blur"}
                    style={{
                        backgroundColor: "#015CCC"
                    }}>
                    <Main4/>
                </Col>
                <Col
                    md={12}
                    className={scrollPosition > 3200
                        ? "scroll-section-blur"
                        : "noscroll-section-blur"}>
                    <Main5/>
                </Col>
                <Col
                    md={12}
                    className={scrollPosition > 3700 ? "scroll-section-blur" : "noscroll-section-blur"}
                    style={{
                        backgroundImage: "url(img/lion-background.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}>
                    <Main6/>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;