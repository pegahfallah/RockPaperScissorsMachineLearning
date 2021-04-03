import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import RandomGenerator from "./RandomGenerator";
import Detector from "./Detector";

const TimeContainer = styled.div`
  font-family: "Press Start 2P", cursive;
  font-size: 30px;
  margin: 24px;
  color: orange;
`;

const Text = styled.div`
  font-family: "Press Start 2P", cursive;
  font-size: 30px;
  margin: 24px;
  color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Robot = styled.div``;
const GameSection = styled.div`
  width: 40%;
`;

const Button = styled.button`
  border-radius: 25px;
  width: 200px;
  height: 35px;
  border: none;
  padding: 8px;
  font-family: "Press Start 2P", cursive;
`;
const Score = (props) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [pick, setPick] = useState("");
  const [predictions, setPredictions] = useState("");
  useEffect(() => {
    setPick("pick" + props.pick);
    setPredictions("prediction" + props.prediction);
  }, [props.pick, props.prediction]);

  const success = () => {
    console.log(predictions);
    console.log(pick);

    // if (props.pick != undefined && props.prediction != undefined) {
    //   if (props.pick === "rock" && props.prediction === "Paper") {
    //     alert("YOU LOSE!");
    //   }
    //   if (props.pick === "rock" && props.prediction === "Scissors") {
    //     alert("YOU WIN!");
    //   }
    //   if (props.pick === "rock" && props.prediction === "Rock") {
    //     alert("DRAW!");
    //   }
    //   if (props.pick === "paper" && props.prediction === "Scissors") {
    //     alert("YOU LOSE!");
    //   }
    //   if (props.pick === "paper" && props.prediction === "Rock") {
    //     alert("YOU WIN!");
    //   }
    //   if (props.pick === "paper" && props.prediction === "Paper") {
    //     alert("DRAW!");
    //   }
    //   if (props.pick === "scissors" && props.prediction === "Paper") {
    //     alert("YOU WIN!");
    //   }
    //   if (props.pick === "scissors" && props.prediction === "Scissors") {
    //     alert("DRAW!");
    //   }
    //   if (props.pick === "scissors" && props.prediction === "Rock") {
    //     alert("YOU LOSE!");
    //   }
    // }
  };

  return (
    <>
      <Container></Container>
      {/* {success()} */}
    </>
  );
};

export default Score;
