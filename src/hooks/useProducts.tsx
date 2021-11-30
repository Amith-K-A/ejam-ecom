import { useEffect, useState, useCallback } from "react";
import Products from "../api/products";

interface UseProducts {
  error?: any;
  loading: boolean;
  products?: any;
  refreshProducts(products?: any): void;
}

const useProducts = (): UseProducts => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [products, setProducts] = useState<any>();


  const refreshProducts = useCallback(
    (products?: any) => {
      if (products) {
        setProducts(products);
        return products;
      }


        setLoading(true);
        return Products.getProducts()
          .then(products => {
            setProducts(products.data.products);
            setError(undefined);
            setLoading(false);
          })
          .catch(error => {
            setError(error);
            setLoading(false);
          });
    },
    [],
  );

  useEffect(() => {
    refreshProducts();
  }, [refreshProducts]);

  return { loading, error, products, refreshProducts };
};

export default useProducts;