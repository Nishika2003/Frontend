import React, { useState } from 'react';

const BookingScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    city: '',
    pincode: '',
    country: '',
  });

  const [bookingStatus, setBookingStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For demonstration purposes, log the form data
    console.log('Form Data:', formData);

    // Simulate a successful booking
    // You can replace this with actual logic to submit data to the server
    setBookingStatus('successful');
  };

  return (
    <div className="Form">
          <div className="form-container">
          <h1 className="b1">Booking</h1>
          <p>To proceed furthur, enter the details</p>

          {/* Conditionally render based on the booking status */}
          {bookingStatus === 'successful' ? (
            <div className="booking-success">
              <p className="i1">Booking Successful!</p>
              {/* Add additional information or actions for successful booking */}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </label>

              <label>
                Phone Number:
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
              </label>

              <label>
                E-mail ID:
                <input type="text" name="email" value={formData.email} onChange={handleChange} required />
              </label>

              <label>
                Address:
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
              </label>

              <label>
                City:
                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
              </label>

              <label>
                Pincode:
                <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
              </label>

              <label>
                Country:
                <input type="text" name="country" value={formData.country} onChange={handleChange} required />
              </label>

              <button type="submit" className="button8">Confirm</button>
            </form>
          )}
        </div>

    </div>
    
  );
};

export default BookingScreen;




