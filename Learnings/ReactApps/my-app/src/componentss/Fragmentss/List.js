import React, { Component } from 'react'
import ListItem from './ListItem'

export class List extends Component {
  render() {
    return (
      <ul>
        {/* <ListItem/> */}
        {
        ["maths","physics","chemistry"].map(
            (subject,index)=><ListItem List={subject} key={index}/>
        )
        }
      </ul>
    )
  }
}

export default List
