import Card from "../Card/Card";
import classes from "./Shop.module.css";
import OrderSummery from "../OrderSummery/OrderSummery.jsx";

export default function Shop({ handleProductSelection, products, cart }) {
  return (
      <>
    <div className={classes.shop}>
      {products.map((product) => (
        <Card
          handleProductSelection={handleProductSelection}
          key={product.id}
          product={product}
        />
      ))}
    </div>
        <OrderSummery cart={cart} />
      </>
  );
}
