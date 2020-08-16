import React from 'react';
// import './index.css';

function App() {
  const openMenu =()=>{
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu =()=>{
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}> Menu </button>
                    <a href="index.html">Shoppable</a>
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
                    <ul className="products">
                        <li> 
                            <div className="product">
                                <img className="product-image" src="/images/d1.jpg" alt="product" />
                                <div className="product-name"> <a href="product.html">Slim Shirt</a></div>
                                <div className="product-brand"> Nike </div>
                                <div className="product-price"> 150,000 Ushs</div>
                                <div className="product-rating">4.5 Stars (10 Reviews)</div>
                            </div>
                        </li>  
                        <li> 
                            <div className="product">
                                <img className="product-image" src="/images/d1.jpg" alt="product" />
                                <div className="product-name"> <a href="product.html">Slim Shirt</a></div>
                                <div className="product-brand"> Nike </div>
                                <div className="product-price"> 150,000 Ushs</div>
                                <div className="product-rating">4.5 Stars (10 Reviews)</div>
                            </div>
                        </li>   
                        <li> 
                            <div className="product">
                                <img className="product-image" src="/images/d1.jpg" alt="product" />
                                <div className="product-name"> <a href="product.html">Slim Shirt</a></div>
                                <div className="product-brand"> Nike </div>
                                <div className="product-price"> 150,000 Ushs</div>
                                <div className="product-rating">4.5 Stars (10 Reviews)</div>
                            </div>
                        </li>
                        <li> 
                            <div className="product">
                                <img className="product-image" src="/images/d1.jpg" alt="product" />
                                <div className="product-name"> <a href="product.html">Slim Shirt</a></div>
                                <div className="product-brand"> Nike </div>
                                <div className="product-price"> 150,000 Ushs</div>
                                <div className="product-rating">4.5 Stars (10 Reviews)</div>
                            </div>
                        </li>  
                        <li> 
                            <div className="product">
                                <img className="product-image" src="/images/d1.jpg" alt="product" />
                                <div className="product-name"> <a href="product.html">Slim Shirt</a></div>
                                <div className="product-brand"> Nike </div>
                                <div className="product-price"> 150,000 Ushs</div>
                                <div className="product-rating">4.5 Stars (10 Reviews)</div>
                            </div>
                        </li>  
                        <li> 
                            <div className="product">
                                <img className="product-image" src="/images/d1.jpg" alt="product" />
                                <div className="product-name"> <a href="product.html">Slim Shirt</a></div>
                                <div className="product-brand"> Nike </div>
                                <div className="product-price"> 150,000 Ushs</div>
                                <div className="product-rating">4.5 Stars (10 Reviews)</div>
                            </div>
                        </li>                   
                    </ul>
                </div> 
            </main>

            <footer className="footer"> All rights reserved</footer>
        </div>
  );
}

export default App;
