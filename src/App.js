import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEmployee from './Components/AddEmployee';
import ViewAll from './Components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddEmployee/>}/>
      <Route path="/view" element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
