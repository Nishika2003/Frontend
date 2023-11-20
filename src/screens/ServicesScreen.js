// ServicesScreen.js

import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ServicesScreen = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serviceName = queryParams.get('service');
  const date = new Date(queryParams.get('date'));
  const bookingStatus = queryParams.get('status'); // Added handling for booking status

  return (
    <div className="services-container">
      <div className="service-info">
        <h1 className="s1">Services</h1>
        <p>Service: {serviceName}</p>
        <p>Date: {date.toDateString()}</p>

        {/* Conditionally render based on the booking status */}
        {bookingStatus === 'booked' ? (
          <div>
            <p>Status: Booked</p>
            {/* Add additional information or actions for booked status */}
          </div>
        ) : (
          <div>
            {/* Add a "Confirm Booking" button */}
            <Link to="/booking">
              <button className="button7">Confirm Booking</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesScreen;






