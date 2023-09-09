import './App.css';
import { Routes, Route, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import Home from './Components/Home';
import Notfound from './Components/Notfound';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Notfound/>}/>

        </Routes>
      </BrowserRouter>

    </>
  );
}
// DB_URI=mongodb://localhost:27017/Database1
export default App;
