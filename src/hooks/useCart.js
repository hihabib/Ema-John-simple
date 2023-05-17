const TAX = 7;
const UseCart = (cart) => {
    const [totalProductPrice, totalShippingCost, totalQuantity] = cart.reduce(
        (acc, next) => {
            acc[0] += next?.price * next?.quantity;
            acc[1] += next?.shipping;
            acc[2] += next?.quantity;

            return acc;
        },
        [0, 0, 0]
    );
    const totalTax = Number((totalProductPrice * (TAX / 100)).toFixed(2));
    const grandTotal = totalProductPrice + totalShippingCost + totalTax;
    return {totalQuantity,totalProductPrice,totalShippingCost,totalTax, grandTotal}
};

export default UseCart;