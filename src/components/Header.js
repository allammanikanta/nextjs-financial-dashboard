"use client";
import React from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

const Header = ({ selectedMenuItem, toggleSidebar, pathname, menuItems }) => {
  const getSelectedTab = () => {
    const currentItem = menuItems.find((item) => pathname === item.href);
    return currentItem ? currentItem.label : "Dashboard";
  };

  return (
    <div className="flex flex-col bg-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <button className="lg:hidden" onClick={toggleSidebar}>
          <FaBars className="text-xl text-gray-700" />
        </button>

        <h1 className="text-xl font-semibold text-gray-700">
          {getSelectedTab()}
        </h1>

        <div className="flex items-center space-x-3 lg:flex gap-3">
          <div className="hidden lg:flex flex-grow justify-center mx-4 transition-all duration-1000 ease-in-out gap-6">
            <div className="flex items-center bg-[#F5F7FA] rounded-[25px] w-[255px] pl-4 h-[50px]">
              <img src="/images/SearchIcon.svg" alt="Search Icon" />
              <input
                type="text"
                className="p-2 text-[#8BA3CB] text-[15px] focus:outline-none"
                placeholder="Search for something"
              />
            </div>
            <div className="w-[50px] h-[50px] cursor-pointer bg-[#F5F7FA] rounded-full flex items-center justify-center">
              <Link href="/settings">
                <img
                  src="/images/MenuSettingsIcon.svg" // Placeholder image path for settings icon
                  alt="Settings Icon"
                />
              </Link>
            </div>

            <div className="w-[50px] h-[50px] cursor-pointer bg-[#F5F7FA] rounded-full flex items-center justify-center">
              <Link href="/notifications">
                <img
                  src="/images/MenuNotificationsIcon.svg"
                  alt="Notifications Icon"
                />
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-[50px] h-[50px]">
            <img
              src="/images/UserIcon.jpg"
              alt="User Icon"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full px-4 mt-2">
        <div className="flex items-center bg-[#F5F7FA] rounded-[25px] w-full pl-4 h-[50px] mx-auto">
          <img src="/images/SearchIcon.svg" alt="Search Icon" />
          <input
            type="text"
            className="p-2 text-[#8BA3CB] text-[15px] focus:outline-none w-full"
            placeholder="Search for something"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
