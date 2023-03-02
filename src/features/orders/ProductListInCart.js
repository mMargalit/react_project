import { useSelector } from "react-redux";
import ProductInCart from "./ProductInCart";

const ProductListInCart = ()=>{

    let products = useSelector(state=>state.orders.productsInCart);

    return(
        <>
        <ul>
            {products.map(item=><li key={item.id}><ProductInCart item={item}/></li>)}
        </ul>
        </>
    );
}

export default ProductListInCart;