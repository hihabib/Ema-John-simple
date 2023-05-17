import Cart from "../Cart/Cart";
import classes from "./OrderSummery.module.css";

export default function OrderSummery({ cart, removeAllFromCart, children }) {
  return (
    <div className={classes.orderSummery}>
      <h3 style={{ textAlign: "center" }}>Order Summery</h3>
        <Cart removeAllFromCart={removeAllFromCart} cart={cart}>
            {children}
        </Cart>
    </div>
  );
}
