import {React} from "react";
import {Link} from "react-router-dom";
import { Container,Row,Col } from "react-bootstrap";


function QuestionButton(props) {
    const scrollToTop = () => {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
  
    }

    return (
      <Container fluid="fluid">
        <Row style={{ justifyContent: "center" }}>
          <Col xs={12} md={12}>
            <Link class="QuestionButton" as={Link} to="/Question" onClick={scrollToTop}>
            11기 모집 관련 질문하기            </Link>
          </Col>
        </Row>
      </Container>
    );
}

export default QuestionButton;