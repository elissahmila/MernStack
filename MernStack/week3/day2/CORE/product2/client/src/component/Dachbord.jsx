import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
          <br />
          <br />
          <Link to={`/MoreDetails/${oneProduct._id}`}>{oneProduct.productTitle}</Link><br /><br />
        </div>
      ))}
    </fieldset>
  );
}

export default Dachbord;
