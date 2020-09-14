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
            numReviews: this.props.numReviews
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
                                Qty: <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </li>
                            <li> <button className="button">Add to Cart</button> </li>
                        </ul>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Viewproduct;