import React, { Component } from 'react';
import santa from '../../img/santa.png';
import frosty from '../../img/frosty.png';
import './mainHeader.css';


export class MainHeader extends Component {
  render() {
    return (
      <div>
        <img src={ santa } alt="santa" id = "santa1" />
        <img src={ frosty } alt="frosty" id = "frosty" />
        <h1 id="kk2019">Kris Kringle 2019</h1>
      </div>
    )
  }
}

export default MainHeader
