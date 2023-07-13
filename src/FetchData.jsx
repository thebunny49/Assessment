import React from 'react'
import branch1 from './data/branch1.json'
import branch2 from './data/branch2.json'
import branch3 from './data/branch3.json'
import './FetchData.css'


function FetchData() {
 
 
  return (
    <>
    
    <div className="main" style={{ color:'white'}}>
      <div className="main1">
        <h1>Product Name</h1>
      </div>
      <div className="main1">
        <h1>Total Revenue</h1>
      </div>
    </div>
   
   
       {branch1.products.map((data,i) =>(


<table className='main' key = {i} style={{marginTop:50}}>
  <thead style={{display:'flex', flexDirection:'row'}} >
    <tr>
      <td >
        {data.name}
        
      </td>
    </tr>
    
    <tr>
      <td>
      {(data.unitPrice * data.sold).toFixed(2)}
      </td>
    </tr>
  </thead>
</table>
       ))}
       {branch2.products.map((data,i) =>(


<table className='main' key={i}>
  <thead style={{display:'flex', flexDirection:'row'}} >
    <tr>
      <td >
        {data.name}
        
      </td>
    </tr>
    
    <tr>
      <td>
      {(data.unitPrice * data.sold).toFixed(2)}
      </td>
    </tr>
  </thead>
</table>
       ))}
       {branch3.products.map((data,i) =>(


<table className='main' key={i}>
  <thead style={{display:'flex', flexDirection:'row'}} >
    <tr>
      <td >
        {data.name}
        
      </td>
    </tr>
    
    <tr>
      <td>
      {(data.unitPrice * data.sold).toFixed(2)}
      </td>
    </tr>
  </thead>
</table>
       ))}
    </>
  )
}

export default FetchData