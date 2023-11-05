import React, {useState, useEffect} from 'react'
import './Todo.css'
import TodoCards from './TodoCards'
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import Update from './Update';
import axios from 'axios';
  let id = sessionStorage.getItem("id");
  let toUpdateArray = [];
const Todo = () => {
  const [inputs, setinputs] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);

  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };
  const Del = async (cardid) => {
    if (id) {
      await axios
        .delete(`http://localhost:1000/api/v2/deleteTask/${cardid}`, {
          data: { id: id },
        })
        .then((response) => {
          console.log(response.data);
          toast.success("Your Task Is Deleted");
        });
    } else {
      toast.error("Please Sign Up First");
    }
    console.log(id);
  };

  //------------------------------------------------------delete hook-----------------------------------------------
  const Dis = (value) => {
    document.getElementById("todo-update").style.display = value;
  };

  //------------------------------------------------------update hook-----------------------------------------------

  const update = (value) => {
    toUpdateArray = Array[value];
  };

  //------------------------------------------------------change value-----------------------------------------------

  const change = (e) => {
    const { name, value } = e.target;
    setinputs({ ...inputs, [name]: value });
  };

  //------------------------------------------------------submit value-----------------------------------------------

  const submit = async () => {
    if (inputs.title === "" && inputs.body === "") {
      toast.error("Title Or Body Should Not Be Empty");
    } else {
      if (id) {
        await axios
          .post("http://localhost:1000/api/v2/addTask", {
            title: inputs.title,
            body: inputs.body,
            id: id,
          })
          .then((response) => {
            console.log(response);
          });
        setinputs({ title: "", body: "" });
        toast.success("Your Task is Added Successfully");
      } else {
        // setArray([...Array, inputs]);
        setinputs({ title: "", body: "" });
        // toast.success("Your Task is Added Successfully");
;
      }
    }
  };

  useEffect(
    (e) => {
      if (id) {
      }
      const fetch = async () => {
        await axios
          .get(`http://localhost:1000/api/v2/getTasks/${id}`)
          .then((response) => {
            setArray(response.data.list);
          });
      };
      fetch();
    },
    [submit]
  );

  return (
    <>
      <div className="todo">
        <ToastContainer />
        <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
          <div className="d-flex flex-column todo-inputs-div w-50 p-1">
            <input
              type="text"
              placeholder="TITLE"
              className="my-2 p-2 todo-inputs"
              style={{ borderBottom: "1px solid black" }}
              onClick={show}
              name="title"
              value={inputs.title}
              onChange={change}
            />
            <textarea
              id="textarea"
              type="text"
              placeholder="BODY"
              name="body"
              className="p-2 todo-inputs"
              value={inputs.body}
              onChange={change}
            />
          </div>
          <div className="w-50 d-flex justify-content-end">
            <button className="Main-btn p-1 px-2 my-2" onClick={submit}>
              Add
            </button>
          </div>
        </div>
        <div className="todo-body">
          <div className="container-kp">
            <div className="row ">
              {" "}
              {Array &&
                Array.map((item, index) => (
                  <div
                    className="col-lg-3 col-10 bg-successs mx-5 my-2"
                    key={index}
                  >
                    <TodoCards
                      title={item.title}
                      body={item.body}
                      id={item._id}
                      del={Del}
                      display={Dis}
                      updateId={index}
                      toBeUpdate={update}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="todo-update " id="todo-update">
          <div className="container update">
            {" "}
            <Update display={Dis} update={toUpdateArray} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo