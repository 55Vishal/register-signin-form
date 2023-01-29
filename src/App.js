
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>

    </Routes>
    
    </>
  );
}

export default App;
