import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { ImHourGlass } from "react-icons/im";
import { FiTruck } from "react-icons/fi";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BiDoughnutChart , BiDollar , BiGroup} from 'react-icons/bi'
import InfoHeader from "../../components/infoHeader";
import LineChart from "../../components/lineChart";
import DoughnutChart from "../../components/Doughnut";
import CircularDemo from "../../components/carousel";
import RatingCarousel from "./ratingBox";

const Dashboard = () => {
  return (
    <>
      <div className="mb-2">
        <InfoHeader
          text={"Orders Detail"}
          message={"Overview Of Orders Detail"}
        />
      </div>
      <div className="grid">
        <div className="col-4 ">
          <div className="p-card p-3 body-bg border-1 border-clr border-round-lg h-full ">
            <div className="flex justify-content-between align-items-top ">
              <div className="secondary-text fs-18 fw-500">
                <span className="pr-1">Total</span>
                <span className=" fs-14 fw-400 ">| This Month</span>
              </div>
              <div>...</div>
            </div>
            <div className="p-card-body flex align-items-center  p-0 m-0 h-full mb-3">
              <span
                className="border-circle lightPrimary-bg primary-text flex justify-content-center align-items-center"
                style={{ width: "70px", height: "70px" }}
              >
                <FaShoppingBasket color="#7367F0" fontSize={40} />
              </span>
              <div className="ml-3">
                <div className="secondary-text fs-28 fw-500">145</div>
                <div className="success-text fs-12">12% increase</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="p-card p-3 body-bg border-1 border-clr border-round-lg h-full ">
            <div className="flex justify-content-between align-items-top ">
              <div className="secondary-text fs-18 fw-500">
                <span className="pr-1">Pending</span>
                <span className=" fs-14 fw-400 ">| This Month</span>
              </div>
              <div>...</div>
            </div>
            <div className="p-card-body flex align-items-center  p-0 m-0 h-full mb-3 ">
              <span
                className="border-circle lightWarning-bg warning-text primary-text flex justify-content-center align-items-center"
                style={{ width: "70px", height: "70px" }}
              >
                <ImHourGlass fontSize={30} />
              </span>
              <div className="ml-3">
                <div className="secondary-text fs-28 fw-500">145</div>
                <div className="success-text fs-12">12% increase</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 ">
          <div className="p-card p-3 body-bg border-1 border-clr border-round-lg h-full">
            <div className="flex justify-content-between align-items-top ">
              <div className="secondary-text fs-18 fw-500">
                <span className="pr-1">Deliverd</span>
                <span className=" fs-14 fw-400 ">| This Month</span>
              </div>
              <div>...</div>
            </div>
            <div className="p-card-body flex align-items-center  p-0 m-0 h-full  mb-3">
              <span
                className="border-circle lightInfo-bg info-text flex justify-content-center align-items-center"
                style={{ width: "70px", height: "70px" }}
              >
                <FiTruck fontSize={35} />
              </span>
              <div className="ml-3">
                <div className="secondary-text fs-28 fw-500">145</div>
                <div className="success-text fs-12">12% increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid  align-items-center ">
        <div className="col-8">
          <LineChart />
        </div>
        <div className="col-4">
          <DoughnutChart />
        </div>
      </div>
      <div className="grid">
        <div className="col-5">
            <div className="p-card body-bg border-1 border-round-lg border-clr">
                <div className="secondary-text px-2 py-2 fs-20 fw-500">
                    <span>Customer Reviews</span>
                </div>
                <div className="">
                    <RatingCarousel/>
                </div>
            </div>
        </div>

        <div className="col-7">
            <div className="p-card border-1 border-round-lg body-bg border-clr  h-full">
                <div className="secondary-text fs-20 fw-500 flex justify-content-between align-items-center my-3 px-3">
                    <span>Statistics</span>
                    <span className="fs-12 ">This Month</span>
                </div>

                <div className="mx-3 grid mt-2" >

                    <div className="col-6">
                    <div className="flex  align-items-center ">
                        <div className="lightPrimary-bg border-circle flex justify-content-center align-items-center primary-text" style={{width:'60px' , height:'60px'}}>
                            <BiDoughnutChart size={40}/>
                        </div>
                        <div className="flex flex-column justify-content-center ml-3 fs-18 fw-500 secondary-text">
                            <span>250k</span>
                            <span className="fs-12 fw-400 ">Sales</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-6">
                    <div className="flex  align-items-center justify-content-center ">
                        <div className="lightInfo-bg border-circle flex justify-content-center align-items-center info-text" style={{width:'60px' , height:'60px'}}>
                            <BiGroup size={40}/>
                        </div>
                        <div className="flex flex-column justify-content-center ml-3 fs-18 fw-500 secondary-text">
                            <span>250</span>
                            <span className="fs-12 fw-400 ">Customer</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-6">
                    <div className="flex  align-items-center  ">
                        <div className="lightDanger-bg border-circle flex justify-content-center align-items-center danger-text" style={{width:'60px' , height:'60px'}}>
                            <AiOutlineShoppingCart size={35}/>
                        </div>
                        <div className="flex flex-column justify-content-center ml-3 fs-18 fw-500 secondary-text">
                            <span>25 k</span>
                            <span className="fs-12 fw-400 ">Product</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-6">
                    <div className="flex  align-items-center justify-content-center">
                        <div className="lightSuccess-bg border-circle flex justify-content-center align-items-center success-text" style={{width:'60px' , height:'60px'}}>
                            <BiDollar size={40}/>
                        </div>
                        <div className="flex flex-column justify-content-center ml-3 fs-18 fw-500 secondary-text">
                            <span>$25k</span>
                            <span className="fs-12 fw-400 ">Revenue</span>
                        </div>
                    </div>
                    </div>
                 
                   
                    
                </div>
            </div>
        </div>
      </div>

      <div className="grid">
        <div className="col-12 h-full">
          <div className="body-bg py-2  border-1 border-clr border-round-lg ">
            <div className="pl-3 mt-2">
              <InfoHeader
                text={"Best Selling Product"}
                message={"Best Selling Products"}
              />
            </div>
            <CircularDemo />
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Dashboard;
