import { useDispatch } from "react-redux";
import { addToCart , removeFromCart,removeOne} from "./orderSlice";

const ProductInCart = ({item}) =>{
    let dispatch = useDispatch();
    return(
        <>
            <div><h1>{item.id}</h1><p>{item.qty}</p>
            <input type="button" value="+" onClick={()=>{dispatch(addToCart(item))}}/>
            <input type="button" value="-" onClick={()=>{dispatch(removeOne(item))}}/>
            <input type="button" value="remove from cart" onClick={()=>{dispatch(removeFromCart(item))}}/>


            </div>
        </>
    );
}

export default ProductInCart;