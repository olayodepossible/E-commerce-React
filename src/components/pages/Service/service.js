import React from "react";
import Price from "../../Price";
import GetStarted from "../GetStarted";
import { homeObjOne } from "./ServiceData";

const Service = () => {
  return (
    <>
      <Price />
      <GetStarted {...homeObjOne} />
    </>
  );
};

export default Service;
