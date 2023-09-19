import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  Link, useParams } from 'react-router-dom';

const Form = (props) => {
  const [productTitle, setProductTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [products,Setproducts]=useState([])
 const {id}=useParams()
  const { refresh } = props
  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)

        .then(res => {
            console.log(res.data)  
            Setproducts(res.data)  
        })
        .catch(err => {
            console.log("🚩🚩🚩❌❌❌❌", err)
        })

}, [id])
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newObj = {
      productTitle,
      price,
      description,
    };
    axios.post("http://localhost:8000/api/product", newObj)
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
     <p>  Product Title: <input onChange={(e) => { setProductTitle(e.target.value) }} /> </p> 
        Price: <input onChange={(e) => { setPrice(e.target.value) }} />
        Description: <input onChange={(e) => { setDescription(e.target.value) }} />
        <button>Add Product</button>
      </form>
    </fieldset>
  );
}

export default Form