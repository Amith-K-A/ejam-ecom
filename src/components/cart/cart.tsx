import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./cart.scss";
import { removeFromCart } from "../../store/actions/cartActions";
import { CartInterface } from "../../interface/cart";
import { Product } from "../../interface/product";

const Cart: React.FC<CartInterface> = ({
  cartItems,
  removeFromCart,
  totalPrice,
}) => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="bag">
        <span onClick={handleClick}>
          <div className="header__option">
            <span>
              <FontAwesomeIcon icon={faShoppingBag} size="lg" />
            </span>
            {cartItems.length > 0 && (
              <span className="header__basketCount">{cartItems.length}</span>
            )}
          </div>
        </span>
      </nav>

      {open && (
        <div className="container">
          <div className="shopping-cart">
            {cartItems.length > 0 && (
              <div className="shopping-cart-header">
                <span className="badge">{cartItems.length}</span>
                <div className="shopping-cart-total">
                  <span className="lighter-text">Total:</span>
                  {<span className="main-color-text">{totalPrice} $</span>}
                </div>
              </div>
            )}
            {cartItems.length > 0 ? (
              cartItems.map((item: Product) => {
                return (
                  <div className="shopping-cart-items">
                    <span className="clearfix">
                      <img src={item.imageUrl} alt="item1" />
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">
                        {item.price + item.shippingPrice} {item.currency}
                      </span>
                      <span className="item-quantity">
                        Quantity: {item.qty}
                      </span>
                      <button
                        className="card-button"
                        onClick={() => removeFromCart(item)}
                      >
                        Remove from cart
                      </button>
                    </span>
                  </div>
                );
              })
            ) : (
              <div className="empty">Nothing In the cart</div>
            )}

            {cartItems.length > 0 && (
              <button
                className="card-button"
                onClick={() => {
                  history.push("/checkout");
                  setOpen(false);
                }}
              >
                Checkout
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cartItems: state.cart.cartItems,
    totalPrice: state.cart.totalPrice,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    removeFromCart: (product: Product) => {
      return dispatch(removeFromCart(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
