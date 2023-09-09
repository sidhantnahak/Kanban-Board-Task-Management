import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import { useDispatch, useSelector } from 'react-redux'
import { Clear_Errors, getall_user, register_user } from './redux/userAction'
import { useAlert } from 'react-alert'
import { register_user_reset } from './redux/userConstants'
import Users from './Users'
import Loader from './Loader'
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

    var elem = document.getElementById("sidebar")
    if (topHeight > 40) {
        if (elem) {
            elem.style.paddingTop = "1.5rem"
        }
    } else {
        if (elem) {
            elem.style.paddingTop = "5rem"
        }
    }
    document.onscroll = function () {
        settopHeight(document.documentElement.scrollTop);
    };
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
            <nav className="navbar bg-dark ">
                <div className="container-fluid bg-dark">
                    <Link to='/' className="navbar-brand text-white">SmokeTrees Digital LLP</Link>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success text-white" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className='nav_item'>

                <Link onClick={() => ref.current.focus()} to='/'>Register Here</Link>
                <Link onClick={userHandler}>All Users</Link>
            </div>

            <div id='sidebar' className='sidebar'>
                {topHeight > 40 && <Link to='/' className="navbar-brand text-black">SmokeTrees Digital LLP</Link>}

                <Link onClick={() => ref.current.focus()} to='/'>Register Here</Link>
                <Link onClick={userHandler}>All Users</Link>
            </div>


            <div className="form_div">
                <form onSubmit={formHandler} style={{ width: "80%", boxShadow: "1px 1px 5px black", padding: "1rem 2rem", margin: "auto" }}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Name</label>
                        <input ref={ref} type="text" name="name" value={data.name} onChange={onchangeHandler} className="form-control" id="exampleFormControlInput1" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Address</label>
                        <input type='text' name='address' value={data.address} onChange={onchangeHandler} className="form-control" id="exampleFormControlInput1"  required></input>
                    </div>
                    <input type="submit" className='btn btn-primary' />
                </form>
            </div>
            <div id='users' className="users form_div">
                <h3>Registered Users</h3>
                <hr />
                {loading ? <Loader /> :

                    <Users />}
            </div>

        </>
    )
}

export default Home