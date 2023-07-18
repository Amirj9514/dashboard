import React, { useState } from "react";
import "./header.scss";
import { AiOutlineMenu } from "react-icons/ai";
import {IoPersonOutline} from 'react-icons/io5'
import {FiSettings} from 'react-icons/fi'
import {BiLogOut} from 'react-icons/bi'

const Header = ({ onChildValue }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    onChildValue(); // Invoke the callback function and pass the value
  };

  const profileDropdown = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="relative">
        <header className="my-3 px-3 py-2 border-round-md border-1  border-clr body-bg flex align-items-center justify-content-between">
          <span style={{ height: "25px" }} onClick={handleClick}>
            <AiOutlineMenu color="#ADB0CB" fontSize={25} />
          </span>

          <div className="flex align-items-center">
            <img
              width={50}
              height={50}
              className="border-circle"
              onClick={profileDropdown}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl94BUKaqlY-cvMMN9yJXviGTqRGQl6ca43ZBNkVysjg0donTKkuL6a_wBeSTnCpjUjUE&usqp=CAU"
              alt="profile"
            />
            <div className="flex flex-column ml-2 secondary-text text-right">
              <span>New User</span>
              <span>Admin</span>
            </div>
          </div>
        </header>

        <div className={`absolute profileDropdown body-bg shadow-3 border-round-md border-clr ${show ? "animation border-1" : ""}`}>
          <div className="m-2">
            <ul className="mx-1 p-0 ">
              <li className="listStyleNone py-2 px-2 pointer border-round-md">
                <div className="flex align-items-center fs-16 secondary-text fw-500">
                  <IoPersonOutline fontSize={22}/>
                  <span className="ml-2">Profile</span>
                </div>
              </li>
              <li className="listStyleNone  py-2 px-2 pointer border-round-md">
                <div className="flex align-items-center fs-16 secondary-text fw-500">
                  <FiSettings fontSize={22}/>
                  <span className="ml-2">Setting</span>
                </div>
              </li>
              <li className="listStyleNone  py-2 px-2 pointer border-round-md">
                <div className="flex align-items-center fs-16 secondary-text fw-500">
                  <IoPersonOutline fontSize={22}/>
                  <span className="ml-2">Profile</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-content-center border-clr border-top-1 py-3 pointer logout">
                <div className="flex align-items-center h-100  fs-18 danger-text fw-500">
                  <BiLogOut fontSize={22}/>
                  <span className="ml-2">Log Out</span>
                </div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
