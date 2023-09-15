import './App.css';
import { Routes, Route, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import Home from './Components/Main/Home';
import Notfound from './Components/Loader&Notfound/Notfound';
import { useEffect, useState } from 'react';
import { getall_task } from './redux/taskAction';
import { useDispatch } from 'react-redux';
import ToDoTasks from './Components/Main/ToDoTasks';
import { Main } from './Components/Main/Main';

function App() {
  const [note, setnote] = useState("All Tasks")

const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getall_task())

  }, [dispatch])


  return (
    <>
      <BrowserRouter>
      <Home setnote={setnote}/>
        <Routes>
          
          <Route exact path='/' element={<Main note={note}/>} />

          <Route path='*' element={<Notfound />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}
// DB_URI=mongodb://localhost:27017/Database1
export default App;
