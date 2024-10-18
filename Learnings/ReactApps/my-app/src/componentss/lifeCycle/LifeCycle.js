import React, { Component } from 'react'

export class LifeCycle extends Component {
    constructor(props){
        console.log("-----Constructor-----")
        super(props)
        this.state={
            data:[],
            dataAvailable:false
        }
    }

    static getDerivedStateFromProps(){
        console.log("----getDerivedStatefrom props")
    }
    componentDidMount(){
        console.log("----componentDidMount")
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(result=>result.json())
        .then(response=>{
            // console.log(response,"---api calls---")
            this.setState(
                {
                    data:response,
                    dataAvailable:true
                }
            )
        })
    }
  render() {
    console.log("-----Render-----",this.state.data)
    return (
      <div>
        {/* LifeCycle */}
        {
            this.state.dataAvailable ?
            <div>
             {/* <h3>Data Loaded Successfully.....{
            
                console.log(this.state.data)}</h3> */}

                {
                    this.state.data.map((Object)=>{
                        return(
                            <div style={{border:"2px solid black"}}>
                                <h3>{Object.title}</h3>
                                <h3>{Object.body}</h3>
                            </div>
                        )
                    })
                }
            </div>:
            <h3>Loading Please Wait........</h3>
        }
      </div>
    )
  }
}

export default LifeCycle

