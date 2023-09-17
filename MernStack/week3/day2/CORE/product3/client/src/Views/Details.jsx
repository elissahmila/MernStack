import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {

    const { id } = useParams()

    const [oneProduct, setOneProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product${id}`)

            .then(res => {
                console.log(res.data)
                setOneProduct(res.data.oneProduct)
            })
            .catch(err => {
                console.log("🚩🚩🚩❌❌❌❌", err)
            })




    }, [id])
   

    return (
        <div>
            More Details
            <p>{oneProduct.productTitle}</p>
            <p>{oneProduct.price}</p>
            <p>{oneProduct.descreption}</p>
        </div>
    )
}

export default Details