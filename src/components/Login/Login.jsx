import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import './Login.css';

var isSubmit = false;

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);

    const [notAllow, setNotAllow] = useState(true);

    function TextInput() {
        axios
            .post(
                'https://port-0-likelionpage-back-1jx7m2gldjq856s.gksl2.cloudtype.app/api/user/dj-rest-auth/login/',
                {
                    email : email,
                    password : pw,
                })
            .then(function(response) {
                console.log(response);
                alert(`로그인 완료되었습니다.`);
                isSubmit = true;
                sessionStorage.setItem('logedin', 'true');
            })
            .catch(function (error) {
                console.log(error);
                alert(`회원정보를 확인해주세요.`);
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



    useEffect(()=> {
        if (emailValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    },[emailValid, pwValid])

    return(

        <div className="loginPage">
            <div className="contentWrap">
                <div className="inputTitle">이메일 주소</div>
                <div className="inputWrap">
                    <input
                        type='text'
                        className="input" 
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
                <div>
                    <button
                        onClick={ () => {
                            TextInput();
                            GoComplete(navigate);
                        }}
                        disabled={notAllow} 
                        className="bottomButton">
                        로그인
                    </button>
                    <div className="signUp">
                    <Link as={Link} to="/SignUp" className="signUp">
                        회원가입하기
                    </Link>
                    </div>
                </div>
            </div>

            

        </div>
    )
}