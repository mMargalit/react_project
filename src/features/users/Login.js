import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import SignUp from "./SignUp";
import { loginWithEmail } from "./userSlice";
import * as yup from 'yup';
import {TextField,Button} from '@mui/material'
import {useFormik} from 'formik';




const validationSchema = yup.object({
    email:yup
        .string('Enter Your Email')
        .email('Enter a Valid Email')
        .required('Email is Required'),
    password:yup
        .string('Enter a Password')
        .min(8,'Password should be of minimum 8 characters length')
        .required('Password is Required')
})

const Login = ()=> {

    let dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:validationSchema,
        onSubmit:(values)=>{
            console.log(values);
            dispatch(loginWithEmail(values));
        }

    })

    let [newUser,setNewUser]=useState(false);
    return(<>
    <h1>login</h1>
    {!newUser?
    <form onSubmit={formik.handleSubmit}>
        <TextField fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}/>
        <TextField fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}/>
        <Button color="primary" variant="contained" fullWidth  type="submit">
          Submit
        </Button>
    </form>:
        <SignUp/>}
        <Button color="primary" variant="contained" onClick={()=>{setNewUser(!newUser)}}>new user</Button>
    </>)
}

export default Login;