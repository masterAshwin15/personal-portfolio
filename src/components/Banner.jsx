import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bannerImg from "../assets/img/black_purple.jpg"
import TrackVisibility from 'react-on-screen';
import 'animate.css';


export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Developing", "Cybersecurity", "Cloud Engineering", "AI Engineering", "Machine Learning", "DevOps Engineering"];
    const [text, setText] = useState('');
    const [val, setVal] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const intervalTime = 500;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();

        }, val);

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if(isDeleting) {
            setVal(prevVal => prevVal / 1.2);
        }

        if(!isDeleting && updatedText == fullText) {
            setIsDeleting(true);
            setVal(intervalTime);
        } else if(isDeleting && updatedText == "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setVal(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }


    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div className="animate__animated animate__fadeIn">
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi!! I'm Ashwin, I am interested in `} <span className="txt-rotate" data-period="1000" data-rotate='["Software Developing", "Cybersecurity", "Cloud Engineering", "AI Engineering", "Machine Learning", "DevOps Engineering"]'><span className="wrap">{text}</span></span></h1>
                                <p>I am currently a <b>fourth</b> year student at the University of Waterloo and Wilfrid Laurier University, where I am pursuing my Bachelors of Computer Science at UW and Bachelors of Business
                                Administration at WLU. </p>
                            </div>
                    </Col>
                                        
                </Row>
            </Container>
        </section>
    )


}