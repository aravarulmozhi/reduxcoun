import { DefaultReducer } from "../Reducers/Reducers";
import { legacy_createStore,applyMiddleware } from "redux";
// we are going to create store 
/*
store={
    count:0
}

*/
let initial_state={
    count:0,
    userInput:"",
    listObj:[]
}
export const configStore=(state=initial_state)=>{
    return legacy_createStore(DefaultReducer,state)
}

