import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import {useFormik} from 'formik';
import {TextField,Button} from '@mui/material'
import { addUser } from './userSlice';

const validationSchema = yup.object({
    userName:yup
        .string('enter Your Name')
        .required('User Name is Required'),
    email:yup
        .string('Enter Your Email')
        .email('Enter a Valid Email')
        .required('Email is Required'),
    password:yup
        .string('Enter a Password')
        .min(8,'Password should be of minimum 8 characters length')
        .required('Password is Required')
})

const SignUp = ()=>{

    let dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{
            userName:'',
            email:'',
            password:''
        },
        validationSchema:validationSchema,
        onSubmit:(values)=>{
            console.log(values);
            dispatch(addUser(values));
        }

    })
    return(<>
    <form onSubmit={formik.handleSubmit}>
        <TextField fullWidth
          id="userName"
          name="userName"
          label="userName"
          value={formik.values.userName}
          onChange={formik.handleChange}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={formik.touched.userName && formik.errors.userName}/>
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
    </form>
    </>)
}

export default SignUp;


