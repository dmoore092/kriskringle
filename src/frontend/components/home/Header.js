import React, { Component } from 'react';
import './header.css';
import santa from '../../img/santa.png';

class Header extends Component {
  render() {
    return (
      <div>
        <p className="welcome">Welcome</p>
            <img src={santa} alt="santa" className='santa' />
            <p className='pc'>To The Polish Campout</p>
            <p className='pc'>Kris Kringle 2019</p>
      </div>
    );
  }
}


export default Header;
///src/img/santa.png