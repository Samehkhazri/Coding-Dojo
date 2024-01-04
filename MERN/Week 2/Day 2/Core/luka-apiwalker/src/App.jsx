import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './components/Display'
import Form from './components/Form'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
const [option,setOption]=useState('')
const [id,setId]=useState();
console.log(option,id);
  return (
    <>
      <Form setOption={setOption} setId={setId} option={option} id={id}/>
      <Routes>
        <Route path='/:option/:id'element={<Display opt={option} iid={id}/>}/>
      </Routes>
    </>
  )
}

export default App
