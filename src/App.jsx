import './App.css';
import Form from './components/Form';
import Home from './components/Home';
import DashAdmin from './components/DashAdmin';
import Registro from './components/Registro';
import RegisAdmin from './components/RegisAdmin';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import { useState } from 'react';


function App() {
  const [user, setUser] = useState(null);
  const [iduser, setiduser] = useState("");
  return (  
    <BrowserRouter>
      {/* <Navigation/> */}
      <Routes>
        <Route index element={<Form callback={setUser} setiduser={setiduser}/>}></Route>
        <Route path='/Home' element={<Home user={user} iduser={iduser}/>}></Route>
        <Route path='/DashAdmin' element={<DashAdmin user={user}/>}></Route>
        <Route path='/registro' element={<Registro />}></Route>
        <Route path='/regisAdmin' element={<RegisAdmin/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
