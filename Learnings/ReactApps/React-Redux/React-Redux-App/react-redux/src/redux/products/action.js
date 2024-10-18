import { PRODUCT_LIST } from "../actionType";


 export function ProductAction(products){
    return{
        type:PRODUCT_LIST ,
        payload:products
    }
}
export function CartAction(product){
    return{
        type:"ADD-TO-CART",
        payload:product
    }
}