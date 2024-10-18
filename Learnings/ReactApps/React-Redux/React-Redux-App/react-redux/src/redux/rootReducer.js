import { combineReducers } from "redux";
import { CounterReducer } from "./reducer";
// import Product from "../pagees/Product";
import {ProductReducer} from "./products/reducer"



 export const rootReducer=combineReducers({  
    Counter:CounterReducer,
    productList:ProductReducer

})