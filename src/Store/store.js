import { DefaultReducer } from "../Reducers/Reducers";
import { legacy_createStore } from "redux";
// we are going to create store 
/*
store={
    count:0
}

*/

export const configStore=(state={count:0})=>{
return legacy_createStore(DefaultReducer,state)
}

