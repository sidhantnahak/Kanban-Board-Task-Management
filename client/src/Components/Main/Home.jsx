import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './home.css'

const Home = ({setnote}) => {
    const [width,setwidth]=useState(window.innerWidth);
    window.onresize=()=>{
        setwidth(window.innerWidth);
    }
   
    const navigate = useNavigate();
    const closeMenu = (e) => {
        e.preventDefault()
        let toogle_btn_icon = document.getElementById('bar');
        let elem = document.getElementById("sidebar2")
        elem.classList.toggle("open")
        const isOpen = elem.classList.contains('open');
        toogle_btn_icon.classList = isOpen ? "fa-solid fa-bars-staggered" : "fa-solid fa-bars"
    }


    const taskHandler = () => {
        let elem = document.getElementById("tasks");
        elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    return (
        <>

            <nav >
                <Link to='/' >Kanban Board Task Management
                </Link>
                <Link onClick={closeMenu} id='bar' className="fa-solid fa-bars" />

            </nav>
            <div className='nav_item'>



            </div>

            <div id='sidebar' className='sidebar'>
                <Link onClick={() => { taskHandler(); setnote("All Tasks") }}>Get All Tasks</Link>
                <Link onClick={() => setnote("To Do")}>To Do Tasks</Link>
                <Link onClick={() => setnote("Doing")}>Doing Tasks</Link>
                <Link onClick={() => setnote("Done")}>Done Tasks</Link>
            </div>
            <div id='sidebar2' className="sidebar2">
                <ul>
                    <li><Link   onClick={() => { taskHandler(); setnote("All Tasks") }} >Get All Tasks</Link></li>
                    <li><Link onClick={() => setnote("To Do")}>To Do Tasks</Link></li>
                    <li><Link onClick={() => setnote("Doing")} >Doing Tasks</Link></li>
                    <li><Link onClick={() => setnote("Done")} >Done Tasks</Link></li>
                     
                    
                    
                    

                </ul>
            </div>

        </>
    )
}

export default Home