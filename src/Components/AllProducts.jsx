import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';
import { getProductsByPage } from '../Redux/ProductsSlice';
import Path from './Path';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactPaginate from 'react-paginate';

export default function AllProducts() {
  const dispatch = useDispatch();
  const { products, total, loading } = useSelector(
    (state) => state.products
  );

  const [currentPage, setCurrentPage] = useState(0); 
  const itemsPerPage = 20;

  let location = useLocation();
  let path = location.pathname.slice(1);
  let pathname = path.charAt(0).toUpperCase() + path.slice(1);

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setCurrentPage(selectedPage);
    dispatch(getProductsByPage(selectedPage + 1));
  };

  useEffect(() => {
    dispatch(getProductsByPage(1));
  }, []);

  if (loading) return <Loading />;
  return (
    <>
      <Helmet>
        <title>Our products - Exclusive</title>
        <meta
          name="description"
          content="Explore our wide range of products available for purchase."
        />
        <meta
          name="keywords"
          content="products, ecommerce, shop, buy, online shopping"
        />
      </Helmet>
      <div className="container">
        <Path prev={"Home"} path={pathname} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
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
        <div className="mt-12 flex justify-center">
          <ReactPaginate
            className="pagination"
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={Math.ceil(total / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            pageClassName={"page-item"}
            breakClassName={"page-item"}
            disabledClassName={"disabled"}
            forcePage={currentPage}
          />
        </div>
      </div>
    </>
  );
}
