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
                    '면접진행'은 어떻게 되나요?
                </div>
                <div className="info">
                    <dl>
                        <dt>번호</dt>
                        <dd>4</dd>
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
                대면으로 진행되며 면접일정은 적어주신 시간을 토대로 임의 배정됩니다. 불가능한 시간대에 배정될 경우 따로 연락주시면 조정하도록 하겠습니다.<br></br>
                <p></p>
                장소 : 추후 공지 예정<br></br>
                일시 : 3/13 ~ 3/18<br></br>
                대상 : 1차 서류 합격자<br></br>
                진행시간 : 약 15분<br></br>
                <p></p>
                *면접시작 최소 5분전에 면접장소로 와주시길 바랍니다.

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
