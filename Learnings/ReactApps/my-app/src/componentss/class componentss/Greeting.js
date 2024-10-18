import Heading from "../Heading"

function Greeting(prop){
    console.log(prop)
    const {name}=prop
    return(
        <div>
            <h2>good morning{name}</h2>
            {/* {prop.children} */}
            <Heading name={name}/>
        </div>
    )
}
export default Greeting