import { Container,Row,Col } from "react-bootstrap";
import logo from "../../Assets/logo.png"
import Q from "../../Assets/Q.png"
import './Write.css';
import './Question.js';
import './Page.css';
import './Media.css';
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Addtitle() {
  const [input, setInput] = useState([]);




return(

    <Container fluid="fluid" className="p-0">
      <Row style={{ justifyContent:'center'}}>
      <Col md={12} style={{ padding:'0px'}}>
      <div className="titleWrap">
        <div className="textbox1">
            멋쟁이사자처럼 삼육대학교 Q&A
        </div>
        <div className="line1">
        </div>
        <div className="textbox2">
            무엇이든 물어보세요. 삼육대학교 멋사운영진들이 직접 답합니다.
        </div>
    </div>
          </Col>
        <Col md={10}>
        <div className="board_wrap">
        <div className="board_view_wrap">
            <div className="board_view">
                <div className="title">
                    '2학기'도 모집하나요?
                </div>
                <div className="info">
                    <dl>
                        <dt>번호</dt>
                        <dd>2</dd>
                    </dl>
                    <dl>
                        <dt>글쓴이</dt>
                        <dd>운영진</dd>
                    </dl>
                    <dl>
                        <dt>등록일</dt>
                        <dd>2023.2.13</dd>
                    </dl>
                </div>
                <div className="cont">
                   '멋쟁이 사자처럼'은 한 기수당 1년을 기준으로 활동 하게 됩니다.<br></br>
                    따라서 2학기에는 추가 인원을 모집하지 않습니다.😥 
                    <p></p>
                    1년에 한 번 오는 절호의 기회! 잊지 말고 신청 해 주세요!

             </div>
            </div>
            <div className="bt_wrap">
                <Link to="/Question/" className="on" style={{textDecoration:"none", color:"#0B3479"}} >목록</Link>
            </div>
            </div>
            </div>
        </Col>
      </Row>
</Container>

  );
}

export default Addtitle;
