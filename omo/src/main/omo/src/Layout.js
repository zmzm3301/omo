import Header from "./Header";
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import signin_img from './static/images/login.png';
import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios'
import $ from 'jquery'

const Layout = () => {
    const [person, setPerson] = useState('')

    const names = document.getElementById('name')
    const jobs = document.getElementById('job')

    const onclickLogin = (event) => {
        event.preventDefault();
        axios({
            url: '/persons',
            method: 'post',
            data: {
                name: names.value,
                job: jobs.value
            }
        })
            .then(function a(response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        axios.get('/persons').then(response => setPerson(response.data))
            .catch(error => console.log(error))
                
    }, []);

    const info = document.getElementById('info')
    
    for(var i = 0; i < person.length; i++) {
        console.log(person[i].name)
        const newDiv = document.createElement('div')
        newDiv.style.border="1px solid black";
        newDiv.style.width="180px";
        newDiv.append(person[i].name + "  " + person[i].job)
        info.append(newDiv)
    }
    console.log(person)
   

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
                    <form onSubmit={onclickLogin}>
                        <input id="name" name="name" />
                        <input id="job" name="job" />
                        <button type="submit" value="입력" >입력</button>
                    </form>
                    
                    <div id="info">
                    </div>
                </main>
                <Footer />
            </div>
        </div>
        
    )
}

export default Layout;