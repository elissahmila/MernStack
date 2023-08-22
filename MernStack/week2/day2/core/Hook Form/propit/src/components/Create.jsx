import React, {useState} from 'react'

const Create = () => {
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
    console.log("Welcome", newUser);
 

  }

  return(
  <>
    <form onSubmit={ createUser }>
        <div>
            <label>Firstname: </label> 
            <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
        </div>
        <div>
            <label>Email Address: </label> 
            <input type="text" onChange={ (e) => setEmail(e.target.value) } />
        </div>
        <div>
            <label>Password: </label>
            <input type="text" onChange={ (e) => setPassword(e.target.value) } />
        </div>
        <div>
          <label>LastName:</label>
          <input type="text" onChange={ (e) => setLastName(e.target.value) }  />
        
          <label>confirmPassword:</label>
          <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
        </div>
        <div>
        <input type="submit" value="Create User" />
        </div>

    </form>
    <h2>{firstName}</h2>
    <h2>{lastName}</h2>
    <h2>{email}</h2>
    <h2>{password}</h2>
    <h2>{confirmPassword }</h2>
    </>
    );
};


export default Create