import React, { Component } from 'react'

export class ListItem extends Component {
  render() {
    return (
    //   <div>
    //     <li>Maths</li>
    //     <li>Science</li>
    //     <li>Physics</li>
    //   </div>
    // <>
    // <li>Maths</li>
    //  <li>Science</li>
    //  <li>Physics</li>
    //  </>
    <li>{this.props.list}</li>
    )
  }
}

export default ListItem

