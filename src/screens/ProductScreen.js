import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import data from '../data';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

function ProductScreen() {
  const { products } = data;
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (productId) => {
    dispatch(addToCart(productId));
    navigate('/cart');
  };

  return (
    <div>
      <div className="back-to-result">
        <Link to={`/`}>Back</Link>
      </div>
      {product ? (
        <div className="details">
          <div className="details-image">
            <img src={product.image} alt="product" />
          </div>
          <div className="details-info">
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                <h4>{product.color}</h4>
              </li>
              <li>
                <h4>{product.age}</h4>
              </li>
              <li>
                <h4>{product.breed}</h4>
              </li>
              <li>
                <h3>{product.description}</h3>
              </li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>
              <button
                onClick={() => handleAddToCart(product._id)}
                className="button" >
                Adopt {product.name}
              </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <h1>Product not found</h1>
      )}
    </div>
  );
}

export default ProductScreen;

