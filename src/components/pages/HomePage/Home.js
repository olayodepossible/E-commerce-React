import React from "react";
import Price from "../../Price";
import GetStarted from "../GetStarted";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

const Home = () => {
  return (
    <>
      <GetStarted {...homeObjOne} />
      <GetStarted {...homeObjThree} />
      <GetStarted {...homeObjTwo} />
      <Price />
      <GetStarted {...homeObjFour} />
    </>
  );
};

export default Home;
