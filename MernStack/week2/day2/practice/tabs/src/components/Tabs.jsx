import React, {useState} from 'react'
const Tabs = () => {
    const[tab1,setTab1] = useState([])
    const update=(e)=>{
        e.preventDefault()
    }

  return (
    <form onSubmit={update}>    
    <button onClick={()=>{setTab1([1])}}>tab1</button>
    <button onClick={()=>{setTab1([2])}}>tab2</button>
    <button onClick={()=>{setTab1([3])}}>tab3</button>
   { tab1.map( (item)=>{
    return <p>Tab {item} content is showing her</p>  
   } ) }
    </form>
  )
}

export default Tabs