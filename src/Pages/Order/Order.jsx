import OrderSummery from "../../components/OrderSummery/OrderSummery.jsx";
import classes from "./Order.module.css";
import {useLoaderData} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {removeFromDb} from "../../../utilities/fakedb.js";


const Order = () => {
    const initialCart = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    const handleCart = (id) => {
        const newCart = cart.filter(product => product.id !== id)
        setCart(newCart);
        removeFromDb(id);
    }
    return (
        <>
        <div className={classes.order}>

            {cart.map(({id, img, name, price, shipping}) => <div key={id} className={classes.orderItem}>
                <div>
                    <img src={img} alt=""/>
                    <div className={classes.itemDetails}>
                        <h3>{name}</h3>
                        <div>Price: <span className={classes.price}>${price}</span></div>
                        <div>Shopping Charge <span className={classes.price}>${shipping}</span></div>
                    </div>
                </div>
                <div className={classes.icon}>
                    <FontAwesomeIcon onClick={() => handleCart(id)} icon="fa-solid fa-trash-can" />
                </div>
            </div>)}


        </div>
            <OrderSummery cart={cart}/>
        </>
    );
};

export default Order;