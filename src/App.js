import logo from './logo.svg';
import './App.css';
import  ProductsList from './features/products/ProductsList';
import ProductListInCart from './features/orders/ProductListInCart';
import AddProduct from './features/products/AddProduct';
import SignUp from './features/users/SignUp';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllUsers } from './features/users/userSlice';
import Login from './features/users/Login';
import ResponsiveAppBar from './features/navbar/ResponsiveAppBar';

function App() {
  
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Login/>

      <ProductsList/>
      <ProductListInCart/>
      <AddProduct/>
    </div>
  );
}

export default App;
