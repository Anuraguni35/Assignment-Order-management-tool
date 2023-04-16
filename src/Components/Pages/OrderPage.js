import React, { useEffect, useState } from 'react'
import SearchBar from '../Layout/SearchBar.js'
import './OrderPage.css'
import OrderList from '../Layout/OrderList.js'
import axios from 'axios'
import Pagination from '../Layout/Pagination.js'
function OrderPage() {
  const [SearchResult,setSearchResult]=useState("")
  const [orderList,setOrderList]=useState([]);
  const [CurrentPage,setCurrentPage]=useState(1);
  const [orderPerPage,setOrderPerPage]=useState(10);
  const [totalNoPages,setTotalNoPages]=useState();
  const [CurrentOrderList,setCurrentOrderList]=useState([]);
  useEffect(()=>{
    getListofOrders(); 
  },[])
  
  useEffect(()=>{
   if(SearchResult){
    let SearchArr=orderList;
    let data=SearchArr.filter((e)=>{
      return e.orderId.includes(SearchResult)||e.vendorName.toLowerCase().includes(SearchResult)||e.pickupDate.toLowerCase().includes(SearchResult)||e.status.toLowerCase().includes(SearchResult)
    })
    setCurrentOrderList(data);
    setTotalNoPages(Math.ceil(data.length/orderPerPage));
   }else{
    let data=orderList
    setCurrentOrderList(data);
    setTotalNoPages(Math.ceil(data.length/orderPerPage));
   }
  },[SearchResult])

  const getListofOrders=async()=>{
   let data=await axios.get('https://146aa412-6f26-4dc1-b000-3853313280c9.mock.pstmn.io');
   setOrderList(data.data);
   setTotalNoPages(Math.ceil(data.data.length/orderPerPage));
   setCurrentOrderList(data.data);
  }
   
      let IndexOfLastOrder= CurrentPage*orderPerPage;
      let IndexOfFirstOrder= IndexOfLastOrder-orderPerPage;
      let CurrentPageOrder=CurrentOrderList.slice(IndexOfFirstOrder,IndexOfLastOrder);
  return (
    <div className="orderPage">
    <SearchBar SearchResult={SearchResult} setSearchResult={setSearchResult}/>
    <OrderList CurrentPageOrder={CurrentPageOrder}/>
    <Pagination CurrentPage={CurrentPage} setCurrentPage={setCurrentPage} totalNoPages={totalNoPages}/>
    </div>
  )
}

export default OrderPage
