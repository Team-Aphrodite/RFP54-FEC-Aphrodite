/* eslint-disable import/extensions */
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

import Related from './related/Related.jsx';
// import ReviewsAndRatings from './reviews/ReviewsAndRatings.jsx';

function App() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(0);

  const getProducts = () => {
    axios.get('/products')
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProduct = (id) => {
    axios.get(`/products/${id}`)
      .then((data) => {
        setCurrentProduct(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getStyles = (id) => {
    axios.get(`/products/${id}/styles`)
      .then((data) => {
        setCurrentProduct(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1>Project Catwalk</h1>
      {/* <Overview /> */}
      <button type="button" onClick={getProducts}>Click Me</button>
      <button type="button" onClick={() => getProduct(17070)}>Click to fetch product</button>
      <button type="button" onClick={() => getStyles(17070)}>Click to fetch styles</button>
      <Related />
      {/* <ReviewsAndRatings /> */}
    </div>
  );
}

export default App;
