import { useContext } from "react";
import CartContext from "../context/cart/CartContext";


const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
 
  return (
    <li className=''>
      <img src={item.image} alt='' />
      <div>
        {item.name} {(`${item.price}`,"$")}
      </div>
      <button className='CartItem__button' onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;