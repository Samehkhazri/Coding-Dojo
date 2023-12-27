import React, { useState } from 'react'

const Display = ({addPlan}) => {
    const[plan,setPlan]=useState({content:'',status:false});
    const formHandler=(e)=>{
        e.preventDefault()
        addPlan(plan)
        setPlan({content:'',status:false})
    }
  return (
    <div className='task'>
        <form onSubmit={formHandler}>
        <input type="text" onChange={(e)=>setPlan({...plan,content:e.target.value})} value={plan.content}/>
        <button className='btn'>Create</button>
        </form>
    </div>
  )
}

export default Display