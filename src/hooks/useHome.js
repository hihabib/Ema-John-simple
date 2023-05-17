import {useEffect, useState} from 'react';
import {addToDb, getShoppingCart} from "../../utilities/fakedb.js";

const UseHome = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((products) => setProducts(products));
    }, []);

    const handleProductSelection = (product) => {
        const newProductList = [...selectedProduct, product];
        setSelectedProduct(newProductList);
        addToDb(product.id);
    };

    useEffect(() => {
        const storedCartData = getShoppingCart();
        const newCartData = [];
        Object.keys(storedCartData).forEach((id) => {
            const filteredProduct = products.find((product) => product.id === id);
            if (filteredProduct) {
                filteredProduct.quantity = storedCartData[id];
            }
            newCartData.push(filteredProduct);
        });

        setCart(newCartData);
    }, [products, selectedProduct]);

    return {products, handleProductSelection, cart}
};

export default UseHome;