import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";

import { ProductService } from "../service/ProductService";

export default function CircularDemo() {
  const [products, setProducts] = useState([]);
  const [timeInterval, setTimeInterval] = useState(2000);

  const responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);

  const stopCarouselOnHover = () => {
    setTimeInterval(10000000000);
  };
  const startCarouselOnLeave = () => {
    setTimeInterval(2000);
  };

  const productTemplate = (product) => {
    return (
      <div className="border-1 border-round-lg surface-border light-text border-round infoS3-bg text-center  mx-4 mt-4 mb-2">
        <div className=" m-0 p-0  border-round-top-lg">
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
            className="w-full shadow-2 border-round-top-lg m-0 p-0"
          />
        </div>

        <div className="" style={{height:'100px'}}>
          <h4 className="mb-1 border-round-lg">{product.name}</h4>
          <h6 className="mt-0 mb-3 success-text">12 items Sold</h6>
          <span className="py-1 px-3 fs-14 fw-400 border-round-xl lightSuccess-bg">In Stock</span>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <div
        onMouseEnter={stopCarouselOnHover}
        onMouseLeave={startCarouselOnLeave}
      >
        <Carousel
          value={products}
          numVisible={3}
          numScroll={2}
          showIndicators={false}
          showNavigators={false}
          className="custom-carousel"
          circular
          autoplayInterval={timeInterval}
          itemTemplate={productTemplate}
          responsiveOptions={responsiveOptions}
        />
      </div>
    </div>
  );
}
