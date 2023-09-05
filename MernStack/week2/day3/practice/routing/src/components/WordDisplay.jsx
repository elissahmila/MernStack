import React from 'react';
import { useParams } from 'react-router-dom';

function WordDisplay() {
  const { word, textColor, bgColor } = useParams();

  const styles = {
    color: textColor || 'black',
    backgroundColor: bgColor || 'white',
  };

  return <h1 style={styles}>{word}</h1>;
}

export default WordDisplay;


