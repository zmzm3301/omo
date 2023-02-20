import Header from "./Header";
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import signin_img from './static/images/login.png';
import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios'


const Layout = () => {
    const [person, setPerson] = useState("")
    const [names, setname] = useState("")
    const [jobs, setjob] = useState("")

    const nameoption = (e) => {
        setname(e.target.value)
    }
    const joboption = (e) => {
        setjob(e.target.value)
    }

    const form = new FormData();
    form.append('park', 'veneas');

    const onclickLogin = () => {
        axios({
            url: '/persons',
            method: 'post',
            data: form
        })
            .then(function a(response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        axios.get('/test').then(response => setPerson(response.data))
            .catch(error => console.log(error))
    }, []);

    console.log(person)
    const name = person.name
    const job = person.job
    const id = person.id


    return (
        <div>
            <div>
                <header className="navbar">
                    <div className="nav_title"><Link to={'/'} className="nav_title2 linkstyle">Nav</Link></div>
                    <div className="nav_link">
                        <Header />
                        <Link to='/signin' className="signin_link"><img src={signin_img} alt='signinimg' /></Link>
                    </div>
                </header>
                <main className="main_cont">
                    <Outlet />
                    <input onChange={nameoption} value={names} />
                    <input onChange={joboption} value={jobs} />
                    <button onClick={onclickLogin}>submit</button>
                    {id} {name} {job}
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Layout;