import { ButtonCounter } from "./ButtonCounter";
import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            {count}
            <br />
            <br />
            <ButtonCounter
                label="Increment"
                onClick={handleCount}
                size="large"
                backgroundColor="#bcebe6"
                buttonStyle="counter-button--primary" />
        </div>
    )
}