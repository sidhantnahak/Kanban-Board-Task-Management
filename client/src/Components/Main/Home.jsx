import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import { useDispatch, useSelector } from 'react-redux'
import { Clear_Errors, getall_user, register_user } from '../../redux/userAction'
import { useAlert } from 'react-alert'
import { register_user_reset } from '../../redux/userConstants'
import Loader from '../Loader&Notfound/Loader'
import { Main } from './Main'
const Home = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const ref = useRef();


    const [data, setdata] = useState({ name: "", address: "" });
    const [topHeight, settopHeight] = useState(0)
    const { sucess, error, loading } = useSelector(state => state.user);

    const onchangeHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    const formHandler = (e) => {
        e.preventDefault()
        dispatch(register_user(data))
    }
    const userHandler = () => {
        let elem = document.getElementById("users");
        elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(Clear_Errors())
        }
        if (sucess) {
            data.name = ""
            data.address = "";
            alert.success("User registred sucessfully")
            dispatch(getall_user())
            dispatch({ type: register_user_reset })
        }

    }, [dispatch, error, sucess, alert])



    return (
        <>

            <nav >
                <Link to='/' >Kanban Board Task Management
                </Link>
            </nav>
            <div className='nav_item'>

                <Link >Get All Tasks</Link>
                <Link >To Do Tasks</Link>
                <Link >Doing Tasks</Link>
                <Link >Done Tasks</Link>

            </div>

            <div id='sidebar' className='sidebar'>
                <Link >Get All Tasks</Link>
                <Link >To Do Tasks</Link>
                <Link >Doing Tasks</Link>
                <Link >Done Tasks</Link>
            </div>

            <Main />

        </>
    )
}

export default Home