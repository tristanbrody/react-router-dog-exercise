import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return dogs.map(dog => {
    return (
      <div>
        <h4>
          <Link exact to={dog.link}>
            {dog.name}
          </Link>
        </h4>
        <img src={dog.src} alt="dog"></img>
      </div>
    );
  });
}

export default DogList;
