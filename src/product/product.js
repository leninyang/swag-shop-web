import React, {Component} from 'react';
import './product.css';

// We want a class that inherets features from react {Component}
class Product extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.imgUrl} alt="Product"></img>
        <div className="card-block">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">Price: ${this.props.price}</p>
          <a href="#" className="btn btn-primary">Add to Wishlist</a>
        </div>
      </div>
    );
  }
}

// exporting Product class so it's accessible
export default Product;
