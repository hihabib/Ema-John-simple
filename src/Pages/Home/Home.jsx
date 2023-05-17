import Shop from "../../components/Shop/Shop";
import useHome from "../../hooks/useHome.js";

const App = () => {
    const {products, handleProductSelection, cart} = useHome();

    return (
        <>

                <Shop
                    products={products}
                    handleProductSelection={handleProductSelection}
                    cart={cart}
                />
        </>
    );
};

export default App;
