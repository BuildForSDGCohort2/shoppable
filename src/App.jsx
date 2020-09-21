import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from './Nav'
import Home from './Home'
import Viewproduct from './Viewproduct'
import Cart from './Cart'
import Signin from './Signin'
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { BrowserRouter, Route} from 'react-router-dom'
import './index.css';

class App extends Component {
    render() { 
        return ( 
           <BrowserRouter>
           <div className="sidenav">
            <SideNav onSelect={(selected) => {
        // Add your code here
        }} >

                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Sports
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="fashion">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Fashion
                        </NavText>
                        <NavItem eventKey="fashion/men">
                            <NavText>
                                Men
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="fashion/women">
                            <NavText>
                                Women
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="fashion/children">
                            <NavText>
                                Children
                            </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            </div>

            <Nav />
                <div>
                    <Route path='/' exact component={Home} />
                    <Route path='/products/:id' component={Viewproduct} />
                    <Route path='/cart/:id?' component={Cart} />
                    <Route path='/signin' component={Signin} />
                </div>
           </BrowserRouter>
         );
    }
}
 
export default App;