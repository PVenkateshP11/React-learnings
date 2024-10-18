import React, { Component, PureComponent } from 'react'

export class Child extends PureComponent {
  render() {
    console.log ("---Child---")
    return (
      <>
      <h3>{this.props.name}</h3>
      <button onClick={()=>this.props.DataFromChild("I am Venkatesh")}>Child</button>
      </>
    )
  }
}

export default Child
