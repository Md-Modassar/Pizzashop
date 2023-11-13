import './App.css';
import Footer from './components/footer/Footer';
import Herder from './components/header/Herder';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div >
      <Router>
       <Herder/>
    
    <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='/menu' exact Component={Menu}/>
      <Route path='/about' exact Component={About}/>
      <Route path='/contact' exact Component={Contact}/>
      
    </Routes>
    


      <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
