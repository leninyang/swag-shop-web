import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';
import Product from '../product/product.js';

const http = new HttpService();

class App extends Component {

  constructor(props) {
    super(props);

    //Bind functions
    this.loadData = this.loadData.bind(this);

    this.loadData();
  }

  loadData = () => {
    http.getProducts().then(products => {
      console.log(products);
    }, err => {

    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to The Swag Shop</h2>
        </div>
        <div className="App-main">
          <Product price="4.23" title="Cool toy Gun" imgUrl="http://pop.h-cdn.co/assets/cm/15/05/54ca62c3d99f0_-_waterguns-5.jpg"/>
        </div>
      </div>
    );
  }
}

export default App;
