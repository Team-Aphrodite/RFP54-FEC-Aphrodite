/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState, useContext } from 'react';
import YourOutfitProducts from './YourOutfitProducts.jsx';
import { ProductsContext } from '../state/ProductsContext.jsx';

function YourOutfit({ currentProduct }) {
  const [outfit, setOutfit] = useState({});
  const { currentStyle } = useContext(ProductsContext);

  const addToOutfit = () => {
    if (outfit[currentProduct.id]) { return null; }
    const { id } = currentProduct;
    setOutfit((prevState) => ({
      ...prevState,
      [id]: currentProduct,
    }));
  };

  return (
    <div className="your-outfit-container">
      <div className="related-products-header">
        <h3>YOUR OUTFIT</h3>
      </div>
      { currentProduct && currentStyle ? (
        <YourOutfitProducts
          setOutfit={setOutfit}
          outfit={outfit}
          addToOutfit={addToOutfit}
          currentProduct={currentProduct}
          currentStyle={currentStyle.results[0]}
        />
      ) : 'Loading'}
    </div>
  );
}

export default YourOutfit;
