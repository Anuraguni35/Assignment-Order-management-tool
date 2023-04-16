import React, { useState } from 'react'
import "./Pagination.css"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
 
function Pagination({CurrentPage,setCurrentPage,totalNoPages}) {
    let arr=[];
    for(let i=1;i<=totalNoPages;i++){
        arr.push(i);
    }

   const changeCurrentPage=(e)=>{
     setCurrentPage(parseInt(e.target.value)) ;
   }
   const pageBackword=()=>{
    CurrentPage>1&&setCurrentPage(CurrentPage-1);
   }
   const pageForword=()=>{
    CurrentPage<totalNoPages?setCurrentPage(CurrentPage+1):setCurrentPage(totalNoPages);
   }
  return (
    <div>
        <button className='Pagination_btn_SP'onClick={()=>{setCurrentPage(1)}}><KeyboardDoubleArrowLeftIcon/></button>
        <button className='Pagination_btn' onClick={(e)=>{pageBackword()}} ><ArrowBackIosNewIcon fontSize='small'/></button>
      {arr.map((e)=>{
          return <button className={CurrentPage===e?"Pagination_btn-active":"Pagination_btn"} key={e} value={e}
          onClick={(e)=>{changeCurrentPage(e)}}>{e}</button>
      })} 
      <button className='Pagination_btn'onClick={(e)=>{pageForword()}}><ArrowForwardIosIcon fontSize='small'/></button>
      <button className='Pagination_btn_SP'onClick={()=>{setCurrentPage(totalNoPages)}}><KeyboardDoubleArrowRightIcon/></button>
    </div>
  )
}

export default Pagination