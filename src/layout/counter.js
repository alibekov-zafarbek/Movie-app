import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
    start: false,
  }
  
  Click = (e) => {
    console.log(e);
    this.setState({start: e}) 
    
  }
 

  render() {
    
    return (   
    <>
    
    </>
    
    );
  }
}
