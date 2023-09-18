import React from "react";
import iconArrow from "../_assets/arrowRight.png";
import imageAbout from "../_assets/Rectangle 4194.png";
import { ArrowRightOutlined } from "@ant-design/icons";

import Image from "next/image";
function About() {
  return (
    <div className=" flex justify-between items-center gap-[20px] flex-col sm:flex-col sm:gap-[20px] xl:flex-row xl:gap-[0px] dark:text-white ">
      <div>
        <h2 className=" font-medium text-[25px]">About us</h2>
        <span className=" mt-[10px] italic font-light text-[11px]">
          2008-2018
        </span>
        <div className=" relative max-w-[402px] mt-[34px]">
          <p className=" font-medium text-[14px] text-[#5D5D5D]">
            According to the State Program for the Development of Azerbaijani
            Cinema for 2008-2018, Nizami, one of the oldest cinemas in the
            country, was inaugurated on December 27, 2011 after major
            reconstruction. In addition to the current repertoire of films,
            which includes the most interesting new films, presentations of
            national films...
            {" "}<ArrowRightOutlined className=" dark:text-white text-lg" />
          </p>
        </div>
      </div>
      <Image
        className="cursor-pointer"
        src={imageAbout}
        alt="about"
        width={556}
        height={418}
      />
    </div>
  );
}

export default About;
