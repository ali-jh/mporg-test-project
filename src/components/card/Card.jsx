import React from 'react';
import styles from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={styles.container}>
        <img src={props.image} alt='image'/>
        <h3>{props.name}</h3>
        <p>{props.cost}</p>
        </div>
    );
};

export default Card;