import React, { useState } from 'react';

const Box = () => {
    const [color, setColor] = useState('');
    const [boxes, setBoxes] = useState([]);

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (color) {
            setBoxes([...boxes, color]);
            setColor('');
        }
    };

    return (
        <div>
            <h1>Color Box Generator</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Color:
                    <input
                        type="text"
                        value={color}
                        onChange={handleColorChange}
                    />
                </label>
                <button type="submit">Add Box</button>
            </form>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {boxes.map((boxColor, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: boxColor,
                            width: '100px',
                            height: '100px',
                            margin: '10px',
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Box;
