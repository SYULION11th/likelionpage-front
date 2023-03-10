import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import './SignUp.css';

var isSubmit = false;

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [pw2, setPw2] = useState('');
    const [notEqual, setNotEqual] = useState(false);

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [pwValid2, setPwValid2] = useState(false);

    const [notAllow, setNotAllow] = useState(true);

    function TextInput() {
        axios
            .post(
                'https://port-0-likelionpage-back-1jx7m2gldjq856s.gksl2.cloudtype.app/api/user/dj-rest-auth/registration/',
                
                {
                    // username : getName,
                    email : email,
                    password1 : pw,
                    password2 : pw2,
                })
            .then(function(response) {
                console.log(response);
                alert(`회원가입 완료되었습니다.`);
                isSubmit = true;
            })
            .catch(function (error) {
                console.log(error);
                alert(`입력 값을 확인해주세요.`);
                isSubmit = false;
            });
        }
    
    function GoComplete(navigate) {
    
        setTimeout(function () {
            if (isSubmit === true) {
                navigate("/");
            }
    
        }, 2000);
    }
    

    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(regex.test(email)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }

    const handlePassword = (e) => {
        setPw(e.target.value);
        const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if(regex.test(e.target.value)) {
            setPwValid(true);
        }else {
            setPwValid(false);
        }
    } 

    function handlePassword2() {
        var password2 = document.getElementById("password2").value;
        setPw2(password2);
    }

    function onClickConfirmButton() {
        if(pw!==pw2) {
            setNotEqual(true);
            alert('패스워드가 일치하지 않습니다.');
        }
        else {
            setNotEqual(false);
        }
    }

    useEffect(()=> {
        if (emailValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    },[emailValid, pwValid])

    return(
        <div className="signUpPage">
            <div className="contentWrap">
                <div className="inputTitle">이름</div>
                <div className="inputWrap">
                    <input
                        type='text'
                        className="input"
                        id="name"
                        placeholder="김멋사"
                    />
                </div>
                <div style={{marginTop:"26px"}} className="inputTitle">이메일 주소</div>
                <div className="inputWrap">
                    <input
                        type='text'
                        className="input" 
                        id= "email"
                        placeholder="likelion@likelion.org"
                        value={email} 
                        onChange={handleEmail}/>
                </div>
                <div className="errorMessageWrap">
                    {
                        !emailValid && email.length > 0 && (
                            <div>올바른 이메일을 입력해주세요.</div>
                        )}
                </div>

                <div style={{marginTop:"26px"}} className="inputTitle">비밀번호</div>
                <div className="inputWrap">
                    <input
                        type='password'
                        className="input" 
                        id= "password"
                        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                        value={pw}
                        onChange={handlePassword}
                    />
                </div>
                <div className="errorMessageWrap" >
                    {
                        !pwValid && pw.length > 0 && (
                            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                        )}
                </div>
                <div style={{marginTop:"26px"}} className="inputTitle">비밀번호 확인</div>
                <div className="inputWrap">
                    <input
                        type='password'
                        className="input"
                        id="password2" 
                        placeholder="영문, 숫자, 특수문자 포함 10자 이상"
                        value={pw2}
                        onChange={() => {handlePassword2(); }}
                    />
                </div>
                <div className="errorMessageWrap" >
                    { notEqual === true ? <div>비밀번호가 일치하지 않습니다.</div> : <div></div>}
                        
                </div>

                
                <div>
                    <button
                            onClick={ () => {
                                onClickConfirmButton();
                                TextInput();
                                GoComplete(navigate);
                            }}
                            disabled={notAllow} 
                            className="bottomButton">
                            회원가입하기
                    </button>
                </div>
            </div>
        </div>
    )
}