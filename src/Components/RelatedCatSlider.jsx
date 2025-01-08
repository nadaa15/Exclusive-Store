import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import Loading from "./Loading";

export default function RelatedCatSlider({ category }) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function getRelatedProducts(category) {
    setIsLoading(true); 
    setHasError(false);

    axios
      .get(`https://dummyjson.com/products`)
      .then(({ data }) => {
        if (data?.products?.length) {
          // Filter products based on the category
          const related = data.products.filter(
            (product) => product?.category == category
          );
          setRelatedProducts(related);
        } else {
          setRelatedProducts([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching related products:", error);
        setHasError(true); 
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (category) {
      getRelatedProducts(category);
    }
  }, [category]);

  return (
    <section className="my-20">
      <div className="relative mb-6 before:absolute before:w-4 before:h-8 before:top-1/2 before:-translate-y-1/2 before:rounded-sm before:left-1 before:bg-main">
        <span className="text-main font-bold mb-8 ms-6">Related Products</span>
      </div>

      {isLoading ? (
        <Loading/>
      ) : hasError ? (
        <p className="text-center text-red-500">
          Failed to load related products.
        </p>
      ) : relatedProducts.length ? (
        <Slider {...settings}>
          {relatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              category={product.category}
              img={product.thumbnail}
              title={product.title}
              price={product.price}
              rating={product.rating}
              discount={product.discountPercentage}
            />
          ))}
        </Slider>
      ) : (
        <p className="text-center">No related products found.</p>
      )}
    </section>
  );
}
