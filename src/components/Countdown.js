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
const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [pick, setPick] = useState(false);

  const play = () => {
    setTimeLeft(5);
    setPick(false);
  };
  useEffect(() => {
    if (timeLeft === 0) {
      setPick(true);
      setTimeLeft(null);
    }

    if (pick === true) {
      const pool = ["rock", "paper", "scissors"];
      setPick(pool[Math.floor(Math.random() * pool.length)]);
    }

    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // return () => ;

    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft, setPick]);

  return (
    <>
      <Container>
        <GameSection>
          <Detector pick={pick}></Detector>
        </GameSection>
        <GameSection>
          <Robot>
            <TimeContainer> {timeLeft} </TimeContainer>
            <Button onClick={() => play()}>Click to Play</Button>
            <Text> {pick} </Text>
            <img src="https://media.istockphoto.com/vectors/cute-white-robot-character-vector-vector-id1187576166?k=6&m=1187576166&s=612x612&w=0&h=gTX8u5cr_hc9YcjfoGBfTUesIJAi2yNV_NDuErZwj3Y=" />
          </Robot>
        </GameSection>
      </Container>
    </>
  );
};

export default Countdown;
