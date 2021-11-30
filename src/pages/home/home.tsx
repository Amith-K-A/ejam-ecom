import React from "react";
import useProducts from "../../hooks/useProducts";
import ProductList from "../../components/product-list/product-list";
import Loader from "../../components/loader/loader";
import "./home.scss";

const Home = () => {
  const { loading, products } = useProducts();

  if (loading) {
    return <Loader />;
  }

  return (
    <section>
      <div className="category-wrapper"></div>
      <ProductList products={products} />
    </section>
  );
};

export default Home;
