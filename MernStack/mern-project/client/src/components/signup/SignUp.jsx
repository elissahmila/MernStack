import React, { useState } from "react";
import "./SignUp.css";
import HeadingComp from "./HeadingComp";
import axios from "axios"
  import { ToastContainer, toast } from "react-toastify";
  import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { authActions } from "../../store";

const SignUp = () => {
    const dispatch = useDispatch();

  const navigate = useNavigate()
  const [Inputs, setInputs] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (
      Inputs.email === "" &&
      Inputs.userName === "" &&
      Inputs.userName === ""
    ) {
      toast.error("please enter your information");

    }
    else {
      await axios
        .post("http://localhost:1000/api/v1/register", Inputs)
        .then((response) => {
          if (response.data.message === "User Already Exists") {
                      alert(response.data.message);
          }
          else {

          sessionStorage.setItem("id", response.data.others._id);
          dispatch(authActions.register());
          
          setInputs({ email: "", userName: "", password: "" });
          navigate("/todo")
              console.log(response.data);

          }
      });
    // setInputs({ email: "", userName: "", password: "" });}
    }

  };
  return (
    <div className="signup">
      <ToastContainer />
      <div className="container"></div>
      <div className="row">
        <div className="col-lg-8 column d-flex justify-content-center align-items-center  ">
          <div className=" d-flex flex-column  width-edit  p-5">
            <input
              className="p-2 my-3"
              name="email"
              type="email"
              placeholder="Enter Your Email"
              onChange={change}
              value={Inputs.email}
            />
            <input
              className="p-2 my-3"
              name="userName"
              type="userName"
              placeholder="Enter Your User Name"
              onChange={change}
              value={Inputs.userName}
            />
            <input
              className="p-2 my-3"
              name="password"
              type="password"
              placeholder="Enter Your Password"
              onChange={change}
              value={Inputs.password}
            />
            <button className=" btn-signing p-2" onClick={submit}>
              Sign Up
            </button>
          </div>
        </div>
        <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center ">
          <HeadingComp first="Sign" secound="Up" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
