"use client";
import React from "react";
import Link from "next/link";

const Sidebar = ({
  menuItems,
  pathname,
  handleMenuItemClick,
  isSidebarOpen,
  sidebarRef,
}) => {
  return (
    <div
      ref={sidebarRef}
      className={`${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 h-full bg-white text-[#232323] w-[230px] transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:block border-r border-[#E6EFF5]`}
    >
      <div className="p-6 pl-8">
        <div className="flex items-center gap-3">
          <img
            src="/images/SoarTaskLogo.svg"
            alt="Soar Task Logo"
            className="w-[30px] h-[30px]"
          />
          <div className="text-[25px] font-inter font-extrabold text-[#343C6A]">
            Soar Task
          </div>
        </div>
        <ul className="mt-8 space-y-4">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => {
                  handleMenuItemClick(item.label);
                }}
                className={`text-[18px] transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-[#232323]"
                    : "text-[#B1B1B1] hover:text-[#232323]"
                }`}
              >
                <div className="flex items-center gap-3 pb-4">
                  <img
                    src={item.imgSrc}
                    alt={`${item.label} Icon`}
                    className="w-[25px] h-[25px]"
                    style={{
                      filter:
                        pathname === item.href ? "brightness(20%)" : "none",
                    }}
                  />
                  {item.label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
