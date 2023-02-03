import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <div>
            <Typewriter
        options={{
            strings: [
            "POSSIBILITY TO REALITY",
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