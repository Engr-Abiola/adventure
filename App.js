import Navbar from "./components/Navbar";
import { BrowserRouter as Router,  Route, Routes} from 'react-router-dom';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Signup  from './components/pages/Signup';
function App() {
  return (
    < >
        <Router basename={process.env.PUBLIC_URL}>
             <Navbar/> 
       <Routes> 
            <Route path="/" element ={<Home />} /> 
            <Route path="/services" element ={<Services />} /> 
            <Route path="/Products" element ={<Products />} /> 
            <Route path="/Signup" element ={<Signup />} /> 
         </Routes>
    </Router>
    
     <h1>   <FontAwesomeIcon icon={faCoffee} style={{color:'white'}}> </FontAwesomeIcon>  Launching React App .</h1>
    </>
  );
}

export default App;
