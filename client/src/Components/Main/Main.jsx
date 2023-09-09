import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'
import TaskCard from './TaskCard'

export const Main = () => {
    return (
        <div className='main_container'>


            <form style={{ width: "100%", boxShadow: "1px 1px 3px black", padding: "1rem 2rem", margin: "auto",fontSize:"1.1rem",fontWeight:"700",color:"rgb(67, 52, 52)" }}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Enter Title</label>
                    <input type="text" name="title" className="form-control" id="exampleFormControlInput1" required />

                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Description</label>
                    <textarea type='text' name='address' className="form-control" id="exampleFormControtextarea" rows={3} required></textarea>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap:"4rem" }} className="check_box">
                    <input type="submit" value="Add Task" className='btn btn-primary' />
                    <div className='form_check_div' style={{display:"flex",gap:"1.5rem"}}>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                            <label class="form-check-label" for="flexRadioDefault1">
                                To Do
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Doing
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                            <label class="form-check-label" for="flexRadioDefault3">
                                Done
                            </label>
                        </div>
                    </div>

                </div>
            </form>


            <div className="status_div">
                <div style={{ background: `linear-gradient( #340537, #781145, #b63741, #df702e, #ebb212)` }}>Total Tasks</div>
                <div style={{ background: ` linear-gradient(to right bottom, #1e0537, #4a0d53, #7d0e69, #b40c77, #eb127e)` }}>To Do  </div>
                <div style={{ background: "linear-gradient( #340537, #781145, #b63741, #df702e, #ebb212)" }}>Doing</div>
                <div style={{ background: `linear-gradient(to right bottom, #050537, #391456, #72166e, #af117c, #eb127e)` }}>Done</div>
            </div>

            <div className="notes_container">

                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div>


        </div >
    )
}
