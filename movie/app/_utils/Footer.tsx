import React from "react";
import fbIcon from "../_assets/facebook.png";
import instaIcon from "../_assets/instaIcon.png";
import twitterIcon from "../_assets/twitter.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-[#FAFAFA] pt-[35px] px-[10%] lg:px-[20%] mt-[101px]">
      <ul className=" grid gap-[20px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-[0px] justify-between">
        <li>
          <div>
            <span className=" font-semibold text-[16px] uppercase">Profile</span>
            <ul className=" mt-[35px] flex flex-col gap-[10px] font-light text-[15px]">
              <li>FAQ’s</li>
              <li>Pricing plans</li>
              <li>Order tracking</li>
              <li>Returns</li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <span className=" font-semibold text-[16px] uppercase">
              Recent Posts
            </span>
            <ul className=" mt-[35px] flex flex-col gap-[10px] font-light text-[15px]">
              <li>Touch of uniqueness</li>
              <li>Offices you won’t forget</li>
              <li>Cicilan</li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <span className=" font-semibold text-[16px] uppercase">CUSTOMER</span>
            <ul className=" mt-[35px] flex flex-col gap-[10px] font-light text-[15px]">
              <li>Help & contact us</li>
              <li>Return</li>
              <li>Online stores</li>
              <li>Terms & cordition</li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <span className=" font-semibold text-[16px] uppercase">Contact</span>
            <ul className=" mt-[35px] flex flex-row gap-[10px] font-light text-[15px] ">
              <li>
                <Image src={instaIcon} alt="instagram" width={18} height={18} />
              </li>
              <li>
                <Image src={twitterIcon} alt="twitter" width={18} height={18} />
              </li>
              <li>
                <Image src={fbIcon} alt="fb" width={18} height={18} />
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <hr className="mt-[40px] mb-[20px] w-full border-[1px] border-[#3E3E3E]" />
      <span className="font-light text-[14px]">© 2014 Nizami cinema. All Right Reserved</span>
    </div>
  );
}

export default Footer;
