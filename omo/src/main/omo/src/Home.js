import React from "react";
import './App.css';
import HomeImg from './static/images/library.jpg'

const Home = () => {
    return (
        <>
        <section className="home">
            <div className="home_container"><img className="homeimg" src={HomeImg} alt='homeimg' /></div>
            <h1>홈화면</h1>
            <p>메인 페이지</p>
            {/* <Login /> */}
        </section>
        </>
    )
}

export default Home;