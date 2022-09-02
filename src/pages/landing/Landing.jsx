import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../../components/card";
import styles from "./Landing.module.css";

const Landing = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setData(response.data));
  }, []);
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          name={item.title}
          cost={item.price}
        />
      ))}
    </div>
  );
};

export default Landing;
