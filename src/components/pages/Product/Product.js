import React from "react";
import GetStarted from "../GetStarted";
import { homeObjFour } from "./ProductData";

const Product = () => {
  return (
    <>
      <GetStarted {...homeObjFour} />
    </>
  );
};

export default Product;
