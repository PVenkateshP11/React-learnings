import Heading from "./componentss/Heading";
import Button from "./componentss/Button";//default export
import {ListComponent} from "./componentss/Button";//named export
import {ButtonClassComponents}  from "./componentss/class componentss/ButtonClass";
import Greeting from "./componentss/class componentss/Greeting";
import Counter from "./componentss/StateComponent";
import YoutubeButton from "./componentss/YoutubeButton";
import  Navbar from "./componentss/class componentss/Navbar";
import Text from "./styling/Text";
import LifeCycle from "./componentss/lifeCycle/LifeCycle";
import UpdatingLifeCycle from "./componentss/lifeCycle/UpdatingLifeCycle";
import List from "./componentss/Fragmentss/List";
import Parent from "./componentss/PureComponent/Parent";
import UseForm from "./componentss/Forms/UseForm";
import Controlled from "./componentss/Forms/Controlled";
import UseState from "./componentss/Functional/useState";
// import AppRoutes from "./Routing/appRoutes";
// import {useState } from "./componentss/lifeCycle/UpdatingLifeCycle";


function APP(){
  // const [showCounter,setCounter]=useState(true)
return(
  <div>
    <Heading name="venky" role="React developer" experience="5" details={{name:"ram",gender:"Male"}}/>
    <Heading name="srinivas" role="website developer" experience="3"/>
    <Button/>
    {/* <ListComponent/> */}
    <ButtonClassComponents/>
    
    
    {/* <h2>Im the User</h2> */}
    {/* <Greeting name="venkatesh Rathod">
      <h2>iam the children</h2>
      <h3>i Can write as many as lines of code</h3>
    </Greeting>
    <ButtonClassComponents buttonText="Login"/>
    <ButtonClassComponents buttonText="Sign Up"/> */}
    {/* <Counter/>  */}
    {/* <YoutubeButton/> */}
    {/* <handleClick/> */}
    {/* <Navbar/> */}
     
   {/* <Text/> */}
   {/* <LifeCycle/> */}
  {/* {
    this.state.showCounter
    ?
    <UpdatingLifeCycle/>
    :
    null
  }
  <Button onClick={()=>setCounter(!showCounter)}>Counter</Button>


 */}

  {/* <UpdatingLifeCycle/>  */}
  {/* <List/> */}
 {/* <Parent/> */}
   <UseForm/> 
  {/* <Controlled/> */}
  {/* <UseState/>   */}
  {/* <AppRoutes/> */}

 
  </div>

)
}
export default APP