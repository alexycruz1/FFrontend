import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import {AgregarCliente} from './Components/cliente';
window.React = React

export default class App extends React.Component {
  render() {
    let data;
    data = <div className="App">
    {
    
          (this.props.location.pathname === "/agregarCliente") ?
            <AgregarCliente />
            :
              <div></div>
        
    
    }
    </div>
    return (
      <div>
      <React.Fragment>
       
      </React.Fragment>
    <div>{data}</div>
    </div>
    );
  }
}