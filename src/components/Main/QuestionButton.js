import {React} from "react";
import {Link} from "react-router-dom";

function QuestionButton(props) {
    const scrollToTop = () => {
        window.scroll({top: 0, behavior: 'smooth'})

    }

    return (

        <Link className="QuestionButton" as={Link} to="/Question" onClick={scrollToTop}>
            <br></br>
            11기 모집 관련 질문하기
        </Link>

    );
}

export default QuestionButton;