import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, resetAction } from './redux/action';
import { INCREMENT } from './redux/actionType';
import ComponentA from './Component/ComponentA';
import Product from './pagees/Product';

function App() {
  const reduxStore=useSelector(state=>state)
  const dispatch=useDispatch()
  console.log(reduxStore,"reduxStore")
  const increment=()=>{
    dispatch(incrementAction())

  }
  const decrement=()=>{
    dispatch(decrementAction())

  }
  const reset=()=>{
    dispatch(resetAction())

  }
  
  return (
    <div className="App">
      {/* <header className="App-header">   */}
       <h2>{reduxStore.count}</h2> 

         {/* <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>  */}
      {/* </header> */}
      <Product/>
      <ComponentA/>
    </div>
  );
}

export default App;
