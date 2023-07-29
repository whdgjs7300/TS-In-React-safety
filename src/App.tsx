import {  Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Country from './Pages/Country';
import Info from './Pages/Info';
import Safety from './Pages/Safety';
import Contact from './Pages/Contact';
import Permit from './Pages/Permit';
import SpecialTrip from './Pages/SpecialTrip';
import Notice from './Pages/Notice';


function App() {
  
  
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/country/:countryNM' element={<Country/>}></Route>
        <Route path='/basicinfo' element={<Info/>}></Route>
        <Route path='/safety' element={<Safety/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/permit' element={<Permit/>}></Route>
        <Route path='/specialtrip' element={<SpecialTrip/>}></Route>
        <Route path='/notice' element={<Notice/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
