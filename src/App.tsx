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
        <Route path='/basicinfo/:countryNM' element={<Info/>}></Route>
        <Route path='/safety/:countryNM' element={<Safety/>}></Route>
        <Route path='/contact/:countryNM' element={<Contact/>}></Route>
        <Route path='/permit/:countryNM' element={<Permit/>}></Route>
        <Route path='/specialtrip/:countryNM' element={<SpecialTrip/>}></Route>
        <Route path='/notice' element={<Notice/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
