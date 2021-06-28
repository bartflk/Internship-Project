import React, {Component} from 'react';


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

                    <div className="col-md-12 ">
                        <h1>Welcome to Internship Japan</h1>
                    </div>

                    <div className="maintext">
    
                <div className="row ng-scope">

         

                    <div className="col-md-12 ">
                    <h4><span className="fw-semi-bold">Search for interns, put in a tag like "react" to look up.</span></h4>

                    <div className="searchbox">
                        <input type="text" onChange={(event)=>{this.setState({search:event.target.value})}} />
                        <button onClick={()=>{this.search()}}>Search</button>
                    </div>
                
                        <p className="search-results-count">Results:</p>

                        {this.state.data.map((object, index) => (
                            <section key={index} className="search-result-item">
                                <a className="image-link" href="#"><img  alt="Profile picture" className="image" src="/images/{object.profileimage}" />
                                </a>
                                <div className="search-result-item-body">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h4 className="search-result-item-heading"><a href="#">{object.firstname} {object.lastname}</a></h4>
                                            <p className="info">Adress: {object.address} {object.address_nr} {object.place} - {object.country}</p>
                                            <p className="description">Descrtiption: {object.profile_description}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ))}
                      
                    </div>
                </div>
                </div>
               
    
            </>
        )
    }




}
export default Home;