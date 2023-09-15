import React, { useState } from 'react'
import axios  from 'axios'

const Form = (props) => {
    const [productTitle, setProductTitle] = useState("")
    const [ price, setPrice] = useState(0)
    const [descreption, setDescreption] = useState("")
    const { refresh } = props
    
    const onSubmitHandler = (e) => {
        e.preventDefault()
        const newObj ={
            productTitle,
        price , descreption
        }
        axios.post("http://localhost:5000/api/product",newObj)
        .then(res => {
            console.log("your Product is added successfully  ✅✅✅✅")
            refresh()
            setProductTitle("")
            setPrice(0)
            setDescreption("")

        })
        .catch(err => {
            console.log(err)
        })

    }

    return (
        <fieldset>
            <legend>Form</legend>
            <form onSubmit={onSubmitHandler}>
                Product Title :<input onChange={(e) => { setProductTitle(e.target.value) }} />
                Price : <input onChange={(e) => { setPrice(e.target.value) }} />
                Descreption : <input onChange={(e) => { setDescreption(e.target.value) }} />
                
                <button>Add Product</button>
            </form>
        </fieldset>
    )
}
export default Form