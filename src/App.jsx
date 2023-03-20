import { useState } from 'react'
import { connect } from 'react-redux'
import { Incr_Action } from './Action/Action'
function App(props) {
  // const [count, setCount] = useState(0)
// https://www.freecodecamp.org/news/how-to-use-redux-in-reactjs-with-real-life-examples-687ab4441b85/
  return (
   
    <div className="App">
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {props.count}
        </button> */}
        <button onClick={() => props.incr3(props.count+1)}>
          count is {props.count}
        </button>
      </div>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return{
    count:state.count
  }

}
const mapDispatchToProps=(dispatch)=>({
  incr3:(payload)=>dispatch(Incr_Action(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(App)
