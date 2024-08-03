
import React from 'react';
import { Link } from 'react-router-dom';

export default function Categories() {
  const categories = [
    {
      to: '/shoes',
      alt: 'Grocery',
      imgSrc: 'https://banner2.cleanpng.com/20230814/lhu/transparent-sneakers-running-shoes-colorful-artistic-splatter-1711091875328.webp',
      label: 'Shoes',
    },
    {
      to: '/mobiles',
      alt: 'Mobiles',
      imgSrc: 'https://sc04.alicdn.com/kf/H80fa122d2c774e529f57b7f6774e98868.jpg',
      label: 'Watches',
    },
    {
      to: '/fashion',
      alt: 'Fashion',
      imgSrc: 'https://i.pinimg.com/236x/b2/09/c0/b209c05e517088a17d16f5401b6a616f.jpg',
      label: 'Shirts',
    },
    {
      to: '/electronics',
      alt: 'Electronics',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLVMXKR_iq9t2U-3KZ36JN-5ibNn9CbFUPw&usqp=CAU',
      label: 'Mobiles',
    },
    {
      to: '/home-furniture',
      alt: 'Home & Furniture',
      imgSrc: 'https://isakaabengaluru.com/wp-content/uploads/2022/04/71dEWXwH0cL._SL1500_.jpg',
      label: 'Toys',
    },
    {
      to: '/appliances',
      alt: 'Appliances',
      imgSrc: 'https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100',
      label: 'Electronics',
    },
    {
      to: '/smart',
      alt: 'Smartwatches',
      imgSrc: 'https://www.reliancedigital.in/medias/boAt-Wave-Hype-494351950-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzM5OTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDdiL2hiMC8xMDA5MzgyMDQxMTkzNC5qcGd8NTEzZGQ3MTU3Y2Q3MTQ4ZjExNjU1Y2M1MDEzMGYyNWIwYjBkN2RhNDNlYWI5NGJhNTcwMDRjNDE4ODIyZmI3ZQ',
      label: 'Smartwatches',
    },
    {
      to: '/beauty-toys',
      alt: 'Beauty, Toys & More',
      imgSrc: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/backpack/t/b/n/-original-imagh3vwwdftp7zk.jpeg?q=90&crop=false',
      label: 'Bags',
    },
    
  ];

  return (
    <div>
      <style>
        {`
          .categories {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 20px;
          }

          ._1ch8e_ {
            text-align: center;
            margin: 10px;
            text-decoration: none;
            color: inherit;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            transition: transform 0.2s, box-shadow 0.2s;
          }

          ._1ch8e_:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }

          .YBLJE4 {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          ._3ETuFY {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 64px;
            height: 64px;
          }

          ._2GaeWJ {
            width: 64px;
            height: 64px;
          }

          ._2puWtW {
            max-width: 100%;
            max-height: 100%;
          }

          ._1XjE3T {
            margin-top: 10px;
            font-size: 14px;
            font-weight: bold;
          }
        `}
      </style>
      <div  style={{backgroundColor:"#484848"}} className="categories">
        {categories.map((category, index) => (
          <Link to={category.to} style={{backgroundColor:"	#707070"}}  className="_1ch8e_" aria-label={category.label} key={index}>
            <div  className="YBLJE4">
              <div className="_3ETuFY">
                <div className="_2GaeWJ">
                  <img className="_2puWtW _3a3qyb" alt={category.alt} src={category.imgSrc} />
                </div>
              </div>
              <span className="_1XjE3T">
                <span>{category.label}</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
