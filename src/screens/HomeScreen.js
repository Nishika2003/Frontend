import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import data from '../data';

function HomeScreen() {
  const { products } = data;
  const navigate = useNavigate();
  //backend api call
  // const navigate = useNavigate();
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       // const userId = localStorage.getItem('userid');
  //       const response = await axios.get(`/api/users/show/`);
  //       const fetchedProducts = response.data;
  //       console.log(response.data);
  //       // Update state with the fetched products
  //       setProducts(fetchedProducts);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);
  //till here
  
  return (
    <ul className="products rounded">
      {products.map((product) => (
        <li key={product._id}>
          <div className="product d-flex justify-content-center px-5 my-3 gap-1">
            <img className=" product-image" src={product.image} alt="product" />
            <h2 className=" m-3 product-name">{product.name}</h2>
            <p className=" product-color">Color: {product.color}</p>
            <p className=" product-category">Category: {product.category}</p>
            <p className=" product-breed">Breed: {product.breed}</p>
            <p className=" product-age">Age: {product.age}</p>
            <p className="product-description">Description: {product.description}</p>
            <button
              className="adopt-button"
              onClick={() => navigate(`/product/${product._id}`)}
            >
              <Link to={`/product/${product._id}`} className="adopt-button">
                Adopt
              </Link>
            </button>
            <br />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default HomeScreen;
