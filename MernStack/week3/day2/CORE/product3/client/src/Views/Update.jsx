import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

const Update = () => {
  const { id } = useParams()
  const [productTitle, setProductTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
      axios.get(`http://localhost:8000/api/product${id}`)

          .then(res => {
            const {productTitle,price,description} = res.data.oneProduct
              console.log(res.data)
              setProductTitle(productTitle)
              setPrice(price)
              setDescription(description)
            
          })
          .catch(err => {
              console.log("🚩🚩🚩❌❌❌❌", err)
          })

  }, [id])
  const onUpdatetHandler = (e) => {
    e.preventDefault();
    const newObj = {
      productTitle,
      price,
      description,
    };
    axios.put(`http://localhost:8000/api/product${id}`, newObj)
      .then(() => {
        console.log("Your Product is added successfully ✅✅✅✅");
        navigate("/")
       
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div>
       <legend>Form</legend>
      <form onSubmit={onUpdatetHandler}>
        Product Title: <input onChange={(e) => { setProductTitle(e.target.value) }} value={productTitle} />
        Price: <input onChange={(e) => { setPrice(e.target.value) }}  value={price} />
        Description: <input onChange={(e) => { setDescription(e.target.value) }}  value={description}/>
        <button>update Product</button>
      </form>
      <Link to={"/"}>home</Link>

    </div>
  )
}

export default Update