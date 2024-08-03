import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Addproducts() {

   
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("");


  function handleSubmit()
  {
    const data ={
      name: name,
      image: image,
      price: price,
      rate: rate
    }

    axios.post("https://668298e14102471fa4c782d5.mockapi.io/Products", data)
    .then((result) => {
      console.log(result.data);
    })
  }


  return (
    









<div className="container-fluid">
<div className="row flex-nowrap">
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                    <Link to={"/side"} href="#" className="nav-link align-middle px-0">
                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                    </Link>
                </li>
                <li>
                <Link to={"/products"} href="#" className="nav-link px-0 align-middle">
                   <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Products</span>
                </Link>
                                
                    
                </li>
                <li>
                    <Link to={"/addpro"} href="#" className="nav-link px-0 align-middle">
                        <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Add Products</span>
                    </Link>
                </li>
                <li>
                <Link to={"/admin"} href="#" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Sign out</span>
                </Link>
                    
                </li>
                
            </ul>
            <hr />
            
        </div>
    </div>
    <div className="col py-3">

    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
     
      <div className='main-add' style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#333' }}>Add Product</h1>
        <div>
          <div className="container-add" style={{ display: 'inline-block', textAlign: 'left', width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
            <div style={{ marginBottom: '15px' }}>
              <span>Enter Title: </span>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="title" placeholder='Enter Title Of Product' style={{ width: '100%', padding: '10px', margin: '5px 0', boxSizing: 'border-box' }} />
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <span>Enter Price: </span>
              <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" id="price" placeholder='Enter Price Of Product' style={{ width: '100%', padding: '10px', margin: '5px 0', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <span>Enter Rating: </span>
              <input value={rate} onChange={(e) => setRate(e.target.value)} type="text" id="rating" placeholder='Enter Rating Of Product' style={{ width: '100%', padding: '10px', margin: '5px 0', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <span>Upload Image: (URL only)</span>
              <input value={image} onChange={(e) => setImage(e.target.value)} type="text" id="image" placeholder='Paste URL Here' style={{ width: '100%', padding: '10px', margin: '5px 0', boxSizing: 'border-box' }} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <button onClick={handleSubmit} className='btn btn-success' style={{ backgroundColor: '#28a745', color: '#fff', padding: '10px 20px', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
        
    </div>
</div>
</div>
  )
}
