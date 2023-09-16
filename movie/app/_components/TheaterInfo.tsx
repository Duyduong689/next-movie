import { Steps } from "antd";
import React from "react";
import imageArshin from "../_assets/image60.png";
import Image from "next/image";
import About from "./About";
import News from "./News";
function TheaterInfo() {
  return (
    <div>
      <span className=" text-[25px] font-medium dark:text-white">
        Pearls of Azerbaijani cinema
      </span>
      <Steps
        className="theaterSteps text-black dark:text-white mt-[20px] md:mt-[88px]"
        progressDot
        current={1}
        items={[
          {
            title: "",
          },
          {
            title: "1940",
          },
          {
            title: "1950",
          },
          {
            title: "1970",
          },
          {
            title: "1990",
          },
          {
            title: "2000",
          },
          {
            title: "2010",
          },
        ]}
      />
      <div className=" flex flex-col gap-[40px] lg:gap-[110px] pt-[20px] md:pt-[82px] px-[5%] lg:px-[100px]">
        <div className=" w-full flex justify-between items-center flex-col sm:flex-col gap-[20px] xl:flex-row xl:gap-[10px] dark:text-white">
          <Image src={imageArshin} width={558} height={432} alt="arshin" />
          <div>
            <span className=" italic text-[11px]">OPERETTA</span>
            <h2 className=" text-[25px] font-medium mt-[6px]">
              Arshin Mal Alan
            </h2>
            <p className=" text-[14px] font-medium text-[#5D5D5D] max-w-[415px] mt-[30px]">
              Arshin Mal Alan is a 4-act operetta composed by Azerbaijani
              composer Uzeyir Hajibeyov. The libretto of the work was also
              written by Uzeyir Hajibeyov in 1913 in St. Petersburg. The
              premiere of the opera was held on October 25, 1913 at the Haji
              Zeynelabidin Tagiyev Theater in Baku.
            </p>
          </div>
        </div>
        <About />
        <News />
      </div>
    </div>
  );
}

export default TheaterInfo;
