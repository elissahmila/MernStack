import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Dachbord = () => {
    const [allProduct,setAllProduct] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
        .then(res =>{
          console.log(res.data.allProduct)
          setAllProduct(res.data.allProduct)
        })
        .catch(err =>{
          console.log(err)
        })
      }
      ,[])
      return (
        <fieldset>
          <legend>Dachbord.jsx</legend>
          <hr />
          {allProduct.map((oneProduct) => (
            <div key={oneProduct._id}>
              <Link to= {"/MoreDetails/" + oneProduct._id}>{oneProduct.productTitle}</Link>
              <Link to={"/updateProduct/" + oneProduct._id}>Update product</Link>
              <Link to={"/deleteproduct/"+oneProduct._id}>Delete</Link>
            </div>
          ))}
        </fieldset>
      );
    }
export default Dachbord