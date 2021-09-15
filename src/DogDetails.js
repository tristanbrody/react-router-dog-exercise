import React from "react";
import { useParams } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.filter(d => d.name === name);
  console.log(dog[0]);
  const { dogName, src } = dog[0];
  return <img alt="dog" src={src}></img>;
}

export default DogDetails;
