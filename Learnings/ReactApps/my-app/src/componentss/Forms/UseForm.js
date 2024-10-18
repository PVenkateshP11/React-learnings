import React, { Component } from 'react'

export class UseForm extends Component {
    constructor() {
      super()
    
      this.state = {
        // firstName:"",
        // lastName:"",
         
      }
      this.userNameRef=React.createRef()
      this.userlastNameRef=React.createRef()
    }
    SubmitButton=(event)=>{
        event.preventDefault()
        alert("Form submitted")
        alert(this.userNameRef.current.value+this.userlastNameRef.current.value)
    }

    
  render() {
    return (
        
        <form onSubmit={this.SubmitButton}>
        <label for="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname"  ref={this.userNameRef}/><br/>
        <label for="lname">Last name:</label><br/>
        <input type="text" id="lname" name="lname" ref={this.userlastNameRef}/><br/><br/>
        <input type="submit" value="Submit"/>
      </form> 
      
    )
  }
}

export default UseForm
