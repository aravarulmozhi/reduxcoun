export const DefaultReducer=(state,action)=>{
switch(action.type){
    case "INCR":
        return {
            count:action.payload
        }
        default:
            return state;
}
};
