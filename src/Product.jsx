import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Product extends Component {
    render() { 
        return ( 
                <div className="col col-sm-4" >
                    <div className="card shadow  mb-3 rounded" style={{width:300}}>
                        <div className="card-body">
                            <img src="https://res.cloudinary.com/deborahao/image/upload/v1590220460/close-up-of-block-of-butter-being-sliced-may-raise-cholesterol_vdvl9u.jpg">
                            </img>
                            <h5 className="card-title text-center"><Link to = {'/products/' + this.props.product._id}>{this.props.product.name}</Link></h5>
                            <h4 className="card-title text-center">{this.props.product.price}</h4>
                            <p className="text-center">{this.props.product.numReviews}</p>
                        </div>
                    </div>
                </div>
                
            );
    }
}
 
export default Product;