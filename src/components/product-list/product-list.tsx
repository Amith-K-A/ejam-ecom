import React from "react";
import Product from "../product/product";
import "./product-list.scss";
import { connect } from "react-redux";
import { ProductListInterface, Product as ProductInterface } from "../../interface/product";

const ProductList: React.FC<ProductListInterface> = ({
  products,
  cartItems,
}) => {
  const isInCart = (product: ProductInterface) => {
    let disabled = false;
    cartItems?.map((item: any) => {
      if (item.id === product.id) {
        disabled = true;
      }
    });
    return disabled;
  };

  return (
    <>
      <div className={"products-items"}>
        {products?.map((product: ProductInterface, index: number) => {
          return (
            <Product
              product={product}
              key={index}
              isInCart={isInCart(product)}
            />
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return { cartItems: state.cart.cartItems };
};

export default connect(mapStateToProps)(ProductList);
