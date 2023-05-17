import useCart from "../../hooks/useCart.js";

export default function Cart({ cart }) {

    const {totalQuantity, grandTotal,totalProductPrice,totalShippingCost,totalTax} = useCart(cart);

  return (
    <div className="information">
      <div>Selected Item: {totalQuantity || 0}</div>
      <div>Total Price: ${totalProductPrice || 0}</div>
      <div>Total Shopping Charge: ${totalShippingCost || 0}</div>
      <div>Tax: ${totalTax || 0}</div>
      <h3>Grand Total: ${grandTotal || 0}</h3>
    </div>
  );
}
