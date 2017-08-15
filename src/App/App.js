import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';

// Components
import Product from '../product/product.js';
import WishList from '../wishlist/wishlist.js';

// Services
const http = new HttpService();

class App extends Component {
  // Where things are first called
  constructor(props) {
    super(props);

    // 1) States can change
    this.state = {products:[]};

    // Bind functions
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);

    this.loadData();
  }

  // 2) Loading data
  loadData = () => {
    // "this" is inside promise so we need self
    var self = this;
    http.getProducts().then(data => {
      // 3) Fetching data from our server and goes into products array
      self.setState({products: data})
    }, err => {

    });
  }

  // 5) Dynamically produces a list of products using .map
  productList = () => {
    const list = this.state.products.map((product) =>
      // Pass data into different props
      <div className="col-sms-4" key={product._id}>
        <Product title={product.title} price={product.price} imgUrl={product.imgUrl}/>
      </div>
  );

    return(list);
  }

  // 4) Render function called and goes down to productList()
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to The Swag Shop</h2>
        </div>
        <div className="container-fluid App-main">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                {this.productList()}
              </div>
            </div>
            <div className="col-sm-4">
              <WishList />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
