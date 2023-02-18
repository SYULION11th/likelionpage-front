import { Container, Row, Col } from "react-bootstrap";
import './Question.css'
import './Write.js'
import './Media.css';
import './Media2.css';
import './Media3.css';
import './Media4.css';
import { Link } from "react-router-dom";

const url = "https://pf.kakao.com/_DfxbkK"


//함수1
function Question() {


  return (
    <Container fluid="fluid" className="p-0">
      <Row style={{ justifyContent: 'center' }}>
        {/* <Col md={12} style={{ padding: '0px' }}> */}
          <div className="titleWrap">
            <div className="textbox1">
              멋쟁이사자처럼 삼육대학교 Q&A
            </div>
            <div className="line1">
            </div> 
              <div className="textbox2">
              무엇이든 물어보세요. 삼육대학교 멋사 운영진들이 직접 답합니다.
            </div> 
          </div>
        {/* </Col> */}

        <Col md={10}>
        <div className="board_list_wrap">
            <div className="qnatext">Q&A<p> 자주 묻는 질문</p></div>
                <div className="board_list">
                    <div className="top">
                        <div className="num">번호</div>
                        <div className="title">제목</div>
                        <div className="date">등록일</div>
                    </div>
                <div>
                    <div className="num">5</div>
                    <div className="title"><Link to="/Page5/" style={{textDecoration:"none", color:"#000"}}>'OT' 필수 참여인가요?</Link></div>
                    <div className="date">2023.02.13</div>
                </div>
                <div>
                    <div className="num">4</div>
                    <div className="title"><Link to="/Page4/" style={{textDecoration:"none", color:"#000"}}>'면접 진행'은 어떻게 되나요?</Link></div>
                    <div className="date">2023.02.13</div>
                </div>
                <div>
                    <div className="num">3</div>
                    <div className="title"><Link to="/Page3/" style={{textDecoration:"none", color:"#000"}}>'1차 서류 결과'는 언제인가요?</Link></div>
                    <div className="date">2023.02.13</div>
                </div>
                <div>
                    <div className="num">2</div>
                    <div className="title"><Link to="/Page2/" style={{textDecoration:"none", color:"#000"}}>'2학기'도 모집하나요?</Link></div>
                    <div className="date">2023.02.13</div>
                </div>
                <div>
                    <div className="num">1</div>
                    <div className="title"><Link to="/Page1/" style={{textDecoration:"none", color:"#000"}}>'멋쟁이사자처럼' 무슨 동아리인가요?</Link></div>
                    <div className="date">2023.02.13</div>
                </div>
            </div>
            </div>

        
            
          <div className="board_page">
            <Link className="num" style={{textDecoration:"none", color:"#000"}} as={Link} to="/Question/">1</Link>
            {/* <Link className="num" style={{textDecoration:"none", color:"#000"}} as={Link} to="/Question/2">2</Link>
            <Link className="num" style={{textDecoration:"none", color:"#000"}} as={Link} to="/Question/3">3</Link>
            <Link className="num" style={{textDecoration:"none", color:"#000"}} as={Link} to="/Question/4">4</Link>
            <Link className="num" style={{textDecoration:"none", color:"#000"}} as={Link} to="/Question/5">5</Link> */}
             
          
                <button className="QButton" style={{textDecoration:"none", color:"#E0E0E0"}} onClick={()=>{window.open(url)}} >
                  질문하기
                </button>
       </div>

        </Col>
      </Row>
    </Container>

);
                }

export default Question;
