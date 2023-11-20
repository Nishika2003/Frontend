import React from 'react';

const OthersScreen = () => {
  const othersData = [
    {
        _id: '6',
        name: 'Luna',
        category:'Other',
        image: '/images/d6.jpeg',
        color: 'Golden Brown & White',
        breed: 'Syrian Hamster',
        age: '10 months',
        description: 'Luna is a very good, loyal animal, you want to keep in your house',
        button: 'Adopt'
      },
    // Add more other data as needed
  ];

  return (
    <div className="others-screen">
      <ul className="products">
        {othersData.map((other) => (
          <li key={other._id}>
            <div className="product">
              <img className="product-image" src={other.image} alt={`product-${other._id}`} />
              <div className="product-name">{other.name}</div>
              <div className="product-color">Colour: {other.color}</div>
              <div className="product-category">Category: {other.category}</div>
              <div className="product-breed">Breed: {other.breed}</div>
              <div className="product-age">Age: {other.age}</div>
              <div className="product-description">{other.description}</div>
              <button className="adopt-button">
                <a href={`/product/${other._id}`}>Adopt</a>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OthersScreen;