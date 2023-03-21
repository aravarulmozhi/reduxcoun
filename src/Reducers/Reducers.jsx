export const DefaultReducer=(state,action)=>{
   console.log("===>",state);
switch(action.type){
    case "INCR":
        return {
            count:action.payload
        }
        case "USER_TXT":
            return {
                ...state,
                userInput:action.payload
            }   
        case "ADDBUTTON":
            let cloneArr=[...state.listObj]
            cloneArr.push(state.userInput)
            return {
                ...state,
                listObj:cloneArr,
                userInput:""
                }       
        default:
            return state
}
}