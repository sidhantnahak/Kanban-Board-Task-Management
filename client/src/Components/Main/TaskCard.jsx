import React from 'react'
import { Link } from 'react-router-dom'

const TaskCard = () => {
    return (
        <div class="card shadow" style={{ width: "23rem" }}>
            <div class="card-body">
                <h5 class="card-title">Task title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link style={{ marginRight: "1rem" }} href="#" class="btn btn-primary">View Details</Link>
                <Link href="#" class="btn btn-primary">Delete Task</Link>
            </div>
        </div>
        
    )
}

export default TaskCard