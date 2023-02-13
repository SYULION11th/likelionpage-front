// import { Container,Row,Col } from "react-bootstrap";
// import logo from "../../Assets/logo.png"
// import './Question.css'
// import './Write.js'
// import {Link} from "react-router-dom";
// import React, {useState, useEffect} from "react";
// import axios from "axios";



// function Question() {

//   const [text, setText] = useState([]);

//   useEffect(() => {

//     axios.get("https://port-0-likelionpage-back-1jx7m2gldjq856s.gksl2.cloudtype.app/api/quest/list/page=2")
//     .then((response) => { //이 주소로 get요청을 하면 
//       setText([...response.data.results]);
//       console.log(response.data.results);
      
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }, []);


//   return (
//     <Container fluid="fluid" className="p-0">
//       <Row style={{ justifyContent:'center'}}>
//       <Col md={12} style={{ padding:'0px'}}>
//       <div className="titleWrap">
//         <div className="textbox1">
//             멋쟁이사자처럼 삼육대학교 Q&A
//         </div>
//         <div className="line1">
//         </div>
//         <div className="textbox2">
//             무엇이든 물어보세요. 삼육대학교 멋사운영진들이 직접 답합니다.
//         </div>
//     </div>
//           </Col>
  
//         <Col md={10}>
//     <div className="board_list_wrap">
//     <div className="qnatext">Q&A</div>
//         <div className="board_list">
//             <div class="top">
//                 <div class="num">번호</div>
//                 <div class="title">제목</div>
//                 <div class="date">등록일</div>
//             </div>
//             <div>
//             {text.map((text) => (
//               <div style={{ width:'100%', display:'flex', flexDirection:'row'}}>
//                 <p className="num" style={{marginRight:'20px'}}>{text.qid}</p>
//                 <p className="title">{text.qtitle}</p>
//                 <p className="date">{text.qcreated_at}</p>
//               </div>
//             ))} 
// </div>
//     </div>
//             <div className="bt_wrap">
//             {/* /*<a href className="q_bt">질문하기</a>*/}
//             <Link className="QButton" as={Link} to="/Question/Write">
// 질문하기        </Link>
//             </div>
//     </div>


//     <div class="board_page">
//     <Link className="num" as={Link} to="/Question/">1</Link>            
//     <Link className="num" as={Link} to="/Question/2">2</Link>             
//     <Link className="num" as={Link} to="/Question/3">3</Link>
//     <Link className="num" as={Link} to="/Question/4">4</Link>
//     <Link className="num" as={Link} to="/Question/5">5</Link>
//         </div>
//         </Col>
//         <Col md={12}>
//         </Col>
//       </Row>
// </Container>

//   );
// }

// export default Question;
