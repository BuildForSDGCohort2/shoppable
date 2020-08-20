import React from 'react';
//import data from './data'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
// import './index.css';

function App() {
  const openMenu =()=>{
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu =()=>{
    document.querySelector(".sidebar").classList.remove("open")
  }
  
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}> Menu </button>
                <Link to='/'> Shoppable </Link>
            </div>

            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign in</a>
            </div>
        </header>

        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className ="sidebar-close-button" onClick={closeMenu}> X </button>
            <ul>
                <li>
                    <a href="fashion.html"> Fashion</a>
                </li>
                <li>
                    <a href="kitchen.html"> Kitchen</a>
                </li>
                <li>
                    <a href="sports.html"> Sports</a>
                </li>
            </ul>
        </aside>

        <main className="main">
            <div className="content">
                <Route path='/' exact component={Home} />
                <Route path='/product/:id' component={Product} />
            </div> 
        </main>

            <footer className="footer"> All rights reserved</footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
