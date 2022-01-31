import React, { useState } from 'react';
import './App.css'

const TaskBasic = () => {
    const [items, setItems] = useState('');
    const [taskArray, setTaskArray] = useState([]);
    const iterationItems = (e) =>{
        e.preventDefault();
        setItems('');
        setTaskArray([...taskArray, items])
        
    } 
  return (
    <div className='App-task '>
        <div className='container'>

            <h1>Task Basic</h1>
            <form >
                <h4>Enter a task</h4>
                <input 
                    type= 'text'
                    value={ items }
                    onChange={ (e) => setItems(e.target.value)}
                />
                <div className='separador'></div>
                <button onClick={ iterationItems } >ADD TASK</button>
            </form>
            <ul className='list'>
                {
                    taskArray.map(item => <li key={ item } ><span>{ item }</span></li>)
                }
            </ul>

        </div>
    </div>
  )
};

export default TaskBasic