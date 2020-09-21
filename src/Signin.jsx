import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import axios from 'axios';

class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    typeEmail =(event)=>{
        this.setState(
            { email: event.target.value }
        )
    }
    typePassword =(event) =>{
        this.setState(
            { password: event.target.value }
        )
    }

    onSubmit=(event) => {
        event.preventDefault()

        const login ={
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:9000/users/signin', + this.props.match.params.id, login)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))

        // this.props.history.push('/admin')
    }

    render() { 
        return ( 
            <div style={{ marginTop: 40 }}>
                <h2 style={{ marginBottom: 40 }}>Login</h2>

                <form action="" onSubmit={this.onSubmit} className="container shadow p-3 mb-5 bg-white rounded " >

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} onChange={this.typeEmail} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" password="true" value={this.state.password} autoComplete="on" onChange={this.typePassword} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default Signin;