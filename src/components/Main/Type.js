import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <div>
            <Typewriter
        options={{
            strings: [
            "POSSIBILITY TO REALITYㅤㅤㅤㅤㅤ멋쟁이사자처럼 삼육대학교 11기",
            ],
            cursor: "|",
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 50,
        }}
        />
        
        </div>
    );
    }

    export default Type