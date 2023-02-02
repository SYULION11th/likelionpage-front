import {React} from "react";
import {Link} from "react-router-dom";
import { Container,Row,Col } from "react-bootstrap";


function SubmitButton(props) {
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
            <Link class="SubmitButton" as={Link} to="/Submit" onClick={scrollToTop}>
              11기 아기사자 지원하기
            </Link>
          </Col>
        </Row>
      </Container>
    );
}

export default SubmitButton;