import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false
    }
  }
  handleSubmission = (e) => {
    this.setState({
      submitted: true
    })
  }
  render() {
    if(this.state.submitted === true) {
      return <Redirect to="/portfolio" />
    }
    return(
      <div className="home">
        <div className="title">
          <h1>Welcome to Ryan Daley's Portofolio</h1>
          <div className="main-pic-div">
            <img src="./signature.png" alt="signature"></img>
          </div>
        </div>
        <div className="sub-title">
          <h3>Discover more about Ryan here:</h3>
        </div>
        <form>
          <button className="homebutton" type="submit" onClick={this.handleSubmission}>Show me more!</button>
        </form>
      </div>
    )
  }
}
