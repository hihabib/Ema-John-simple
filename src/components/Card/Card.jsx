import classes from "./Card.module.css";

export default function Card({ product, handleProductSelection }) {
  return (
    <div className={classes.card}>
      <div className={classes.cardContent}>
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Manufacturer : {product.seller}</p>
        <p>Rating : {product.ratings} start</p>
      </div>

      <button
        onClick={() => handleProductSelection(product)}
        className={classes.addToCart}
      >
        Add To Card
      </button>
    </div>
  );
}
