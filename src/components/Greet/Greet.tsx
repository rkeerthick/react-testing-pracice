import React from "react";
import { greetProps } from "./Greet.types";

const Greet = ({ name }: greetProps) => {
  return <div>Greet {name ? name : "Guest"}</div>;
};

export default Greet;
