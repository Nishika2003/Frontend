// CareServicesScreen.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CareServicesScreen = () => {
  // Use an object to store selected dates for each service
  const [selectedDates, setSelectedDates] = useState({});
  const navigate = useNavigate();

  const services = [
    { name: 'Veterinary Care', description: 'Regular health checkups and medical care for your pets.' },
    { name: 'Grooming and Spa', description: 'Pamper your pets with grooming and spa services.' },
    { name: 'Dietary Consultation', description: 'Personalized dietary plans for your pets.' },
    { name: 'Pet Sitting', description: 'We will take care of your pet.' },
    // Add more services as needed
  ];

  const handleDateChange = (date, serviceName) => {
    // Update the selected date for the specific service
    setSelectedDates((prevDates) => ({
      ...prevDates,
      [serviceName]: date,
    }));
  };

  const handleBookNow = (serviceName) => {
    const serviceDate = selectedDates[serviceName];

    if (serviceDate) {
      navigate(`/services?service=${serviceName}&date=${serviceDate.toISOString()}`);
    } else {
      alert('Please choose a date before booking.');
    }
  };

  return (
    <div>
      <h1 className="carehead">Our Services</h1>
      <ul>
        {services.map((service, index) => (
          <li key={index} className="service-container">
            <div className="service-box">
              <h3 className="c2">{service.name}</h3>
              <p>{service.description}</p>
              <DatePicker
                selected={selectedDates[service.name]}
                onChange={(date) => handleDateChange(date, service.name)}
                placeholderText="Choose a Date"
                dateFormat="MMMM d, yyyy"
              />
              <button onClick={() => handleBookNow(service.name)} className="button">
                Book
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareServicesScreen;







