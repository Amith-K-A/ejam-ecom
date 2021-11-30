import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/actions/cartActions";
import { connect } from "react-redux";
import Viewers from "../viewers/viewers";
import { ProductInterface } from "../../interface/product";
import "./product.scss";

const Product: React.FC<ProductInterface> = ({
  product,
  isInCart,
  addToCart,
}) => {
  const [count, setCount] = useState(1);

  return (
    <div className="product-card">
      <Link to={`/`}>
        <img src={product.imageUrl} alt="" />
      </Link>
      <div className="content">
        <h3>
          <Link to={`/`}>{product.name}</Link>
        </h3>
        <div className="heart-wrapper">
          <div className="price-name-wrapper">
            <span>
              {product.price} {product.currency}{" "}
              {product.shippingPrice ? (
                <>
                  + {product.shippingPrice} {product.currency} Shipping Charges
                </>
              ) : (
                <>+ Free shipping</>
              )}
            </span>
            <Viewers />
          </div>
        </div>
        <div className="star-wrapper"></div>
        <div className="button-wrapper">
          {!isInCart && (
            <span className="increments">
              <button
                className="card-button"
                disabled={isInCart}
                onClick={() => {
                  if (count <= 9) {
                    setCount(count + 1);
                  }
                }}
              >
                +
              </button>
              <div className="count">{count}</div>
              <button
                className="card-button"
                disabled={isInCart}
                onClick={() => {
                  if (count >= 2) {
                    setCount(count - 1);
                  }
                }}
              >
                -
              </button>
            </span>
          )}
          <button
            className="card-button"
            disabled={isInCart}
            onClick={(e) => {
              e.preventDefault();
              product.qty = count;
              addToCart(product);
            }}
          >
            {isInCart ? "Added to cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (product: any) => {
      return dispatch(addToCart(product));
    },
  };
};

const mapStateToProps = (state: any) => {
  return { cartItems: state.cart.cartItems.cartItems };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
