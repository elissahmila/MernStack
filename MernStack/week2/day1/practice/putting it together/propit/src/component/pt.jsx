import React, { useState } from "react";
const Firstcomp=(props) =>{

    
const [age,SetAge] = useState(props.age)
const {firstName,lastName,hair} = props;
const addAge = () =>{
    SetAge(age + 1);


}



return(
<div>

<h1> {lastName} , {firstName}</h1>
<p>age:{age}</p>
<p>hair color:{hair}</p>
<button onClick={()=> {addAge()}}>bd for</button>
</div>
)

}
export default Firstcomp