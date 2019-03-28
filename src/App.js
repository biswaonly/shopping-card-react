import React, { Component } from 'react';
import Header from './components/header/Header';

import './App.css';
import MainBody from './components/mainBody/MainBody';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <MainBody />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;