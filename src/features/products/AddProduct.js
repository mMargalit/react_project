import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct, addProductToServer } from "./productSlice";

const AddProduct =()=>{

    let dispatch = useDispatch();
    const { register, handleSubmit} = useForm();
    const submit = data => dispatch(addProductToServer(data));

    

    return(<>
    <form  onSubmit={handleSubmit(submit)}>
        <input placeholder="enter name"  {...register("name", {required:"you must add a name to a new product"})}/>
        <input placeholder="description" {...register("description")}/>
        <input placeholder="img" {...register("img")}/>
        <input placeholder="content" {...register("content")}/>
        <input type="number" placeholder="price" {...register("price")}/>
        <input placeholder="company" {...register("company")}/>
        <input placeholder="prodDate" {...register("prodDate")}/>
        <input value="submit" type="submit"/>
    </form>
    </>);
}

export default AddProduct;

// "id": 1,
//         "name": "חלב",
//         "description": "חלב מפוסטר 3%",
//         "imgUrl": "",
//         "content": "100 גרם",
//         "price": 5.2,
//         "isCooling": true,
//         "company": "טרה",
//         "prodDate": "10-10-2022",
//         "img"