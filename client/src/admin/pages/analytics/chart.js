import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const BarCharts = () => {

  const [productList, setProductList] = useState([]);
  const [productCount,setProductCount]=useState(0)

  const fetchProductsData = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/products`)
      .then((response) => {
        setProductList(response.data.productList)
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }

  useEffect(() => {
    fetchProductsData()
  }, [])


  const fetchProductsCount= () => {
    axios.get(`${process.env.REACT_APP_API_URL}/products/count`)
      .then((response) => {
        setProductCount(response.data)
        console.log(response.data,"@@")
      })
      .catch((error) => {
        console.error("Error fetching products count:", error);
      });
  }

  useEffect(() => {
    fetchProductsCount()
  }, [])

console.log(productList,"pro")

    const data=productList.map((item,id)=>{
      return ({
        name:item.name,
        price:item.price
      })

    })


    return (
        <>
          <div style={{display:"flex", margin:"auto", alignContent:"center", alignItems:"center"}} >
            <h3 style={{color:"cadetblue"}}>Total Products Count: {productCount}</h3>
                <BarChart
                    width={850}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" fill="#8884d8" />
                </BarChart>
          </div>
        </>
    );
};
export default BarCharts;