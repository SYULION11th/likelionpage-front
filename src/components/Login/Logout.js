import React,{useState} from "react";

import {Navigate} from "react-router-dom";


function Logout() {
    const [navigateFlag, setNavigateFlag] = useState(false);
    sessionStorage.removeItem("logedin");



    setTimeout(() => {
      setNavigateFlag(true);
    }, 100);

    


    return (
    
    <div>
        {navigateFlag && <Navigate to="/"/>}
    </div>);
}

export default Logout;