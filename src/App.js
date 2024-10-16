import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navtodo from './Navtodo';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Todolist from './Todolist';
import { Toaster } from 'react-hot-toast';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navtodo/>
    <Routes>
      <Route path="/" element={<Section/>} ></Route>
      <Route path="/todolist" element={<Todolist/>} ></Route>
    </Routes>
    <Toaster/>
    </BrowserRouter>
    </div>
    
    
  );
}

export default App;
