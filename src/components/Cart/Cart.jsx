import useCart from "../../hooks/useCart.js";
import classes from "./Cart.module.css";

export default function Cart({ cart, removeAllFromCart, children }) {

    const {totalQuantity, grandTotal,totalProductPrice,totalShippingCost,totalTax} = useCart(cart);

  return (
      <>
            <div className="information">
              <div>Selected Item: {totalQuantity || 0}</div>
              <div>Total Price: ${totalProductPrice || 0}</div>
              <div>Total Shopping Charge: ${totalShippingCost || 0}</div>
              <div>Tax: ${totalTax || 0}</div>
              <h3>Grand Total: ${grandTotal || 0}</h3>
            </div>
          <button onClick={removeAllFromCart} className={classes.clearCart}>Clear Cart</button>
          {children}
      </>
  );
}
