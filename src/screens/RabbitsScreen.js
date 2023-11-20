import React from 'react';

const RabbitsScreen = () => {
  const rabbitsData = [
    {
        _id: '3',
        name: 'Shero',
        category:'Rabbits',
        image: '/images/d5.jpeg',
        color: 'White',
        breed: 'Rabbits',
        age: '6 months',
        description: 'Shero is a very good, loyal animal, you want to keep in your house',
        button: 'Adopt'
      },
    // Add more rabbit data as needed
  ];

  return (
    <div className="rabbits-screen">
      <ul className="products">
        {rabbitsData.map((rabbit) => (
          <li key={rabbit._id}>
            <div className="product">
              <img className="product-image" src={rabbit.image} alt={`product-${rabbit._id}`} />
              <div className="product-name">{rabbit.name}</div>
              <div className="product-color">Colour: {rabbit.color}</div>
              <div className="product-category">Category: {rabbit.category}</div>
              <div className="product-breed">Breed: {rabbit.breed}</div>
              <div className="product-age">Age: {rabbit.age}</div>
              <div className="product-description">{rabbit.description}</div>
              <button className="adopt-button">
                <a href={`/product/${rabbit._id}`}>Adopt</a>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RabbitsScreen;