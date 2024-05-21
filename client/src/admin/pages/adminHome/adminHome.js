import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SearchBar from '../../../components/search/searchBar'
import MySidebar from '../../components/sidebar/sidebar'
import Widget from '../../components/widget/widget'
import { Pagination } from 'antd';
import './adminHome.css'

const AdminHome = () => {

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false)
  const [query,setQuery]=useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [totalItems, setTotalItems] = useState(0);

  const fetchProductsData = () => {
    setLoading(true)
    axios.get(`${process.env.REACT_APP_API_URL}/products?q=${query}&page=${currentPage}&size=${pageSize}`)
      .then((response) => {
        setTotalItems(response.data.totalItems);
        setProductList(response.data.productList);
      });
    setLoading(false)
  }

  useEffect(() => {
    fetchProductsData()
  }, [currentPage, pageSize,query])

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };


  return (
    <>
      <div className='home' style={{ display: "flex" }}>
        <div style={{ width: "25%" }}>
          <MySidebar />
        </div>
        <div style={{ display: "flex", margin:"10px", flexDirection: "column" }}>
  <div style={{marginBottom:"20px", width:"50%"}}>
    <SearchBar productList={productList} />
  </div>
  <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
    {productList.map((item, id) => {
      return <Widget key={id} item={item} fetchProductsData={fetchProductsData} />;
    })}
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
</div>
      </div>
    </>
  )
}

export default AdminHome