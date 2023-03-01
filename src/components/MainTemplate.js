import React, { Component } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
export class MainTemplate extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        {this.props.children}
        <Footer></Footer>
      </div>
    )
  }
}

export default MainTemplate