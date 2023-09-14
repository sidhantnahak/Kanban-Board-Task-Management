import React from 'react'
import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';
import Loader from '../Loader&Notfound/Loader';

const ToDoTasks = () => {
    const { tasks,loading } = useSelector(state => state.tasks);



    return (

        <>
        {loading ?<Loader/>:
        <>
        <h2 style={{margin:"2rem 1rem",textAlign:"center"}}>To Do Tasks :{tasks && tasks.filter(e=>e.status=="To Do").length}</h2>
        <div id='tasks' className="notes_container">

            {tasks && tasks.filter(e=>e.status=="To Do").map(e=>{
                return <TaskCard key={e._id} details={e}/>
            })}
        </div>
        </>
        }
        </>

    )
}

export default ToDoTasks