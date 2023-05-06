import Cart from "../Cart/Cart";
import classes from "./OrderSummery.module.css";

export default function OrderSummery({ selectedProduct }) {
  return (
    <div className={classes.orderSummery}>
      <h3 style={{ textAlign: "center" }}>Order Summery</h3>
      <Cart selectedProduct={selectedProduct} />
      <button className={classes.clearCart}>Clear Cart</button>
      <button className={classes.reviewOrder}>Review Order</button>
    </div>
  );
}
