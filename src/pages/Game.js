import React from "react";
import Detector from "../components/Detector";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import RandomGenerator from "../components/RandomGenerator";
import Countdown from "../components/Countdown";
import ReactTypingEffect from "react-typing-effect";

const GameContainer = styled.div`
  margin: auto;
`;

const Container = styled.div`
  margin-left: 10%;
  width: 100%;
`;

const TextContainer = styled.div`
  margin: auto;
  padding-top: 2%;
  margin-bottom: 5%;
  background: #70a7c6;
  font-size: 50px;
  font-family: "Sniglet", cursive;
  height: 20%;
`;

const Text = styled.p`
  font-family: "Press Start 2P", cursive;
`;

const useStyles = makeStyles((theme) => ({}));

export default function Game() {
  const classes = useStyles();

  return (
    <GameContainer>
      <TextContainer>
        <p>Play</p>
        <ReactTypingEffect eraseDelay="10000" text={["Rock Paper Scissors"]} />
      </TextContainer>
      <Container>
        <Countdown></Countdown>
      </Container>
    </GameContainer>
  );
}
