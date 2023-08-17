import React from "react";
const Firstcomp=(props) =>{


return(
<div>

<h1> {props.lastname} , {props.firstname}</h1>
<p>age:{props.age}</p>
<p>hair color:{props.hair}</p>
</div>
)

}
export default Firstcomp