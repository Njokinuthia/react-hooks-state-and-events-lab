import React , {useState} from "react";

function Item({ name, category }) {
  
  const[inCart, setInCart]=useState(false);
  const listClassName = inCart? "in-cart" : "";
  const btnClassName = inCart? "remove":"add"
  const btnLabel = inCart? "Add To Cart" : "Remove From Cart"

  function addToCartClick(){
    setInCart(inCart =>!inCart)
  }

  return (
    <li className={listClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCartClick} className={btnClassName}>{btnLabel}</button>
    </li>
  );
}

export default Item;
