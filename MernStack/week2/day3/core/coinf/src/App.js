import React, { useEffect } from 'react';

function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;

        function flipCoin() {
            attempts++;
            let result = tossCoin();
            if (result === "heads") {
                headsCount++;
                if (headsCount === 5) {
                    resolve(`It took ${attempts} tries to flip five "heads"`);
                } else {
                    flipCoin();
                }
            } else {
                headsCount = 0;
                if (attempts >= 100) {
                    reject("Coin was flipped more than 100 times without getting five consecutive 'heads'");
                } else {
                    flipCoin();
                }
            }
        }

        flipCoin();
    });
}

function App() {
    useEffect(() => {
        fiveHeads()
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }, []);

    console.log("This runs immediately when the component renders.");

    return (
        <div className="App">
          
        </div>
    );
}

export default App;
