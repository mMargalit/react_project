import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../orders/orderSlice";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



const Product=({item})=>{

    let dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return(<>
    <ImageListItem key={item.id} >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
            subtitle={<span>by: {item.company}</span>}
            position="below"
          />
          <input type="button" value="add to cart" onClick={()=>dispatch(addToCart(item))}/>
        </ImageListItem>
    </>)
}
export default Product;