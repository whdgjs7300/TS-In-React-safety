import {  Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Info from './Pages/Info';
import Safety from './Pages/Safety';
import Contact from './Pages/Contact';
import Permit from './Pages/Permit';
import SpecialTrip from './Pages/SpecialTrip';
import Notice from './Pages/Notice';

import { Suspense, lazy } from 'react';
import Loading from './components/Loading';


const CountryPrivate = lazy(()=> import('./Routers/CountryPrivate'))


function App() {
  
  
  
  return (
    <div className="App">
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/country/:countryNM' element={<CountryPrivate/>}></Route>
        <Route path='/basicinfo/:countryNM' element={<Info/>}></Route>
        <Route path='/safety/:countryNM' element={<Safety/>}></Route>
        <Route path='/contact/:countryNM' element={<Contact/>}></Route>
        <Route path='/permit/:countryNM' element={<Permit/>}></Route>
        <Route path='/specialtrip/:countryNM' element={<SpecialTrip/>}></Route>
        <Route path='/notice' element={<Notice/>}></Route>
      </Routes>
      </Suspense>
      
    </div>
  );
}

export default App;
