import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';

function RegisterScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;


  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const redirect = searchParams.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect); 
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password)); 
  }

  return (
    <div className="Form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2 className="r1">Create Pawsome Account</h2>
          </li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li>
          <li>
            <label htmlFor="name">Name</label>
            <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)} />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
          </li>
          <li>
            <label htmlFor="repassword">Re-Enter Password</label>
            <input type="repassword" id="repassword" name="repassword" onChange={(e) => setRePassword(e.target.value)} />
          </li>
          <li>
            <button type="submit" className="button">Register</button>
          </li>
          <li>Already have an account? 
          <Link to="/signin" className="buttonreg secondary text-center">Sign-In</Link>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default RegisterScreen;
