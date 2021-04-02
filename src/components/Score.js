import React, { useState, useCallback } from "react";
import styled from "styled-components";

const TextContainer = styled.div``;

const Text = styled.p`
  font-family: "Kiwi Maru", serif;
  font-size: 35px;
`;

const RandomGenerator = () => {
  const [pick, setPick] = useState(null);
  const handleOnClick = useCallback(() => {
    const pool = ["rock", "paper", "scissors"];
    setPick(pool[Math.floor(Math.random() * pool.length)]);
  }, [setPick]);

  return (
    <div>
      <button value="Click me!" onClick={handleOnClick}>
        Click me
      </button>
      <Text>{pick}</Text>
    </div>
  );
};

export default RandomGenerator;
