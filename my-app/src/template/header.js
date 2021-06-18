import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";



class Header extends Component {
    constructor(){
        super();
        this.state={
          email:null,
          password:null,
          login:null,
          jwt:null
        }
      }
  
      componentDidMount(){
        this.storeCollector()
      }
  
      storeCollector(){
        let store = JSON.parse(localStorage.getItem('login'))
        if(store && store.login){
          this.setState({
            login:true,
            jwt:store.jwt
          })
        }
      }

    render() {
        return (
            <>
               
                <header className="site-header" >    
                    <nav className="navbar navbar-expand-lg navbar-dark  shadow fixed-top" >
                        <a className="navbar-brand" href="index.html"></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link"  to="/about">About</Link>
                            </li>
                            {
                    !this.state.login?
                    <>
                        <li className="nav-item">
                                <Link  className="nav-link"  to="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link"  to="/login">Login</Link>
                            </li>
                        </>
                        :
                        <>
                            <li className="nav-item">
                                <Link  className="nav-link"  to="/profile">Profile</Link>
                            </li>
                            </>
                             }

                            </ul>
                            
                        </div>
                        
                    </nav>
                  
                </header>

              
            </>
        )
    }




}
export default Header;















