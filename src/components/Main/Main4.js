import { React } from "react";
import Card from "react-bootstrap/Card";

function Main4(props) {

    return (
        
        <Card className="experience-card-view">
            <Card.Header>{props.header}</Card.Header>
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                {props.description}
                </Card.Text>

            </Card.Body>
        </Card>
    );
}

export default Main4;