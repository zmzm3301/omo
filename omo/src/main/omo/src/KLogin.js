import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import './klogin.css'
import kakaologin from './static/images/kakao_login_medium_narrow.png';
import kakaologout from './static/images/free-icon-sign-out-6461623.png';
import { useCookies } from "react-cookie";


function KLogin() {
    const [, , removeCookie] = useCookies('nickName')

    const REST_API_KEY = "8ef1d7ff4079cc081e948ea0988aafea";
    const REDIRECT_URI = "http://localhost:3000/klogin";

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`;
    const KAKAO_LOGOUT_URL = `http://localhost:3000/klogout`

    const [kperson, setKPerson] = useState('')
    const [nickName, setNickName] = useState('')
    const [email, setEmail] = useState('')
    const [profile, setProfile] = useState('')

    console.log(window.location)
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    
    useEffect(() => {
        if(code !== null) {
            axios.get('/klogin',
                    {params: {code: code}}
                ).then(response => { 
                    console.log(response)
                    setKPerson(response.data)

                }).then(() => {
                    window.history.pushState(kperson, null, "http://localhost:3000")
                })
        }
    })

    function deleteCookie() {
        removeCookie('nickName');
        axios.get('/deleteCookie')
    }

    axios.get("/getCookie").then(response => {
        var arr = response.data.split(" ")
        const nickName = arr[0];
        const email = arr[1];
        const profile = arr[2];

        setNickName(nickName)
        setEmail(email)
        setProfile(profile)
    })
    
    if(nickName !== "") {
        axios.post("/addkperson", null, {
            params: {
                nickname: nickName,
                email: email,
                profile: profile,
            }
        }).then(response => {
            console.log(response)
        })
    }
    
    if (nickName) {
        return  <div>
                    <img className="img" src={profile} alt="profile" id="profile"/>
                    <p className="p">{nickName}</p>
                    <a className="a" href={KAKAO_LOGOUT_URL} id="logout" onClick={deleteCookie}>
                        <img src={kakaologout} alt="kakao logout"></img>
                    </a>
                </div>
    } else {
        return  <a href={KAKAO_AUTH_URL}>
                    <img src={kakaologin} alt="kakao login"></img>
                </a>
    }

}

export default KLogin;