import * as React from "react";
import pokeball from "../../Images/pokeball.png";
import "./Card.css";

interface ICardProps {
  name: string;
  price: number;
}

export const Card: React.FC<ICardProps> = (props): JSX.Element => {
  return (
    <div className="card">
      <img src={pokeball} alt="Pokeball" />
      <div className="details">
        <h2>{props.name}</h2>
        <p>{props.price}</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};
