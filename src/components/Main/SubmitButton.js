import { React } from "react";
import { Link } from "react-router-dom";

function SubmitButton(props) {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  //   return (
  //     <Link className="SubmitButton" as={Link} to="/Submit" onClick={scrollToTop}>
  //       <br></br>
  //       11기 아기사자 지원하기
  //     </Link>
  // );
  // 축제 홍보용 수정
  return (
    <Link
      className="SubmitButton"
      as={Link}
      to="/"
      onClick={() => {
        alert("11기 지원이 마감되었습니다. 12기로 만나요!");
      }}
    >
      <br></br>
      11기 아기사자 지원하기
    </Link>
  );
}

export default SubmitButton;
