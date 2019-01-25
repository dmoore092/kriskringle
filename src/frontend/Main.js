import React, { Component } from 'react'
import MyPrefs from './components/main/MyPrefs';
import MainHeader from './components/main/MainHeader';
import SeePrefs from './components/main/SeePrefs';

export class Main extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <SeePrefs />
        <MyPrefs />
      </div>
    )
  }
}

export default Main
