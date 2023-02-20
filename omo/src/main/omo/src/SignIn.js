import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import signin_img from './static/images/login.png'
import axios from "axios";


// 뒤로가기
const SignIn = () => {
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    const [person, setPerson] = useState("")

    useEffect(() => {
        axios.get('/test').then(response => setPerson(response.data))
            .catch(error => console.log(error))
    }, []);

    const name = person.name
    const job = person.job


    const [input_id, set_input_id] = useState("")
    const [input_pw, set_input_pw] = useState("")

    const handleInput_id = (e) => {
        set_input_id(e.target.value)
    }
    const handleInput_pw = (e) => {
        set_input_pw(e.target.value)
    }

    const onClickLogin = () => {
        if (handleInput_id == name && handleInput_pw == job) {
            console.log('1')
            navigate('/')
        }
    }

    return (
        <div className="container">
            <div className="signin_con">
                <div className="signin_con2">
                    <img src={signin_img} alt='signinimg' />
                    <form className="signin_form">
                        <div className="signin_div"><input type="text" value={input_id} onChange={handleInput_id} placeholder="UserName" className="signin_input" /></div>
                        <div className="signin_div"><input type="password" value={input_pw} onChange={handleInput_pw} placeholder="PassWord" className="signin_input" /></div>
                        <div className="signin_div"><button onClick={onClickLogin} className="signin_btn" value={"로그인"}>로그인</button></div>
                    </form>
                    <div className="option">
                        <Link className="linkstyle" to='/signup'>회원가입</Link>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <Link className="linkstyle" to='/search'>회원정보 찾기</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;