import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <a className={styles.container} href={`/details/${props.id}`}>
      <img src={props.image} alt="image" />
      <h3>{props.name}</h3>
      <p>{props.cost}</p>
    </a>
  );
};

export default Card;
