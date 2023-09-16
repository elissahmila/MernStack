import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [oneProduct, setOneProduct] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/api/product/${id}`)
      .then(res => {
        console.log(res.data);
        setOneProduct(res.data.Product);
      })
      .catch(err => {
        console.log("🚩🚩🚩❌❌❌❌", err);
      });
  }, [id]);

  return (
    <div>
      PRODUCTS HERE
      <p>{oneProduct.productTitle}</p>
      <p>{oneProduct.price}</p>
      <p>{oneProduct.description}</p>
    </div>
  );
}

export default Details;
