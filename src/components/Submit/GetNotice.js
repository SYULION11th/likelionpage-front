import React, {useState} from "react";
import axios from "axios";


function GetNotice() {
  const [text, setText] = useState([]);


  axios.get("https://port-0-likelionpage-back-1jx7m2gldjq856s.gksl2.cloudtype.app/api/jungbo/")
    .then((response) => {
      setText([...response.data]);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div>
      {text.map((text) => (
        <div style={{ width:"100px", height:"100px"}}>
          <h1>{text.name}</h1>
          <p>{text.Department}</p>
        </div>
      ))}
    </div>
  );

};

export default GetNotice;