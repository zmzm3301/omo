import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    // const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
    const [selectyear, setselectyear] = useState("");
    const [selected, setselect] = useState("");
    const [selectday, setselectday] = useState("");
    const [select_s, setselect_s] = useState("");
    let date = new Date();
    let lastyear = date.getUTCFullYear();
    let Days = []
    let years = []
    let i = 1;
    let lastday = 32;
    let mon = selected;
    let y = selectyear;
    const s = ["Male", "Female"]

    const year_option = (e) => {
        setselectyear(e.target.value);
    }

    const options = (e) => {
        setselect(e.target.value);
    };

    const dayoption = (e) => {
        setselectday(e.target.value)
    }
    let leapyear = 0

    for (let v = 1900; v < lastyear + 1; v++) {
        const year = [`${v}년`]
        years = [...years, year]
    }
    y = y.slice(0, 4)
    if ((y % 400 === 0) || ((y % 100 !== 0) && (y % 4 === 0))) {
        leapyear = 1;
    }

    if (mon === '2월') {
        lastday = 29 + leapyear;
    }
    if (mon === '4월' || mon === '6월' || mon === '9월' || mon === '11월') {
        lastday = 31
    }

    for (i; i < lastday; i++) {
        const day = [`${i}일`]
        Days = [...Days, day]
    }
    const navigate = useNavigate();

    return (
        <div className="signup_con">
            <h3>회원가입</h3>
            <form>
                <h4>아이디</h4>
                <input />
                <h4>비밀번호</h4>
                <input />
                <h4>비밀번호 확인</h4>
                <input />
                <h4>이름</h4>
                <input />
                <h4>생년월일</h4>
                <select onChange={year_option} value={'2004년'}>
                    {years.map(year => (
                        <option value={year} key={year}>{year}</option>
                    ))}
                </select>
                <select onChange={options} value={selected}>
                    {month.map(item => (
                        <option value={item} key={item}>{item}</option>
                    ))}
                </select>
                <select onChange={dayoption} value={selectday}>
                    {Days.map(Day => (
                        <option value={Day} key={Day}>{Day}</option>
                    ))}
                </select>
                <h4>성별</h4>
                <select onChange={setselect_s} value={select_s}>
                    {s.map(s => (
                        <option value={s} key={s}>{s}</option>
                    ))}
                </select>

                <button>확인</button>
            </form>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
        </div>
    )
}

export default SignUp;