import React from 'react';

const CatsScreen = () => {
  const catsData = [
    {
      _id: '4',
      name: 'Bubble',
      category: 'Cats',
      image: '/images/d2.jpeg',
      color: 'Brown & Black',
      breed: 'Maine Coon',
      age: '1.5 years',
      description: 'Bubble is a very good, loyal animal, you want to keep in your house',
    },
    // Add more cat data as needed
  ];

  return (
    <div className="cats-screen">
      <ul className="products">
        {catsData.map((cat) => (
          <li key={cat._id}>
            <div className="product">
              <img className="product-image" src={cat.image} alt={`product-${cat._id}`} />
              <div className="product-name">{cat.name}</div>
              <div className="product-color">Colour: {cat.color}</div>
              <div className="product-category">Category: {cat.category}</div>
              <div className="product-breed">Breed: {cat.breed}</div>
              <div className="product-age">Age: {cat.age}</div>
              <div className="product-description">{cat.description}</div>
              <button className="adopt-button">
                <a href={`/product/${cat._id}`}>Adopt</a>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatsScreen;
