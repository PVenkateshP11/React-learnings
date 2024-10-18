import { Component } from "react"

class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            greeting:"hello Good morning",
        }
    }
    increment(){
        // alert(" Event Attached ")
        this.setState({ count:this.state.count+1})
    }
    decrement(){
        // alert(" Event Attached ")
        this.setState({count:this.state.count-1 })
    }
    reset(){
        this.setState({count:0})
    }
    render(){
        return(
            <div>
            <h3>Counter App</h3>
            <h4>{this.state.count}</h4>
            <h5>{this.state.greeting}</h5>
            {/* <button onClick={this.increment}>Increment</button> */}
            <button onClick={()=>this.increment()}>Increment</button>
            <button onClick={()=>this.decrement()}>Decrement</button>
            <button onClick={()=>this.reset()}>Reset</button>
            </div>
        )
    }
}
export default Counter

