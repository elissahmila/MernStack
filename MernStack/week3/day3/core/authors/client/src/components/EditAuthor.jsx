import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const EditAuthor = () => {
  const { id } = useParams();
  const [authorName, setAuthorName] = useState('');
  const [errors, setErrors] = useState({});
  const [authorNotFoundError, setAuthorNotFoundError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/author/${id}`)
      .then((response) => {
        console.log(response.data);
        setAuthorName(response.data.name);
      })
      .catch((err) => {
        console.log(err.response);
        setAuthorNotFoundError('Author not found using that ID');
      });
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/author/${id}`, { name: authorName })
      .then((response) => {
        console.log(response);
        navigate('/');
      })
      .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  };

  return (
    <form onSubmit={submitHandler}>
      {authorNotFoundError ? (
        <h2>
          {authorNotFoundError} <Link to="/new">Click here to add author</Link>
        </h2>
      ) : null}
      <Link to="/">Home</Link>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        {errors.name ? <p>{errors.name.message}</p> : null}
      </div>
      <button type="submit" className="btn btn-primary">
        SUBMIT
      </button>
    </form>
  );
};

export default EditAuthor;
