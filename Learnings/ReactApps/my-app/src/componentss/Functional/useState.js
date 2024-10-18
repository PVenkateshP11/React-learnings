import { useState } from "react"

function UseState(){
    const[count,setCount]=useState(1)
    const[text,settext]=useState("Before Updation")
    const[product,setproduct]=useState(["laptop","mobile"])

    const increment=()=>{
        setCount(count+1)
    }

    const decrement=()=>{
        setCount(count-1)
    }

    const textupdation=()=>{
        settext("after Updation")
    }
    return(
        <>
        <h3>I am from Use State</h3>
         <h3>{count}</h3>
        {/* <button onClick={function(){
            setCount(count+1)
        }}>Increment</button>  */}
        {/* Avoid giving single inline function */}
        
        {/* <button onClick={()=>setCount(count+1)}>Increment</button> */}
        <button onClick={()=>increment()}>Increment</button>
        {/* <button onClick={()=>setCount(count-1)}>Decrement</button> */}
        <button onClick={()=>decrement()}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>

        <h2>Iam Another usestate </h2>
        <h2>{text}</h2>
        <button onClick={()=>textupdation() }>Click to Update</button>
        <button onClick={()=>textupdation() }>I Can also Update</button>
        {
            product.map(
                // (element)=><h2>{element}</h2>
                (element)=><h2 key={element}>{element}</h2>
            )
        }
        
        </>
    )

}
export default UseState