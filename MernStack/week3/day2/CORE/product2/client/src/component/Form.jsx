import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
  const [productTitle, setProductTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const { refresh } = props

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newObj = {
      productTitle,
      price,
      description,
    };
    axios.post("http://localhost:5000/api/product", newObj)
      .then(() => {
        console.log("Your Product is added successfully ✅✅✅✅");
        refresh();
        setProductTitle('');
        setPrice(0);
        setDescription('');
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <fieldset>
      <legend>Form</legend>
      <form onSubmit={onSubmitHandler}>
        Product Title: <input onChange={(e) => { setProductTitle(e.target.value) }} />
        Price: <input onChange={(e) => { setPrice(e.target.value) }} />
        Description: <input onChange={(e) => { setDescription(e.target.value) }} />
        <button>Add Product</button>
      </form>
    </fieldset>
  );
}

export default Form;
