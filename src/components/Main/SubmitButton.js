import {React} from "react";
import {Link} from "react-router-dom";


function SubmitButton(props) {
    const scrollToTop = () => {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
  
    }

    return (
        <Link className="SubmitButton" as={Link} to="/Submit" onClick={scrollToTop}>
          <br></br>
          11기 아기사자 지원하기
        </Link>
    );
}

export default SubmitButton;