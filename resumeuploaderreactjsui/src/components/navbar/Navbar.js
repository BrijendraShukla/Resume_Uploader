import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navdiv'>
                    <div className='logo'>Brijendra Shukla</div>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/form'}>Form</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar