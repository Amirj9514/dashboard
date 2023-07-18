import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ProductService } from "../../service/ProductService";
import { Rating } from "primereact/rating";
import {AiOutlineStar , AiFillStar} from 'react-icons/ai'

export default function RatingCarousel() {
  const [products, setProducts] = useState([]);


  const startIcon = ()=>{
    return(
       <AiOutlineStar/>
    )
  }
  const fillStartIcon = ()=>{
    return(
        <span  className="warning-text">
              <AiFillStar/>
        </span>
     
    )
  }

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);

  const productTemplate = (product) => {
    return (
      <>
        <div className=" mx-2 my-3 border-clr border-round text-center h-full">
          <div className="p-card lightInfo-bg  border-1 p-2  border-round-lg">
            <div className="p-card-title flex align-items-center ">
              <div className="flex" style={{width:'60px', height:'60px'}}>
                <img
                  className="border-circle"
                  alt="product"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl94BUKaqlY-cvMMN9yJXviGTqRGQl6ca43ZBNkVysjg0donTKkuL6a_wBeSTnCpjUjUE&usqp=CAU"
                />
              </div>
              <div className="ml-2 secondary-text flex flex-column align-items-start">
                <div className="fs-18 fw-500 ">Mabroor Ahmad</div>
                <div className="fs-14 fw-400 ">
                <Rating value={1} onIcon={fillStartIcon} offIcon={startIcon}  readOnly cancel={false} />
                </div>
              </div>
            </div>
            <div className="p-card-content  text-left">
                <div className="secondary-text ellipsis">
                I love your products. It is very easy and fun to use this panel. I love your products. It is very easy and fun to use this panel.
                I love your products. It is very easy and fun to use this panel.
                I love your products. It is very easy and fun to use this panel.

                 </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={products}
         autoplayInterval={2000}
        numVisible={1}
        numScroll={1}
        showNavigators={false}
        showIndicators={false}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
