import './App.css';
import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import Profile from './pages/profile'
import Aboutus from './pages/aboutus'
import Header from './template/header';

class App extends Component {

 post(){
   fetch('http://localhost/IntJap/api/update_user.php', {
      method: "POST",
      body:JSON.stringify(this.state)
   }).then((responce)=>{
     responce.json().then((result)=>{
       console.log(result);
       if(result.message === 'Access denied.'){
         localStorage.removeItem('login');
       }
       console.warn("result", result);
       console.log(result.jwt);
       this.storeCollector()
     })
   })
 }

    render() {
      return (

        <>
 

            <Router>
                <>
                <Header/>
                <main role="main" className="maintext">
                   <div className="template">
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                  <Route path="/aboutus">
                    <Aboutus />
                  </Route>
                  <Route path="/profile">
                    <Profile />
                  </Route>
                  <Route path="/register">
                    <Register />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
                </div>
              </main>
                </>
            </Router>

            </>
      );
    }

  }

export default App;