import {getShoppingCart} from "../../utilities/fakedb.js";

const useOrderLoader = async () => {
    const fetchAllProduct = await fetch('products.json');
    const allProducts = await fetchAllProduct.json();
    const rowCartData = getShoppingCart();
    return Object.keys(rowCartData).reduce((acc, next) => {

        const product = allProducts.find(product => product.id === next);
        if(product) {
            product.quantity = rowCartData[next];
            acc.push(product)
        }
        return acc;
    }, [])
}

export default useOrderLoader