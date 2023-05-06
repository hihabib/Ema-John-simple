const TAX = 7;
export default function Cart({ selectedProduct }) {
  const [totalProductPrice, totalShippingCost] = selectedProduct.reduce(
    (acc, next) => {
      acc[0] = acc[0] + next.price;
      acc[1] = acc[1] + next.shipping;

      return acc;
    },
    [0, 0]
  );
  const totalTax = Number((totalProductPrice * (TAX / 100)).toFixed(2));
  const grandTotal = totalProductPrice + totalShippingCost + totalTax;

  return (
    <div className="information">
      <div>Selected Item: {selectedProduct.length}</div>
      <div>Total Price: ${totalProductPrice.toFixed(2)}</div>
      <div>Total Shopping Charge: ${totalShippingCost.toFixed(2)}</div>
      <div>Tax: ${totalTax.toFixed(2)}</div>
      <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
    </div>
  );
}
