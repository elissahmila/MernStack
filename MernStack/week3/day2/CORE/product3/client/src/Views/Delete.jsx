import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Delete() {
  const navigate=useNavigate()
    const [products,Setproducts]=useState([])
    const {id}=useParams()
    const Deleteproduct=(props)=>{
    axios.delete(`http://localhost:8000/api/product/${id}`)
        .then((res)=>{
          const newList = products.filter((product, index) => product._id !== props)
          Setproducts(newList);
          navigate("/")
        })
    }
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res =>{
          console.log(res.data.allProduct)
          Setproducts(res.data.allProduct)
        })
        .catch(err =>{
          console.log(err)
        })
    },[])
  return (
    <div>
  <button onClick={Deleteproduct(products._id)}>Delete</button>
    </div>
  )
}

export default Delete