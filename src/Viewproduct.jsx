import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class Viewproduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            category: this.props.category,
            image: this.props.image,
            price: this.props.price,
            description: this.props.description,
            brand: this.props.brand,
            rating: this.props.rating,
            numReviews: this.props.numReviews,
            quantity: 1
         }
    }

    componentDidMount() {
        axios.get('http://localhost:9000/products/'+ this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    category: response.data.category,
                    image: response.data.image,
                    price: response.data.price,
                    brand: response.data.brand,
                    rating: response.data.rating,
                    numReviews: response.data.numReviews
                })
            })
            .catch(error => console.log(error))
    }

    IncreaseItemQuantity=() =>{
        this.setState({quantity: this.state.quantity + 1})
    }
    DecreaseItemQuantity=()=>{
        this.setState({quantity: this.state.quantity - 1})
    }
    
    AddtoCart=()=>{
        this.props.history.push("/cart/" + this.props.match.params.id + "?quantity=" + this.state.quantity)
    }

    render() { 
        return ( 
            <div>
                 <div className="back-to-result"> 
                    <Link to="/"> Back to result</Link>
                </div>

                <div className="details">
                    {/* first column */}
                    <div className="details-image">
                        <img src= {this.state.image} alt="product"></img>
                    </div>

                    {/* second column */}
                    <div className="details-info">
                        <ul>
                            <li>
                                <h4>{this.state.name}</h4>
                            </li>
                            <li>
                                {this.state.rating} Stars ({this.state.numReviews} Reviews)
                            </li>
                            <li>
                                Price: $<b>{this.state.price}</b>
                            </li>
                            <li>
                                Description:
                                <div> {this.state.description} </div>
                            </li>
                        </ul>
                    </div>

                    {/* third column */}
                    <div className="details-action">
                        <ul>
                            <li>
                                Price: $<b>{this.state.price}</b>
                            </li>
                            {/* <li>
                                Status: {this.state.status}
                            </li> */}
                            <li>
                                Qty: 
                                <p className="card-text text-center">{this.state.quantity}</p>
                                <button className="Button1" onClick=  {this.IncreaseItemQuantity}>Add</button>
                                <button className="Button2" onClick={this.DecreaseItemQuantity}>Decrease</button>
                            </li>
                            
                            <li> <button onClick={this.AddtoCart} className="button">Add to Cart</button> </li>
                        </ul>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Viewproduct;