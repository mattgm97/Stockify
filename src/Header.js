import React from 'react';
import logo from './icon.png';
import Navbar from 'react-bootstrap/Navbar';


const Header = ()=>{
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="35"
            height="35"
            className="d-inline-block align-top"
            style={{backgroundColor: 'white', borderRadius: '100%'}}
            
          />
          {'  Stocks'}
        </Navbar.Brand>
      </Navbar> 
    )
}

export default Header;
