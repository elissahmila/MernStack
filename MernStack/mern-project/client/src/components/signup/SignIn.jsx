import React, { useState } from "react";
import "./SignUp.css";
import HeadingComp from "./HeadingComp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux"
import { authActions } from "../../store";


const SignIn = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();

  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    // if (
    //   Inputs.email === "" &&
    //   Inputs.userName === "" && 
    //   Inputs.userName === ""
    // ) {
    //   toast.error("please enter your information");

    // }
    // else {
    await axios
      .post("http://localhost:1000/api/v1/login", Inputs)
      .then((response) => {
        sessionStorage.setItem("id", response.data.others._id)
        dispatch(authActions.login())
        navigate("/todo");

        // if (response.data.message === "User Already Exists") {
        //             alert(response.data.message);
        // }
        // else {
        //                         alert(response.data.message);
        // setInputs({ email: "", userName: "", password: "" });
        // navigate("/")
        //     console.log(response.data);

        // }
      });
    // setInputs({ email: "", userName: "", password: "" });}
  };

  return (
    <div>
      {" "}
      <div className="signup">
        <div className="container"></div>
        <div className="row">
          <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center ">
            <HeadingComp first="Sign" secound="In" />
          </div>
          <div className="col-lg-8 column d-flex justify-content-center align-items-center  ">
            <div className=" d-flex flex-column  width-edit  p-5">
              <input
                className="p-2 my-3"
                name="email"
                type="email"
                value={Inputs.email}
                onChange={change}
                placeholder="Enter Your Email"
              />
              <input
                className="p-2 my-3"
                name="password"
                type="password"
                value={Inputs.password}
                onChange={change}
                placeholder="Enter Your Password"
              />
              <button className=" btn-signing p-2" onClick={submit}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
