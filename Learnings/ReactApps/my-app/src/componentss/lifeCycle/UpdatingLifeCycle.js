import React, { Component } from 'react'

export class UpdatingLifeCycle extends Component {
    constructor(){
        console.log("--constructor--")
        super()
        this.state={
            count:0
        }
    }
    static getDerivedStateFromProps(){
        
        console.log("--getDerivedStateFromProps--")
        return null
    }
    componentWillUnmount(){
        alert("I am Removed")
    }

    shouldComponentUpdate(){
        
        console.log("--shouldComponentUpdate--")
        return true
        
        
    }

    getSnapshotBeforeUpdate(prop,state){
        console.log("--getSnapshotBeforeUpdate--",state)
        return null
    }

    componentDidUpdate(){
        console.log("--componentDidUpdate--")
    }
    increment(){
        this.setState(
            {
                count:this.state.count+1
            }
        )
    }

  render() {
    console.log("--render--")
    return (
      <div>
        {/* UpdatingLifeCycle */}
        <h3>{this.state.count}</h3>
        <button onClick={()=>this.increment()}>Increment</button>
      </div>
    )
  }
}

export default UpdatingLifeCycle

