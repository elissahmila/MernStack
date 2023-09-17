import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dachbord = (props) => {
  const [allProduct, setAllProduct] = useState([]);
  const { refreshState } = props;

  useEffect(() => {
    axios.get("http://localhost:5000/api/product")
      .then(res => {
        console.log(res.data.allProduct);
        setAllProduct(res.data.allProduct);
      })
      .catch(err => {
        console.log(err);
      });
  }, [refreshState]);

  return (
    <fieldset>
      <legend>Dachbord.jsx</legend>
      <hr />
      {allProduct.map((oneProduct) => (
        <div key={oneProduct._id}>
          <p>{oneProduct.productTitle}</p>
          <p>{oneProduct.price}</p>
          <p>{oneProduct.description}</p> 
        </div>
      ))}
    </fieldset>
  );
}

export default Dachbord;
