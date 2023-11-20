import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register, signin } from '../actions/userActions';

function SigninScreen(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const redirect = searchParams.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);
  

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password)); 
    if (!userSignin.error) {
      navigate('/');
    }
  };


  return (
    <div className="Form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2 className="s1">Sign-In to Pawsome</h2>
          </li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>The email or password doesn't exist. Try creating an account!</div>}
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
            <button type="submit" className="button">Sign in</button>
          </li>
          <li>New to Pawsome?</li>
          <li>
          <Link to={redirect === "/" ? "/register" : `/register?redirect=${redirect}`} className="buttonreg secondary text-center">Create your Pawsome account</Link>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default SigninScreen;

