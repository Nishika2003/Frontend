import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

function ProfileScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin');
    }
  }, [userInfo, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    dispatch(logout());
    navigate('/');
  };
  

  return (
    <div className="profile">
      <div className="profile-info">
        <div>
          <h2>User Profile</h2>
        </div>
        {userInfo ? (
          <ul>
            <li>
              <strong>Name:</strong> {userInfo.name}
            </li>
            <li>
              <strong>Email:</strong> {userInfo.email}
            </li>
            <li>
              <button onClick={handleLogout} className="button10">
                Logout
              </button>
            </li>
          </ul>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default ProfileScreen;
