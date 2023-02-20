import React from "react";

const SearchPw = () => {

    return (
        <div>
            <div>
                <section className="search">
                    <form className="search_form">
                        <h3>비밀번호 재설정</h3>
                        <p>새 비밀번호</p>
                        <input className="search_input"></input>
                        <p>비밀번호 확인</p>
                        <input className="search_input"></input>
                        <br />
                        <br />
                        <button>확인</button>
                    </form>
                </section>
            </div>
        </div>
    )
}


export default SearchPw