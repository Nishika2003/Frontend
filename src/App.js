import React ,{useEffect} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import { BrowserRouter, Route, Routes , Link } from 'react-router-dom';
import CartScreen from './screens/CartScreen.js';
import SigninScreen from './screens/SigninScreen.js';
import { useSelector ,useDispatch} from 'react-redux';
import RegisterScreen from './screens/RegisterScreen.js';
import ShippingScreen from './screens/ShippingScreen.js';
import SuccessScreen from './screens/SuccessScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import DogsScreen from './screens/DogsScreen.js';
import CareServicesScreen from './screens/CareServicesScreen.js';
import ServicesScreen from './screens/ServicesScreen.js';
import BookingScreen from './screens/BookingScreen.js';
import CatsScreen from './screens/CatsScreen.js';
import FishesScreen from './screens/FishesScreen.js';
import BirdsScreen from './screens/BirdsScreen.js';
import RabbitsScreen from './screens/RabbitsScreen.js';
import OthersScreen from './screens/OthersScreen.js';
import { userSigninReducer } from './reducers/userReducers.js';
import { USER_SIGNIN_SUCCESS } from './constants/userConstants.js';

function App() {

  const dispatch = useDispatch();
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  
  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      const parsedUserInfo = JSON.parse(storedUserInfo);
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: parsedUserInfo });
    }
  }, [dispatch]);
  
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  };
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <Link to="/">Pawsome</Link>
        </div>
        <div className="header-links">
            <Link to="/care-services">Care Services</Link>
            <Link to="/cart">Adoption</Link>
            {
              userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                <Link to="/signin">Sign In</Link>  
            }   
        </div>
      </header>
      <aside className="sidebar">
        <h3 className="p1">Pet Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
            <Link to="/dogs">Dogs</Link>
          </li>
          <li>
          <Link to="/cats">Cats</Link>
          </li>
          <li>
          <Link to="/fishes">Fishes</Link>
          </li>
          <li>
          <Link to="/birds">Birds</Link>
          </li>
          <li>
          <Link to="/rabbits">Rabbits</Link>
          </li>
          <li>
          <Link to="/others">Others</Link>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
        <Routes>
        <Route path= "/signin" element={<SigninScreen/>} />
        <Route path= "/success" element={<SuccessScreen/>} />
        <Route path= "/shipping" element={<ShippingScreen/>} />
        <Route path= "/care-services" element={<CareServicesScreen/>} />
        <Route path= "/services" element={<ServicesScreen/>} />
        <Route path= "/profile" element={<ProfileScreen/>} />
        <Route path= "/booking" element={<BookingScreen/>} />
        <Route path= "/register" element={<RegisterScreen/>} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/cart/:id?" element={<CartScreen/>} />
        <Route path="/dogs" element={<DogsScreen />} />
        <Route path="/cats" element={<CatsScreen />} />
        <Route path="/fishes" element={<FishesScreen />} />
        <Route path="/birds" element={<BirdsScreen />} />
        <Route path="/rabbits" element={<RabbitsScreen />} />
        <Route path="/others" element={<OthersScreen />} />
        <Route path="/" element={<HomeScreen />} />
        </Routes>
        </div>
      </main>
      <footer className="footer">
        MERN PROJECT
      </footer>
    </div> 
    </BrowserRouter> 
  );
}
export default App;
