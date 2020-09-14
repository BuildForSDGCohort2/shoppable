import React, { Component } from 'react';
import Product from './Product'
import axios from 'axios'
//import { Router } from 'react-router-dom'
// import { Link } from 'react-router-dom'


class Home extends Component {
    constructor(){
        super()
        this.state={products: []}
    }

    componentDidMount() {
        axios.get('http://localhost:9000/products/')
            .then(response =>{
                this.setState({products: response.data})
            })
            .catch(error => {console.log(error)
            })
    }

    displayproducts(){
        return this.state.products.map(oneproduct =>{
            return <Product product={oneproduct} key={oneproduct._id} />
        })
    }
   
    render() { 
        return (            
         <div>
            <div className="flexbox-container">
                {this.displayproducts()}
            </div>
        </div>
         );
    }
}
 
export default Home;