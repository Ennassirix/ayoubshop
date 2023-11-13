import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import '../pages/connect.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Alert } from "react-bootstrap";
function BasicExample() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [userInfo, setUserInfo] = useState({})
    useEffect(() => {
        const info = JSON.parse(localStorage.getItem('key'))
        setUserInfo(info)
    }, [])
    const handelSubmit = e => {
        e.preventDefault()
        email === userInfo.email && password === userInfo.password ? navigate('/') : setError('email or password Incorrect')
    }
    return (
        <>
            <NavBar />
            <div className="center mt-5">
                <form class="form" onSubmit={handelSubmit}>
                    {
                        error.startsWith('email') && <Alert variant="danger">{error}</Alert>
                    }
                    <p class="form-title">Sign in to your account</p>
                    <div class="input-container">
                        <input type="email" placeholder="email@email.com" required
                            onChange={e => setEmail(e.target.value)}
                        />
                        <span>
                        </span>
                    </div>
                    <div class="input-container">
                        <input type="password" placeholder="1234" required
                            onChange={e => setPassword(e.target.value)}

                        />
                    </div>
                    <button type="submit" class="submit">
                        Sign in
                    </button>

                    <p class="signup-link">
                        No account?
                        <Link to='/inscription'>Sign up</Link>
                    </p>
                </form>
            </div>

        </>

    );
}

export default BasicExample;