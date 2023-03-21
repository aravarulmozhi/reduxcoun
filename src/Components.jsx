import React from 'react'
import { UsrValue,AddButon } from './Action/Action'
import { connect } from 'react-redux'
// UsrValue
function C_omponents(props) {
  return (
    <div>
    <input type='text' value={props.UserInput} onChange={(e)=>props.onChangeFun
    (e.target.value)}
    />
    <br/>
    <button onClick={()=>props.addclick()}>Add</button>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return {
    UserInput:state.userInput,
    
  }
}

const mapDispatchToProps=(dispatch)=>({
  onChangeFun:(payload)=>dispatch(UsrValue(payload)),
  addclick:()=>dispatch(AddButon())
})
export default connect(mapStateToProps,mapDispatchToProps)(C_omponents)
