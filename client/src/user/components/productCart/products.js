import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import CustomDrawer from './customDrawer';
import Cart from './cart'
import '../cart.css'
import SearchBar from '../../../components/search/searchBar';

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [totalItems, setTotalItems] = useState(0);


  const fetchProductsData = () => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/products?page=${currentPage}&size=${pageSize}`)
      .then((response) => {
        setProductList(response.data.productList);
        setTotalItems(response.data.totalItems);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProductsData();
  }, [currentPage, pageSize]);

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  return (
    <>
      <div style={{ margin: '20px auto', width: '40%' }}>
        <SearchBar productList={productList} />
      </div>
      <div className="mx-5 my-2 ml-auto d-flex justify-content-end">
        <CustomDrawer productList={productList} />
      </div>
      <div className="product-container">
        {productList.map((item, id) => (
          <Cart item={item} id={id} />
        ))}
         <div className="pagination-container">
    <Pagination
      className="pagination"
      current={currentPage}
      pageSize={pageSize}
      total={totalItems}
      onChange={handlePageChange}
    />
  </div>
      </div>
    </>
  );
};

export default Products;
