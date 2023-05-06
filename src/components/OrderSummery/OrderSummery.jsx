import classes from "./OrderSummery.module.css";

export default function OrderSummery({ selectedProduct }) {
  const totalPrice = selectedProduct.reduce((acc, next) => {
    acc = acc + next.price;
    return acc;
  }, 0);
  return (
    <div className={classes.orderSummery}>
      <h3 style={{ textAlign: "center" }}>Order Summery</h3>
      <div className="information">
        <div>Selected Item: {selectedProduct.length}</div>
        <div>Total Price: ${totalPrice}</div>
        <div>Total Shopping Charge: 0</div>
        <div>Tax: 0</div>
        <h3>Grand Total: 0</h3>
      </div>
      <button className={classes.clearCart}>Clear Cart</button>
      <button className={classes.reviewOrder}>Review Order</button>
    </div>
  );
}
