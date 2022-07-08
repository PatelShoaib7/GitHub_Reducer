import React from 'react'
import { useState } from 'react'

export const Counter = () => {
  const [ state , dispatch] = useState({count : 0})
    return (
    <div>Counter {state.count}
    
    <button onClick={()=> dispatch(incrementAction)}>Add</button>
    <button onClick={()=> dispatch(decrementAction)}>Reduce</button>
    
    </div>
  )
}


