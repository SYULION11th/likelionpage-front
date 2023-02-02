import { React } from "react";
import Card from "react-bootstrap/Card";

function StudyCard(props) {

    return (
        
        <Card className="study-card-view">
            <Card.Body>
                <Card.Text style={{ textAlign: "justify" }}>
                {props.description}
                </Card.Text>

            </Card.Body>
        </Card>
    );
}

export default StudyCard;