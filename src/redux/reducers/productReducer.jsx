import { ActionType } from "../constants/action-type"

const initialState = {
    product:[{
        id:1,
        title:"Vicky",
        category:"programmer"
    }]
}

export const productReducer = (state = initialState,{type, payload}) => {
switch (type){
    case ActionType.SET_PRODUCTS:
        return state;
    default:
        return state;
    
}
}