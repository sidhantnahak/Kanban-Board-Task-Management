import './App.css';
import { Routes, Route, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import Home from './Components/Main/Home';
import Notfound from './Components/Loader&Notfound/Notfound';
import { useEffect } from 'react';
import { getall_task } from './redux/taskAction';
import { useDispatch } from 'react-redux';
import ToDoTasks from './Components/Main/ToDoTasks';

function App() {
const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getall_task())

  }, [dispatch])


  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route exact path='/' element={<Home />} />
          <Route exact path='/task/:id' element={<Home />} />
          <Route path='/todo' element={<ToDoTasks />} />

          <Route path='*' element={<Notfound />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}
// DB_URI=mongodb://localhost:27017/Database1
export default App;
