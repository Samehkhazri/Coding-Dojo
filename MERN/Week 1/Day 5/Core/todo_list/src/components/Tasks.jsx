import React from 'react'

const Tasks = ({ plans, updatePlan, deletePlan }) => {
    return (
        <div className='task'>
            {plans.map((plan, idx) => <div key={idx} style={{ display: 'flex' }}>
                <h3 style={plan.status ? { textDecoration: "line-through" } : { backgroundColor: 'white' }}>{plan.content}</h3>
                <input type="checkbox" checked={plan.status}
                    onChange={(e) => updatePlan(idx)} />
                <button onClick={() => deletePlan(idx)}>delete</button >
            </div>)}
        </div>
    )
}

export default Tasks