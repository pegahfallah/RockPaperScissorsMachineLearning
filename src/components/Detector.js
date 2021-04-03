import React, { useRef, useState, useEffect } from "react";
import * as tmImage from "@teachablemachine/image";
import Webcam from "react-webcam";
import Score from "./Score";
import { makeStyles } from "@material-ui/core/styles";
import Countdown from "../components/Countdown";
import styled from "styled-components";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const Text = styled.p`
  font-family: "Sniglet", cursive;
`;
export default function Detector(props) {
  const classes = useStyles();
  const webcamRef = useRef(null);
  const [pick, setPick] = useState(undefined);
  const [predictions, setPredictions] = useState([]);
  const [win, setWin] = useState("");
  const [prediction, setPrediction] = useState("");

  const success = (p) => {
    console.log("prediction" + p);
    console.log("pick" + pick);
    console.log("win" + win);

    if (pick != undefined && p != undefined) {
      if (pick === "rock" && p === "Paper") {
        setWin("YOU LOSE!");
        setPick(undefined);
      }
      if (pick === "rock" && p === "Scissors") {
        setWin("YOU WIN!");
        setPick(undefined);
      }
      if (pick === "rock" && p === "Rock") {
        setWin("DRAW!");
        setPick(undefined);
      }
      if (pick === "paper" && p === "Scissors") {
        setWin("YOU LOSE!");
        setPick(undefined);
      }
      if (pick === "paper" && p === "Rock") {
        setWin("YOU WIN!");
        setPick(undefined);
      }
      if (pick === "paper" && p === "Paper") {
        setWin("DRAW!");
        setPick(undefined);
      }
      if (pick === "scissors" && p === "Paper") {
        setWin("YOU WIN!");
        setPick(undefined);
      }
      if (pick === "scissors" && p === "Scissors") {
        setWin("DRAW!");
        setPick(undefined);
      }
      if (pick === "scissors" && p === "Rock") {
        setWin("YOU LOSE!");
        setPick(undefined);
      }
    }
  };

  // Main function
  const runCoco = async () => {
    const URL = "https://teachablemachine.withgoogle.com/models/xPIlr4aoh/";
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    const model = await tmImage.load(modelURL, metadataURL);

    setInterval(() => {
      detect(model);
    }, 90);
  };

  const detect = async (model) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const modelPrediction = await model.predict(video);
      setPredictions(modelPrediction);
    }
  };

  useEffect(() => {
    runCoco();
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div>
          <Webcam
            ref={webcamRef}
            muted={true}
            mirrored={true}
            style={{
              width: 640,
              height: 480,
            }}
          />
        </div>
        <div>
          {predictions.map(
            (prediction) =>
              prediction.probability >= 0.6 && (
                <>
                  <Text key={prediction.className}>
                    {" "}
                    {prediction.className} : {prediction.probability.toFixed(2)}{" "}
                    {props.pick != undefined
                      ? console.log(prediction.className)
                      : ""}
                  </Text>
                </>
              )
          )}
        </div>
      </div>
    </>
  );
}
