import React, { Component } from 'react';
import ButtonSequel from './ButtonSequel';
import './mainBody.css';
import Card from './Card';
import Cart from '../cart/Cart';

class MainBody extends Component {
  render() {
    return (
      <section className="main_body row">
        <Cart />
        <ButtonSequel />
        <Card />
      </section>
    );
  }
}

export default MainBody;  