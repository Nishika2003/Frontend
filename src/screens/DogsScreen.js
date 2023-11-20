import React from 'react';

const DogsScreen = () => {
  const dogsData = [
    {
      id: '1',
      name: 'Snoopy',
      image: 'images/d1.jpeg',
      color: 'Brown & white',
      category: 'Dogs',
      breed: 'ShihTzu',
      age: '1 year',
      description: 'Snoopy is a very good, loyal animal, you want to keep in your house.',
    },
    // Add more dog data as needed
  ];

  return (
    <div className="dogs-screen">
      <ul className="products">
        {dogsData.map((dog) => (
          <li key={dog.id}>
            <div className="product">
              <img className="product-image" src={dog.image} alt="product"/>
              <div className="product-name">{dog.name}</div>
              <div className="product-color">Colour: {dog.color}</div>
              <div className="product-category">Category: {dog.category}</div>
              <div className="product-breed">Breed: {dog.breed}</div>
              <div className="product-age">Age: {dog.age}</div>
              <div className="product-description">{dog.description}</div>
              <button className="adopt-button">
                <a href={`product/${dog.id}`}>Adopt</a>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogsScreen;

