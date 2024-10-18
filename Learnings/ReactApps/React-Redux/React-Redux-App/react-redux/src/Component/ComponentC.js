
import { useDispatch, useSelector } from 'react-redux'
import { decrementAction, incrementAction, resetAction } from '../redux/action'
import { reduxStore } from '../redux/store'
import { CartAction } from '../redux/products/action'

 export default function ComponentC() {
  const store=useSelector(state=>state)
  console.log(store,"reduxStore")

    // const store=useSelector(state=>state)
    const dispatch=useDispatch()
    // const dispatch=useDispatch()
    // console.log(reduxStore,"reduxStore")
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
    <div>
       <h2>CART PRODUCTS{store.productList.Cart.length}</h2>
        {
        store.productList.Cart.map(
          (product)=><>
            <h6 onClick={()=>alert(product.id)}>{product.title}</h6>
            <img src={product.image} height={50} width={50} alt={product.title}/>
            <h6 style={{color:"red"}}>${product.price}</h6>
            <button>Remove from Cart</button>
          </>
        )
       } 

       <h2>-------------------------------------------------------------------------</h2>

        {/* <h1>{store.Counter.count}</h1> 
       <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button> */}

        {
          store?.productList?.products.map(
            (product)=>
            <>
            <h6 onClick={()=>alert(product.id)}>{product.title}</h6>
            <img src={product.image} height={50} width={50} alt={product.title}/>
            <h6 style={{color:"red"}}>${product.price}</h6>
            <button onClick={()=>dispatch(CartAction(product))}>Add to Cart</button>
            </>
          )
        }
        {/* <h2>CART PRODUCTS{store.productList.Cart}</h2> */}
         {
          store?.productList?.Cart.map(
            (product)=><h3>{product.title}</h3>
          )
        }
    </div>
  )
}


