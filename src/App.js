import { Route, Routes } from 'react-router-dom';
import './App.css';
import Featured from './Featured';
import Home from './Home';
import Nav from './Nav';
import Offers from './Offers';
import { Parent } from './Parent';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Button, Tooltip } from '@mui/material';
import Page from './Page';
import Checkout from './Checkout';
function App() {
  
  return (
    <div className="App">
     <Parent>
      <Nav/>
     
      <Offers/>
     
      <Routes>
      <Route path='/' element={<Featured/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/checkout' element={<Checkout/>} />
      </Routes>
      
      
     </Parent>
     
    </div>
  );
}

export default App;
