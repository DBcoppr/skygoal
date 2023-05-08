import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Auth from './pages/auth';
import Home from './pages/Home';
import PrivateRoutes from './components/Privateroute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Auth/>}></Route>
        <Route element={<PrivateRoutes/>}>
        <Route path='/home'element={<Home/>}></Route>
        </Route>
       
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
