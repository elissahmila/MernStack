import React from 'react';
import { useParams } from 'react-router-dom';

function NumberDisplay() {
  const { number } = useParams();

  return <h1>{number}</h1>;
}

export default NumberDisplay;
