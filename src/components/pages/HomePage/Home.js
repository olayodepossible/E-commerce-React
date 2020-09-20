import React from "react";
import GetStarted from "../GetStarted";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

const Home = () => {
  return (
    <>
      <GetStarted {...homeObjOne} />
      <GetStarted {...homeObjThree} />
      <GetStarted {...homeObjTwo} />
      <GetStarted {...homeObjFour} />
    </>
  );
};

export default Home;
