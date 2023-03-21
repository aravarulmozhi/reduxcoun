export const Incr_Action=(payload)=>{
return {
    type:"INCR",
    payload:payload
}
}
export const UsrValue=(payload)=>{
    return{
        type:"USER_TXT",
        payload:payload
    }
}


export const AddButon=(payload)=>{
    return{
        type:"ADDBUTTON",
        payload
    }
}