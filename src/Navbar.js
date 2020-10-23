import React from 'react'

function Navbar() {
    return (
        <div >
            <nav  className='nav'>
                <img className='logo' src='assets/logo.png' alt='Logo'/>
                <ul className='list'>
                    <li className='list_item'> About</li>
                    <li className='list_item'> Sign In</li>
                    <li className='list_item'> Creators</li>
                    <li className='list_item'> FAQ </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
