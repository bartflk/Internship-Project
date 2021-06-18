import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class Profile extends Component {


    render() {
        return (
            <>
                Protected Profile

                <div>
                    <h1>Logged in</h1>
                    <textarea onChange={(event)=>this.setState({email:event.target.value})}></textarea>
                    <button onClick={()=>{this.post()}}>Post it</button>
                    </div>
            </>
        )
    }




}
export default Profile;