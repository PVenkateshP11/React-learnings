import React, { Component } from 'react'

export class Controlled extends Component {
    constructor() {
        super()
      
        this.state = {
           firstName:"",
           lastName:"",
           select:"select a country"
           
        }
       
      }
      handleFirstName=(event)=>{
        // console.log(event.target.value)
        // if(this.state.firstName.length>3){
            // alert("please enter less than 3 character")
        //  }
        // else{
            this.setState({
                firstName:event.target.value
            
            })
        // }
    }
      handleLastName=(event)=>{
        this.setState({
            lastName:event.target.value
        
        })

      }
     handleDropdown=(event)=>{
        this.setState({
            select:event.target.value
        })

     }
     handleSubmit=()=>{
         console.log(`${this.state.firstName} ${this.state.lastName} ${this.state.select}`)
         alert(`${this.state.firstName} ${this.state.lastName} ${this.state.select}`)

     }
  
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label for="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname" value={this.state.firstName} onChange={this.handleFirstName}/><br/>
        <label for="lname">Last name:</label><br/>
        <input type="text" id="lname" name="lname" value={this.state.lastName} onChange={this.handleLastName}/><br/><br/>
        <div>
            <label htmlFor='Country'>Country:</label><br/>
        <select
        id="country"
        name="country"
        value={this.state.select}
        onChange={this.handleDropdown}
        >
<option value="Select a Country" disabled>select country</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="American Samoa">American Samoa</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
</select>
</div>
<br/>
        <input type="submit" value="Submit"/>
      </form> 
    )
  }
}

export default Controlled
