import React, { useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


function CartScreen(props) {
  const cart = useSelector((state) => state.cart);
  console.log('Cart State:', cart);

  const { cartItems } = cart;
  const { id } = useParams();
  const productId = id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  /////ADDING NOWWW
 console.log("id:" + localStorage.getItem("userid"));
  
  
  ////////
  
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
    try{
      axios.delete(`api/users/delete-task/` + localStorage.getItem("userid")+ "/" + productId + "/")
      .then((res)=>{
        if(res.status === 200){
          alert("Deleted successfully");
        }
      }).catch((e)=> alert(e));
    }
    catch(e){
      alert(e);
    }
   
  }
  const handleAddToCart = async (productId) => {
    dispatch(addToCart(productId));
    navigate('/cart');
  };
  
  useEffect(() => {
    if (productId) {
      handleAddToCart(productId); 
    }
  }, [productId, dispatch]);
  
  const navigate1 = useNavigate();
  
  const checkoutHandler = () => {
    if (userInfo) {
      navigate1("/shipping");
    } else {
      navigate1("/signin?redirect=shipping");
    }
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/api/users/show/` + localStorage.getItem("userid"));
        const fetchedProducts = response.data.cart;
        console.log(response.data.cart);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);
  
  return (
    <div className="cart">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Your Favourite Pets</h3>
            <div>A pet never lies about love</div>
          </li>
          {cartItems.length === 0 ? (
            <div>You don't have any Favourite Pets</div>
          ) : (
            cartItems.map((item) => (
              <li> 
                <div className = "cart-image">
                   <img src={item.image} alt="product" />
                </div>
                <div key={item._id}>
                <div className="cart-name">
                  <div>{item.name}</div>
                </div>
                <div className="cart-status">
                  <div>Vaccinated</div>
                  <button type="button1" className="delbutton" onClick={() => removeFromCartHandler(item.product)}>
                    Delete
                  </button>
                </div>
                
              </div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="cart-action">
        <h3 className="f1"> One more step to giving pet a better life, thanks to you! </h3>
        <p>Total pets you want to adopt: {cartItems.length}</p>
      <button onClick={checkoutHandler} className="button2" disabled={cartItems.length===0}>
        Click here to adopt
      </button>
      </div>
    </div>
  );
}

export default CartScreen;