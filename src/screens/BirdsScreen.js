import React from 'react';

const BirdsScreen = () => {
  const birdsData = [
    {
        _id: '5',
        name: 'Feathers',
        category:'Birds',
        image: '/images/d3.jpeg',
        color: 'Green',
        breed: 'SRose-ringed parakeet',
        age: '2 years',
        description: 'Feathers is a very good, loyal animal, you want to keep in your house',
        button: 'Adopt'
      },
    // Add more bird data as needed
  ];

  return (
    <div className="birds-screen">
      <ul className="products">
        {birdsData.map((bird) => (
          <li key={bird._id}>
            <div className="product">
              <img className="product-image" src={bird.image} alt={`product-${bird._id}`} />
              <div className="product-name">{bird.name}</div>
              <div className="product-color">Colour: {bird.color}</div>
              <div className="product-category">Category: {bird.category}</div>
              <div className="product-breed">Breed: {bird.breed}</div>
              <div className="product-age">Age: {bird.age}</div>
              <div className="product-description">{bird.description}</div>
              <button className="adopt-button">
                <a href={`/product/${bird._id}`}>Adopt</a>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BirdsScreen;