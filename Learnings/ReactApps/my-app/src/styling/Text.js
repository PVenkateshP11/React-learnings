import React, { Component } from 'react'
// import "./text.css"
import Button from '../componentss/Button'
import styles from './text.module.css'


export class Text extends Component {
  render() {
    return (
      <div>
        {/* <h3 style={
            {
                color:"red"
            }
        }>Hello User</h3> */}
        {/* <h3 className='userName'>Hello World!!!</h3> */}
        <h3 className={styles.success}>Hello World!!!</h3>
        <h1 className='userNames'>Hello Welcome!!!</h1>
        <Button/>
      </div>
    )
  }
}

export default Text
