import React, { useState } from "react";

import { BiHomeSmile , BiCategory } from "react-icons/bi";
import { RiArrowRightSLine , RiArrowDownSLine } from "react-icons/ri";
import {TbCircleDot} from 'react-icons/tb'

const Sidebar = ({ isCollapse }) => {

  const [dropdown , setOpenDropdown]=useState(false)
  const [prodMenu , setProdMenu]=useState(false)

  const openDropDown = (param)=>{
    if(param === 'cat'){
      setOpenDropdown(!dropdown)
    }
    else if(param === 'prod'){
      setProdMenu(!prodMenu)
    }
   
  }
  return (
    <>
      <div className="nav-header flex justify-content-center align-items-center">
        <div className="flex">
          <div className="primary-text flex align-items-center">
            <svg
              width="32"
              height="22"
              viewBox="0 0 34 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.00183571 0.3125V7.59485C0.00183571 7.59485 -0.141502 9.88783 2.10473 11.8288L14.5469 23.6837L21.0172 23.6005L19.9794 10.8126L17.5261 7.93369L9.81536 0.3125H0.00183571Z"
                fill="currentColor"
              ></path>
              <path
                opacity="0.06"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.17969 17.7762L13.3027 3.75173L17.589 8.02192L8.17969 17.7762Z"
                fill="#161616"
              ></path>
              <path
                opacity="0.06"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.58203 17.2248L14.8129 5.24231L17.6211 8.05247L8.58203 17.2248Z"
                fill="#161616"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.25781 17.6914L25.1339 0.3125H33.9991V7.62657C33.9991 7.62657 33.8144 10.0645 32.5743 11.3686L21.0179 23.6875H14.5487L8.25781 17.6914Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div
            className={` fs-24  ml-3 secondary-text show fw-500 ${
              isCollapse ? "" : "hidden"
            }`}
          >
            Vuexy
          </div>
        </div>
      </div>

      <div className="sidebarMenu">
        <div className="menuList mt-1 mb-3">
          <BiHomeSmile color="#ADB0CB" fontSize={28} />
          <span
            className={` fs-15  ml-3 secondary-text show fw-500 ${
              isCollapse ? "" : "hidden"
            }`}
          >
            {" "}
            Dashboard
          </span>
        </div>

        <div className="sidebarDrop mb-3">
          <div className="menuList justify-content-between" onClick={()=>{openDropDown('cat')}}>
            <div className="flex align-items-center w-100 ">
              <BiHomeSmile color="#ADB0CB" fontSize={28} />
              <span
                className={` fs-15  ml-3 secondary-text show fw-500 ${
                  isCollapse ? "" : "hidden"
                }`}
              >
                Category
              </span>
            </div>
            <RiArrowRightSLine className={`${dropdown?'hidden':''}`}   color="white" size={22} />
            <RiArrowDownSLine className={`${dropdown?'':'hidden'}`} color="white" size={22} />
          </div>

          <div className={`${dropdown?'sidebarDropOpen':'sidebarDropClose'}`}>
            <div className="secondary-text mt-3 submenu">
              <div className="flex align-items-center border-round-md pl-3 pr-2 py-2 ">
                <TbCircleDot size={16}/>
                <span className="fs-16 fw-500 ml-2 ">Add Category</span>
              </div>
              <div className="flex align-items-center border-round-md pl-3 pr-2 py-2 ">
                <TbCircleDot/>
                <span className="fs-16 fw-500 ml-2 ">Category List</span>
              </div>
            </div>
          </div>
        </div>


        <div className="sidebarDrop mb-3">
          <div className="menuList justify-content-between" onClick={()=>{openDropDown('prod')}}>
            <div className="flex align-items-center w-100 ">
              <BiCategory color="#ADB0CB" fontSize={28} />
              <span
                className={` fs-15  ml-3 secondary-text show fw-500 ${
                  isCollapse ? "" : "hidden"
                }`}
              >
                Product
              </span>
            </div>
            <RiArrowRightSLine className={`${prodMenu ?'hidden':''}`}   color="white" size={22} />
            <RiArrowDownSLine className={`${prodMenu ?'':'hidden'}`} color="white" size={22} />
          </div>

          <div className={`${prodMenu ?'sidebarDropOpen':'sidebarDropClose'}`}>
            <div className="secondary-text mt-3 submenu">
              <div className="flex align-items-center border-round-md pl-3 pr-2 py-2 ">
                <TbCircleDot size={16}/>
                <span className="fs-16 fw-500 ml-2 ">Add Product</span>
              </div>
              <div className="flex align-items-center border-round-md pl-3 pr-2 py-2 ">
                <TbCircleDot/>
                <span className="fs-16 fw-500 ml-2 ">Product List</span>
              </div>
            </div>
          </div>
        </div>

        <div className="menuList my-2">
          <BiHomeSmile color="#ADB0CB" fontSize={28} />
          <span
            className={` fs-15  ml-3 secondary-text show fw-500 ${
              isCollapse ? "" : "hidden"
            }`}
          >
            Dashboard
          </span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
