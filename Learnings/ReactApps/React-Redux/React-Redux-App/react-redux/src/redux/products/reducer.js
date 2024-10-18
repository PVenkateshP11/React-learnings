import { PRODUCT_LIST } from "../actionType"


const initialState={
    products:[],
    Cart:[]
}

 export const ProductReducer=(state=initialState,action)=>{
    switch(action.type){

        case PRODUCT_LIST:
            return{...state,products:action.payload}

        case "ADD-TO-CART":
            return{...state,Cart:[...state.Cart,action.payload]}
        default:
            return state
    }
}