import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact/>} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
