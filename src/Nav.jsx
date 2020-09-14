import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Nav extends Component {
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active">
                                <Link to='/' className="nav-link text-white" href="#">Shoppable</Link>
                                <Link to='/' className="nav-link text-white" href="#">Home</Link>
                                <Link to='/cart' className="nav-link text-white" href="#">Home</Link>
                                <Link to='/signin' className="nav-link text-white" href="#">Home</Link>
                            </li>       
                        </ul>
                    </div>
                </nav>
            </div>
         );
    }
}
 
export default Nav;