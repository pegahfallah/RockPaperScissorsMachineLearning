import React from "react";
import Detector from "./Detector";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import RandomGenerator from "../components/RandomGenerator";
import Countdown from "../components/Countdown";
import ReactTypingEffect from "react-typing-effect";

const GameContainer = styled.div`
  margin: auto;
  margin-top: 5%;
`;

const Container = styled.div`
  display: flex;
  background: #70a7c6;
  justify-content: space-evenly;
  align-content: center;
  flex-direction: row;
`;

const TextContainer = styled.div`
  margin: auto;
  padding-top: 5%;
  background: #70a7c6;
  font-size: 50px;
  font-family: "Sniglet", cursive;
`;

const Text = styled.p`
  font-family: "Press Start 2P", cursive;
`;

const useStyles = makeStyles((theme) => ({
  main: { height: "100vh" },
}));

export default function Game() {
  const classes = useStyles();

  return (
    <div>
      <TextContainer>
        <p>Play</p>
        <ReactTypingEffect eraseDelay="10000" text={["Rock Paper Scissors"]} />
      </TextContainer>
      <Container>
        <GameContainer>
          <div className={classes.main}>
            <Detector />
          </div>
        </GameContainer>
        <GameContainer>
          <Countdown></Countdown>
          <img src="https://media.istockphoto.com/vectors/cute-white-robot-character-vector-vector-id1187576166?k=6&m=1187576166&s=612x612&w=0&h=gTX8u5cr_hc9YcjfoGBfTUesIJAi2yNV_NDuErZwj3Y=" />
        </GameContainer>
      </Container>
    </div>
  );
}
