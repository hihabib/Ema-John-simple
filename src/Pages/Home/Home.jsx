import Shop from "../../components/Shop/Shop";
import useHome from "../../hooks/useHome.js";

const App = () => {
  const { products, handleProductSelection, cart, removeAllFromCart } =
    useHome();

  return (
    <>
      <Shop
        products={products}
        removeAllFromCart={removeAllFromCart}
        handleProductSelection={handleProductSelection}
        cart={cart}
      />
    </>
  );
};

export default App;
