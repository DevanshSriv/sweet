import { Route, Routes } from 'react-router-dom';
import './App.css';
import Featured from './Featured';
import Home from './Home';
import Nav from './Nav';
import Offers from './Offers';
import { Parent } from './Parent';
function App() {
  
  return (
    <div className="App">
     <Parent>
      <Nav/>
      <Offers/>
      <Routes>
      <Route path='/' element={<Featured/>}/>
        <Route path='/home' element={<Home/>} />
      </Routes>
     </Parent>
    </div>
  );
}

export default App;
