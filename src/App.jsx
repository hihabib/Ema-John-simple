import Header from "./components/Header/Header";
import classes from "./App.module.css";
import Shop from "./components/Shop/Shop";
import OrderSummery from "./components/OrderSummery/OrderSummery";
import { useEffect, useState } from "react";
const App = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const handleProductSelection = (product) => {
    const newProductList = [...selectedProduct, product];
    setSelectedProduct(newProductList);
  };

  useEffect(() => {
    console.log(selectedProduct);
  }, [selectedProduct]);
  return (
    <>
      <Header />
      <div className={classes.app}>
        <Shop handleProductSelection={handleProductSelection} />
        <OrderSummery selectedProduct={selectedProduct} />
      </div>
    </>
  );
};

export default App;
