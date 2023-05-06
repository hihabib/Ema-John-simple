import { useEffect, useState } from "react";
import Card from "../Card/Card";
import classes from "./Shop.module.css";

export default function Shop({ handleProductSelection }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <div className={classes.shop}>
      {products.map((product) => (
        <Card
          handleProductSelection={handleProductSelection}
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
