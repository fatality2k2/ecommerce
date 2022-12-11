import React from "react";
import Banners from "./banners";
import { About } from "./About";
import { Essentials } from "./essentials";
import Bestsellers from "./Bestsellers";
const content1 = () => {
  return (
    <div>
      <Banners />
      <Bestsellers />
      <Essentials />
      <About />
    </div>
  );
};

export default content1;
