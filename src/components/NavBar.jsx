import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function NavBar() {
    return (
        <div className="links">
            <Link to={'/'} className='logo'>#VANLIFE</Link>
            <ul >
                <li>
                    <Link to={'/about'} >About</Link>
                </li>
                <li>
                    <Link to={'/vans'}>Vans</Link>
                </li>
            </ul>
        </div>

    )
}
