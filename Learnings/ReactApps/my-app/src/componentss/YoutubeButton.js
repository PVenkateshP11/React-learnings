import { Component } from "react";
import Counter from "./StateComponent";
// import {func} from "proto-types";



class YoutubeButton extends Component{
    constructor(){
        super()

        this.state={
            text:"Subscribe",
            userSubscribed:false
    }
    }
    handleClick(){
        this.setState({
            text:"Subscribed",
            userSubscribed:true

        })
    }
 render(){
        return(
            <div>
                <button onClick={()=>this.handleClick()}>{this.state.text}</button>

                {
                    this.state.userSubscribed
                    ?
                    <div>
                    <h3>Thanks for Subscribing</h3>
                    <Counter/>
                    </div>
                    :
                    <h3>Subscribe for More Content</h3>
                }
                
            </div>
        )
    }
}

export default YoutubeButton
