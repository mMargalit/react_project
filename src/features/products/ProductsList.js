import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllProducts} from "./productSlice";
import Product from "./Product";


const ProductsList = () => {
    let products = useSelector(state=>state.products.productsArr);
    let status = useSelector(state=>state.products.status);
    let dispatch = useDispatch();
    useEffect(()=>{
        if(status==='idle')
            dispatch(fetchAllProducts());
    },[])
    return(
        <>
        <ul style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",gap:"15px",listStyleType: "none"}}>
            {products.map(item=><li key={item.id}><Product item={item}/></li>)}
        </ul>
        </>
    );
}

export default ProductsList;