import React,  {useState, useEffect}from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import {faBars, faQuestion  } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { Button } from './Button';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButon] = useState(true);

    const handleClick = ()=> setClick(!click) ;
    const closeMobileMenu = ()=>setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButon(false);
        }
        else{
            setButon(true);
        }
    };

useEffect( ()=>{
    showButton();
}, [] );

   window.addEventListener('resize', showButton);

    return (
        <div>
           
            <img src='./images/1.jpg' width='150px' height='150px'/>
            
              <nav className='navbar'>
                  <div className="navbar-container"> 
                  <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                      User <FontAwesomeIcon icon={faAddressBook} />
                  </Link>

                  <div className="menu-icon" onClick={ handleClick}>
                          <FontAwesomeIcon icon={click ? faQuestion : faBars}/>
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                       <li className='nav-item' style={{display:'inline-block', marginRight:'5px'}}>
                           <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                         <li className='nav-item' style={{display:'inline-block' , marginRight:'5px'}}>
                             <Link to='/SERVICES' className='nav-links' onClick={closeMobileMenu}>
                                     Services
                                </Link>
                          </li>
                           <li className='nav-item' style={{display:'inline-block' , marginRight:'5px'}}>
                           <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                               Products</Link>
                        </li>
                         <li className='nav-item' style={{display:'inline-block'}}>
                           <Link to='/signup' className='nav-links' onClick={closeMobileMenu}>
                               Sign Up
                            </Link>
                         </li>
                          {button && <Button buttonStyle={'btn-outline'}> Sign Up  </Button>}
                  </ul>
                  </div>
              </nav>

        </div>
    );
}

export default Navbar;
