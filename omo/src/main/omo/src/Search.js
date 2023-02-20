import React from "react";
import { Link } from "react-router-dom";
import './App.css';

const Search = (props) => {
    return (
        <>
            <section className="search">
                <div>

                    <form className="search_form">
                        <h3>아이디 찾기</h3>
                        <p>이름</p>
                        <input className="search_input"></input>
                        <p>이메일</p>
                        <input className="search_input"></input>
                        <br />
                        <br />
                        <button>확인</button>
                    </form>


                    <form className="search_form">
                        <h3>비밀번호 찾기</h3>
                        <p>이름</p>
                        <input className="search_input"></input>
                        <p>아이디</p>
                        <input className="search_input"></input>
                        <br />
                        <br />
                        <Link to={'/search_pw'} className='linkstyle'>비밀번호 찾기</Link>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Search;