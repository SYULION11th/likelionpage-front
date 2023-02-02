import {React} from "react";
import {Link} from "react-router-dom";
import { Container,Row,Col } from "react-bootstrap";


function ProjectButton(props) {
    const scrollToTop = () => {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
   
    }

    return (
      <Container fluid="fluid">
        <Row style={{ justifyContent: "center" }}>
          <Col xs={6} md={2}>
            <Link class="projectButton" as={Link} to="/projects" onClick={scrollToTop}>
              프로젝트 보러가기
            </Link>
          </Col>
        </Row>
      </Container>
    );
}

export default ProjectButton;