import React, { Component } from 'react';

class Cart extends Component {
    constructor(props) {
        super(props) 
    }

    
    render() { 
        return ( 
            <div classname="cart">
                <div className="cart-list">
                    <ul className="cart-list-container">
                        <li>
                            <h3>
                                Shopping Cart
                            </h3>
                            <div>
                                Price
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="cart-action">
                    <h3> Subtotal </h3>
                </div>
            </div>
         );
    }
}
 
export default Cart;