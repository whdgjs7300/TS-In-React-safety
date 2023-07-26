
import { useEffect } from 'react';
import './App.css';
import { useYourStore } from './store/safetyByContryList';

function App() {
  const safeByContryList = useYourStore(state=>state.safeByContryList);
  const safeByContryListAction = useYourStore(state=>state.yourAction)
  console.log(safeByContryList);

  
  useEffect(()=>{
    safeByContryListAction();
  },[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
