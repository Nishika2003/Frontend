import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import axios from 'axios';

function ProductScreen() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        const fetchedProduct = response.data;
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = async (productId) => {
    dispatch(addToCart(productId));
    navigate('/cart');
    try {
      await axios.post(`/api/users/create/${localStorage.getItem('userid')}`, {
        productID: productId,
      });
      console.log('Added to cart successfully');
    } catch (e) {
      console.error('Error adding to cart:', e);
      alert('Could not add to cart');
    }
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
                <h4>Color: {product.color}</h4>
              </li>
              <li>
                <h4>Age: {product.age}</h4>
              </li>
              <li>
                <h4>Breed: {product.breed}</h4>
              </li>
              <li>
                <h3>Description: {product.description}</h3>
              </li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>
                <button onClick={() => handleAddToCart(product._id)} className="button">
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
