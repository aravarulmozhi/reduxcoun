import { useState } from 'react'
import { connect } from 'react-redux'
import { Incr_Action } from './Action/Action'
import C_omponents from './Components'
function App(props) {
  // const [count, setCount] = useState(0)
// https://www.freecodecamp.org/news/how-to-use-redux-in-reactjs-with-real-life-examples-687ab4441b85/
  return (
   
    <div className="App">
      <div className="card">
        <button onClick={() => props.incr3(props.count+1)}>
          count is {props.count}
        </button>
        <C_omponents/>
        <label>{props.userInpuValue}</label>
        <span>Added List</span>
        {
          props.listObj.length>0 ?
          props.listObj.map(data=><p>{data}</p>)
          
          :""
        }
      </div>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return{
    count:state.count,
    userInpuValue:state.userInput,
    listObj:state.listObj
  }

}
const mapDispatchToProps=(dispatch)=>({
  incr3:(payload)=>dispatch(Incr_Action(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(App)
