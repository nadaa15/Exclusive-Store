import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { getProducts, getProductsByCategory } from "../Redux/ProductsSlice";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function CategoryProducts() {
  const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);
      let { name } = useParams();

  useEffect(() => {
    dispatch(getProductsByCategory(name));
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <Helmet>
        <title>
          {`${name} - Shop by Category`}
        </title>
        <meta
          name="description"
          content={`Explore the latest products in the ${name} category. Find top-quality items and great deals on Exclusive.`}
        />
      </Helmet>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              id={product.id}
              category={product.category}
              img={product.thumbnail}
              title={product.title}
              price={product.price}
              rating={product.rating}
              discount={product.discountPercentage}
            />
          </div>
        ))}
      </div>
    </>
  );
}
