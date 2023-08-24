import React, {useState} from 'react'
const Forms = () => {
  const [firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState("");
  const createUser = (e) => {
    e.preventDefault();
    const newUser = { 
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
  }
    const formMessage = () => {
      if( firstName.length<2 ) {
    return "Thank you for submitting the form!";
} else {
    return "first name must be at least 2 characters";
}
} 
    const messageForm = () => {
      if( lastName.length<2) {
        return "Thank you for sumbitting the form";
       } else {
  return "first name must be at least 2 characters";
       }
 }
 const newForm = () => {
  if(email.length<2){

  return "thank you for sumbitting the form";
  } else {
    return " first name must be at least 8 characters";
  }

 }
 const noWay = () => {
  if(password.length<2){

    return "thank you for sumbitting the form";
  } else {
    return "first name must be at least 8 characters";
  }
  }
  const t3bt = ()=> {

  if(confirmPassword.length<2){
    return "thank you for sumbitting the form";

  } else {
    return "first name must be at least 8 characters"
  }
  }
  return (
    <>
    <form onSubmit={ createUser }>
        <div>
            <label>Firstname: </label> 
            <input type="text" onChange={ (e) => setFirstName(e.target.value) } /> 
            {formMessage()}    
        </div>
        <div>
            <label>Email Address: </label> 
            <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            {newForm()}
        </div>
        <div>
            <label>Password: </label>
            <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            {noWay()}
        </div>
        <div>
          <label>LastName:</label>
          <input type="text" onChange={ (e) => setLastName(e.target.value) }  />
          {messageForm()}
        
          <label>confirmPassword:</label>
          <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
          {t3bt()}
        </div>
        <div>
        <input type="submit" value="Create User" />
        </div>

    </form>
   
    </>
  
  );
};
export default Forms;

