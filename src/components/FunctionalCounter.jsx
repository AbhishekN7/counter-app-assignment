import React, { useState } from "react";
import FunctionalButton from "./FunctionalButton";

function FunctionalCounter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            alert("You cannot decrement below 0");
        }
    };

    const reset = () => {
        setCount(0);
        alert("Count Reset Successful!!");
    }

    return (
        <div className="main-wrap">
            <p className="main-heading">Counter Application Using Functional Components:</p>
            <p className="count-heading">Count: {count}</p>
            <div className="btn-wrap">
                <FunctionalButton functionType={increment} type={"Increment"} />
                <FunctionalButton functionType={decrement} type={"Decrement"} />
            </div>
            <FunctionalButton functionType={reset} type={"Reset"} />
        </div>
    );
}

export default FunctionalCounter;
