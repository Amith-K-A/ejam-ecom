import axios from "axios";

const getProducts = () => {
  return axios.get("https://test.ejam.com/api/recruitment/frontendtask1/products");
};

const Products = {
  getProducts,
};

export default Products;
