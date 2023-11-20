import React from 'react';
import CheckoutSteps from '../components/CheckoutSteps';
import { Link } from 'react-router-dom';

function SuccessScreen() {

  return (
    <div>
      <CheckoutSteps step1 step2 step3 />
      <div className="back-to-result">
        <Link to={`/`}>Back</Link>
      </div>
      <div className="success">
          <div>
            <h2>Your pet will be in your house soon!</h2>
          </div>
        </div>
      </div>
  );
}

export default SuccessScreen;
