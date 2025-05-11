import React, { useState } from "react";
import { ButtonCounter } from "./ButtonCounter";
import { Counter } from "./Counter";

export default {
  title: "Counter/Page",
  component: Counter,
  tags: ["autodocs"],
};

export const Default = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Counter>
      <ButtonCounter
        label="Increment"
        onClick={handleCount}
        size="large"
        backgroundColor="#bcebe6"
        buttonStyle="counter-button--primary"
      />
    </Counter>
  );
};
