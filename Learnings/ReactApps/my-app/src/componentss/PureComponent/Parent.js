import React, { Component } from 'react'
import Child from './Child'
import ChildFunctional from './ChildFunctional'


export class Parent extends Component {
    constructor(){
        super()
        this.state={
            timer:0
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                timer:this.state.timer+1
            })
        },
        1000

        )
        // this.setState({
        //     timer:this.state.timer+1
        // })
    }
    DataFromChild=(value)=>{
      alert(value)
    }

  render() {
    console.log("---Parent---")
    return (
      <div>
        <h2>I am a Parent Component</h2>
        <h3>{this.state.timer}</h3>
        <Child name="Hello User" DataFromChild={this.DataFromChild}/>
        <ChildFunctional name="Iam Functional Component"/>
      </div>
    )
  }
}

export default Parent
