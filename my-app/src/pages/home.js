import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class Home extends Component {
    constructor(){
        super();
        this.state={
          search:null,
          data: []
        }
      }
  
      search(){
        fetch('http://localhost/IntJap/api/search.php', {
            method: "POST",
            body:JSON.stringify(this.state)
          }).then((response)=>{
            response.json().then((result)=>{
              console.warn("result", result);
              this.setState({
                  data: result
                })
            })
          })
        }
  
  

    render() {
        return (
            <>
                    <div>
                        <input type="text" onChange={(event)=>{this.setState({search:event.target.value})}} />
                        <button onClick={()=>{this.search()}}>Search</button>
                    </div>
                  


                    <div className="container">
                <div className="row ng-scope">
                    <div className="col-md-3 col-md-push-9">
                        <h4>Results <span className="fw-semi-bold">Filtering</span></h4>
                     
                    </div>
                    <div className="col-md-9 col-md-pull-3">
                        <p className="search-results-count">Results:</p>
                        {this.state.data.map((object, index) => (
                            <section key={index} className="search-result-item">
                                <a className="image-link" href="#"><img className="image" src="/images/{object.profileimage}" />
                                </a>
                                <div className="search-result-item-body">
                                    <div className="row">
                                        <div className="col-sm-9">
                                            <h4 className="search-result-item-heading"><a href="#">{object.firstname} {object.lastname}</a></h4>
                                            <p className="info">{object.address} {object.address_nr}, {object.place} - {object.country}</p>
                                            <p className="description">{object.profile_description}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ))}
                        
                        <div className="text-align-center">
                            <ul className="pagination pagination-sm">
                                <li className="disabled"><a href="#">Prev</a>
                                </li>
                                <li className="active"><a href="#">1</a>
                                </li>
                                <li><a href="#">2</a>
                                </li>
                                <li><a href="#">3</a>
                                </li>
                                <li><a href="#">4</a>
                                </li>
                                <li><a href="#">5</a>
                                </li>
                                <li><a href="#">Next</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
               
    
            </>
        )
    }




}
export default Home;