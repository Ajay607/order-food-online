import React, { useContext } from 'react'
import { LOGO_URL } from '../../utils/constants'
import { Link } from 'react-router-dom'
import UserContext from '../../utils/UserContext'

const NavBar = () => {
    const data = useContext(UserContext);
    console.log("dataaaaaaa", data)
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/grocery">Grocery </Link></li>
                    <li><Link to="/about"> About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/">Cart</Link></li>
                    <button className='login'><Link to="/">login</Link></button>
                    <li className='login'>{data?.loggedInUser}</li>

                </ul>
            </div>
        </div>
    )
}

export default NavBar
