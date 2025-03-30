"use client";

import React, { useState, useEffect, useRef } from "react";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { usePathname } from "next/navigation";
import { menuItems, geistSans, geistMono } from "../utils/constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const [selectedMenuItem, setSelectedMenuItem] = useState(
    menuItems[0].label || null
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer position="top-right" autoClose={3000} />
        <StoreProvider>
          <div className="flex h-screen">
            <Sidebar
              menuItems={menuItems}
              pathname={pathname}
              handleMenuItemClick={handleMenuItemClick}
              isSidebarOpen={isSidebarOpen}
              sidebarRef={sidebarRef}
            />
            <div className="flex-1 flex flex-col">
              <Header
                selectedMenuItem={selectedMenuItem}
                toggleSidebar={toggleSidebar}
                pathname={pathname}
                menuItems={menuItems}
              />

              <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
                {children}
              </div>
            </div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
