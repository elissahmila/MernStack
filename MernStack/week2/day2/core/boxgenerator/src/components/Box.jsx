import React, {useState} from 'react'
export const Box = (props) => {
    const [ Box, setBoxes] = useState(props.theTable);
    const [ color, setColor] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxes([...Box,color])  
    }
  return (
    
    <div>
    <div>
    {
     Box.map( (theTable)=>{
            return <div style={{
            display:'inline-block',    
            height:'80px',
            width:'80px',
            backgroundColor:theTable 
            }}></div>
     } )

    }    
        
    </div>    
    <form onSubmit={handleSubmit}>
        <div className='myform'>
        <p>Color</p> <input type="text" onChange={(e)=>{setColor(e.target.value)}} /> 
       <button>add</button>
       </div>
       </form>
       </div>
  )
}
export default Box