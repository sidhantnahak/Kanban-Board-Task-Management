import React, { memo, useEffect, useState } from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Clear_Errors, delete_task, get_task, update_task } from '../../redux/taskAction'
import { useAlert } from 'react-alert'

const TaskCard = ({ details }) => {
    const { task } = useSelector(state => state.taskdetail)
    const [editdata, seteditdata] = useState({ etitle: "", edescription: "", estatus:"To Do" });
    const navigate=useNavigate();
    const params=useParams();
    const onchangeHandler2 = (e) => {
        seteditdata({ ...editdata, [e.target.name]: e.target.value })
    }
    const editHandler = (e) => {
        e.preventDefault()
    }
    const dispatch = useDispatch();
    const alert = useAlert()

    useEffect(() => {
     dispatch(get_task(details._id))

    }, [dispatch,navigate])




    return (
        <>


            <div onClick={(e)=>e.stopPropagation()} class="modal fade" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Edit Task</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form style={{ width: "100%", padding: "1rem 2rem", margin: "auto", fontSize: "1.1rem", fontWeight: "700", color: "rgb(67, 52, 52)" }} onSubmit={editHandler}>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Enter Title</label>
                                    <input type="text" name="etitle" className="form-control"  value={editdata.etitle} id="exampleFormControlInput1" onChange={onchangeHandler2} required />

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Description</label>
                                    <textarea type='text' name='edescription' value={editdata.edescription} className="form-control" id="exampleFormControtextarea" rows={3} onChange={onchangeHandler2} required></textarea>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "4rem" }} name="estatus" className="check_box" onChange={(e)=>seteditdata({...editdata,estatus:e.target.value})}>
                                    <div className='form_check_div' style={{ display: "flex", gap: "1.5rem" }} >
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" value="To Do" defaultChecked id="flexRadioDefault4"  />
                                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                To Do
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" value="Doing" checked={ editdata.estatus==="Doing"} id="flexRadioDefault5"  />
                                            <label className="form-check-label" htmlFor="flexRadioDefault5">
                                                Doing
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" value="Done" checked={editdata.estatus==="Done"} id="flexRadioDefault6"  />
                                            <label className="form-check-label" htmlFor="flexRadioDefault6">
                                                Done
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" >Close</button>
                            <button onClick={()=>dispatch(update_task(details._id,editdata))} data-dismiss="modal" type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* view details */}

            <div class="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">{task && task.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {task && task.description}
                        </div>
                        <p style={{margin:"0.2rem 0.5rem 1rem 1rem"}}><b>Status : </b>{task&& task.status}</p>
                    </div>
                </div>
            </div>
        

            <div className="card shadow-lg" style={{ width: "21rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{details.title}</h5>
                    <p className="card-text">{details.description.length>30?<>{details.description.substr(0,30)} <span onClick={() => dispatch(get_task(details._id))} type='button' style={{color:"blue",fontWeight:"600"}}   data-toggle="modal" data-target="#exampleModalCenter"> more....</span></>:details.description}</p>

                    <Link onClick={() => dispatch(get_task(details._id))} type='button' style={{ marginRight: "1rem" }} href="#" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa-solid fa-eye"></i></Link>
                    <Link onClick={(e) =>{ dispatch(get_task(details._id));}} style={{ marginRight: "1rem" }} className='btn btn-primary' data-toggle="modal" data-target="#exampleModalLong"><i class="fa-solid fa-pen-to-square"></i></Link>

                    <Link onClick={() => { dispatch(delete_task(details._id)) }} className="btn btn-primary">Delete Task</Link>
                </div>
            </div>


        </>
    )
}

export default memo(TaskCard) 