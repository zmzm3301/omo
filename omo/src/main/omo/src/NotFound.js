import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1)
    }
    return (
        <div className='notfound'>Not Found 404
            <button onClick={back}>뒤로가기</button>
        </div>
    )
}

export default NotFound;