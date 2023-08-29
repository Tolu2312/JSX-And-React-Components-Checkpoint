import React from 'react';
import product from '../Product';

const Image = ( ) => {
  return <img src={product.imagePath} alt={product.name} style={{width: "200px", height: "200px", marginTop: "20px", position: "center"}}/>;
};

export default Image;
