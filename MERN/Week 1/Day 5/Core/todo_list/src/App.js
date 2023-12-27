import { useState } from 'react'
import Display from './components/Display'
import './App.css'

import Tasks from './components/Tasks'

function App() {
  const [plans, setPlans] = useState([{ content: "Get MERN black belt", status: false },
    { content: "Get Python black belt", status: true }])
  const addPlan = (newPlan) => {
    setPlans([...plans, newPlan])
  }

  

  const updatePlan=(index)=>{ 
    console.log('index of plan',index);
    const plansUpdated=[...plans]
    plansUpdated[index].status = !plans[index].status
    setPlans(plansUpdated);
  }

  

  const deletePlan=(index)=>{
    console.log('delete',index);
    const filteredPlans = plans.filter((plan,idx)=>idx!=index)
    setPlans(filteredPlans)
    
  }

  return (
    <>
      <h1>Add plans for today</h1>
      <Display addPlan={addPlan} />
      <Tasks plans={plans} updatePlan={updatePlan} deletePlan={deletePlan}/>
    </>
  )
}

export default App