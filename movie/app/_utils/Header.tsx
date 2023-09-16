"use client";
import React, { useEffect, useState } from "react";
import logo from "../_assets/movie-logo.png";
import lightToggle from "../_assets/toggle-light-mode.png";
import darkToggle from "../_assets/toggle-dark-mode.png";
import userIcon from "../_assets/user-icon.png";
import Image from "next/image";
function Header() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  useEffect(() => {
    let html = document.querySelector("html");
    if (isDarkMode) {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div className="pt-[20px] flex relative z-10 ">
      <div className="logo flex-1  ">
        <Image className="cursor-pointer" priority src={logo} alt="logo" />
      </div>
      <div className="actions flex items-center gap-[34px]">
        <div className="toggle cursor-pointer">
          {isDarkMode ? (
            <Image
              src={darkToggle}
              alt="dark-toggle"
              onClick={() => {
                setIsDarkMode((prev) => !prev);
              }}
            />
          ) : (
            <Image
              src={lightToggle}
              alt="light-toggle"
              onClick={() => {
                setIsDarkMode((prev) => !prev);
              }}
            />
          )}
        </div>
        <div className="user cursor-pointer">
          <Image src={userIcon} alt="user" />
        </div>
      </div>
    </div>
  );
}

export default Header;
