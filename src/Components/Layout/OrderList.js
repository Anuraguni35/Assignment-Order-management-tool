import React from 'react'
import './OrderList.css'
export default function OrderList({CurrentPageOrder}) {
  return (
    <div className='OrderList'>
      <table className='Table'>
      <thead className='TableHeader'>
             <tr className='TableRow'>
             <th>Order ID</th>   
             <th>Vendor Name</th>
             <th>Pick Up Date</th>
             <th>Status</th>
             </tr>
            </thead>
           <tbody>
            {CurrentPageOrder.map((e)=>(
             <tr className='TableRow' key={e.orderId}>
              <td>{e.orderId}</td>
              <td>{e.vendorName}</td>
              <td>{e.pickupDate}</td>
              <td>{e.status}</td>
             </tr>
            ))}
           </tbody>
      </table>
    </div>
  )
}
