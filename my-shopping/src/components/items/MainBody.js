import React, { Component } from 'react';
import ButtonSequel from './RoundButton';
import './mainBody.css';
import Card from './Card';

class MainBody extends Component {
  render() {
    return (
      <section className="main_body">
        <ButtonSequel />
        <Card />
      </section>
    );
  }
}

export default MainBody;