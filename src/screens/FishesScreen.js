import React from 'react';

const FishesScreen = () => {
  const fishesData = [
    {
        _id: '2',
        name: 'Max',
        category:'Fishes',
        image: '/images/d4.jpeg',
        color: 'Gold, White & Black',
        breed: 'GoldFish',
        age: '3 months',
        description: 'Max is a very good, loyal animal, you want to keep in your house',
        button: 'Adopt'
      },
    // Add more fish data as needed
  ];

  return (
    <div className="fishes-screen">
      <ul className="products">
        {fishesData.map((fish) => (
          <li key={fish._id}>
            <div className="product">
              <img className="product-image" src={fish.image} alt={`product-${fish._id}`} />
              <div className="product-name">{fish.name}</div>
              <div className="product-color">Colour: {fish.color}</div>
              <div className="product-category">Category: {fish.category}</div>
              <div className="product-breed">Breed: {fish.breed}</div>
              <div className="product-age">Age: {fish.age}</div>
              <div className="product-description">{fish.description}</div>
              <button className="adopt-button">
                <a href={`/product/${fish._id}`}>Adopt</a>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FishesScreen;