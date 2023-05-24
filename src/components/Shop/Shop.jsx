import Card from "../Card/Card";
import classes from "./Shop.module.css";
import OrderSummery from "../OrderSummery/OrderSummery.jsx";
import { Link } from "react-router-dom";

export default function Shop({
  handleProductSelection,
  products,
  cart,
  removeAllFromCart,
}) {
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
      <OrderSummery removeAllFromCart={removeAllFromCart} cart={cart}>
        <Link to="/order" className={classes.reviewOrder}>
          Order Review
        </Link>
      </OrderSummery>
    </>
  );
}
