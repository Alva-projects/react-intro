
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/portfolio' element={ <Portfolio/>}/>
          <Route path='/contact' element={ <Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
