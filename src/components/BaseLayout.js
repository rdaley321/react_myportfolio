import React, { Component } from 'react';
import Navbar from './Navbar'

export default class BaseLayout extends Component {
  render() {
    return(
      <div className='whole-page'>
        <div className='layout-content'>
          <Navbar />
          <div className="children">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
