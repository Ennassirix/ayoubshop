import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
function Inscription() {
    const [info, setInfo] = useState({})
    const handelSubmit = e => {
        e.preventDefault()
        useEffect(() => {
            localStorage.setItem('key', JSON.stringify(info))
        }, [])
    }
    return (
        <div className="container">
            <NavBar />
            <div className="center mt-5">
                <form class="form" onSubmit={handelSubmit}>
                    <p class="title">Register </p>
                    <p class="message">Signup now and get full access to our app. </p>
                    <div class="flex">
                        <label>
                            <input required placeholder="" type="text" class="input"
                                onChange={e => setInfo({ ...info, fName: e.target.value })}
                            />
                            <span>Firstname</span>
                        </label>

                        <label>
                            <input required placeholder="" type="text" class="input"
                                onChange={e => setInfo({ ...info, lName: e.target.value })}
                            />
                            <span>Lastname</span>
                        </label>
                    </div>

                    <label>
                        <input required placeholder="" type="email" class="input"
                            onChange={e => setInfo({ ...info, email: e.target.value })}
                        />
                        <span>Email</span>
                    </label>

                    <label>
                        <input required placeholder="" type="password" class="input"
                            onChange={e => setInfo({ ...info, password: e.target.value })}
                        />
                        <span>Password</span>
                    </label>
                    <label>
                        <input required placeholder="" type="password" class="input"
                            onChange={e => setInfo({ ...info, cPassword: e.target.value })}
                        />
                        <span>Confirm password</span>
                    </label>
                    <button class="submit">Submit</button>
                    <p class="signin">Already have an acount ? <Link to='/connect'>Signin</Link> </p>
                </form>
            </div>
        </div>

    );
}

export default Inscription;