import React, { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function ShippingScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [country, setCountry] = useState('');



  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping(address, city, pinCode, country)); 
    navigate('/success');
  }

  return (
    <div>
      <CheckoutSteps step1 step2 ></CheckoutSteps>
        <div className="Form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Shipping</h2>
            </li>
            <li>
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)} />
            </li>

            <li>
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)} />
            </li>

            <li>
              <label htmlFor="pinCode">Pin Code</label>
              <input type="text" name="pinCode" id="pinCode" onChange={(e) => setPinCode(e.target.value)} />
            </li>

            <li>
              <label htmlFor="country">Country</label>
              <input type="text" name="country" id="country" onChange={(e) => setCountry(e.target.value)} />
            </li>
            
            <li>
              <button type="submit" className="button6">Continue</button>
            </li>
            
          </ul>
        </form>
      </div>
    </div>
  );
}

export default ShippingScreen;