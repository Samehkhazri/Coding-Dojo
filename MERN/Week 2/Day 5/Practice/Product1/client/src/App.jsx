// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';

// import Create from './components/Create';
import SingleManager from './components/SingleManager';
// import UpdateManager from './components/UpdateManager'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/manager' element={<Create/>}/> */}
        <Route path='/manager/:id' element={<SingleManager/>}/>
        {/* <Route path='/manager/update/:id' element={<UpdateManager/>}/> */}
      

      </Routes>

    </div>
  );
}

export default App;
