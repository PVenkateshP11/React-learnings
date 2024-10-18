
import {createStore} from "redux"

 import { CounterReducer } from "./reducer";
 import {rootReducer} from "./rootReducer"




// export const reduxStore=createStore(CounterReducer)
export const reduxStore=createStore(rootReducer)
