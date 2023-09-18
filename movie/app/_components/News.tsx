import React from "react";
import imageNews from "../_assets/image 56.png";
import new1 from "../_assets/new1.png";
import new2 from "../_assets/new2.png";
import new3 from "../_assets/new3.png";
import new4 from "../_assets/new4.png";

import Image from "next/image";
function News() {
  return (
    <div className="flex flex-col sm:items-center xl:items-start dark:text-white">
      <h2 className=" text-[25px] font-medium">Latest news</h2>
      <div className=" flex gap-[51px] mt-[50px] flex-col items-center 2xl:flex-row  ">
        <div className=" relative w-fit flex-shrink-0">
          <Image src={imageNews} alt="news" width={558} height={457} />
          <div className=" absolute bottom-[0] pt-[40%] sm:pt-[50%] lg:pt-[30%] pl-[6%] pr-[10%] w-full h-full text-white bg-[rgba(0,0,0,0.2)]">
            <div className=" flex justify-between items-start mb-[22px] max-[500px]:flex-col sm:flex-col lg:flex-row lg:items-end">
              <h2 className="font-semibold text-[20px] max-w-[314px]">
                New American films on the screen of Nizami Cinema Center
              </h2>
              <div className=" text-right mr-[10px]">
                <span className=" font-extralight text-[13px]">25.06.2022</span>
              </div>
            </div>
            <p className=" font-medium text-[15px] leading-[25px] text-[#D8D8D8] hidden sm:hidden lg:block ">
              US-produced &quot;Independence Day: Revival&quot; at Nizami Cinema Center.
              &quot;Neighbours. 2 in wartime ”films have been shown. &quot;Independence
              Day: Revival&quot; is based on a screenplay by Nicholas Wright and
              directed by Roland Emmerich in the genres of science fiction,
              adventure and war. Slogan: “We had 20 years to prepare.
            </p>
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-[36px] mt-[30px]">
            <li>
              <div className=" flex gap-[24.7px] flex-col min-[435px]:flex-row">
                <Image src={new1} alt="new1" width={83.5} height={73} />
                <div>
                  <span className=" text-[11px] italic font-light mb-[5px]">
                    25.03.2022
                  </span>
                  <p className=" text-[12px] font-semibold text-[#7D7D7D]">
                    An event titled &quot;April battles and victory&quot; dedicated to the
                    Armed Forces Day was held at the Nizami Cinema Center
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className=" flex gap-[24.7px] flex-col min-[435px]:flex-row">
                <Image src={new2} alt="new2" width={83.5} height={73} />
                <div>
                  <span className=" text-[11px] italic font-light mb-[5px]">
                    27.04.2022
                  </span>
                  <p className=" text-[12px] font-semibold text-[#7D7D7D]">
                    &quot;Khazri&quot; dance group at Nizami Cinema Center
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className=" flex gap-[24.7px] flex-col min-[435px]:flex-row">
                <Image src={new3} alt="new3" width={83.5} height={73} />
                <div>
                  <span className=" text-[11px] italic font-light mb-[5px]">
                    24.04.2022
                  </span>
                  <p className=" text-[12px] font-semibold text-[#7D7D7D]">
                    The conference &quot;Azerbaijani cinema&quot; was held at the Nizami
                    Cinema Center.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className=" flex gap-[24.7px] flex-col min-[435px]:flex-row">
                <Image src={new4} alt="new4" width={83.5} height={73} />
                <div>
                  <span className=" text-[11px] italic font-light mb-[5px]">
                    01.02.2022
                  </span>
                  <p className=" text-[12px] font-semibold text-[#7D7D7D]">
                    The conference &quot;Heydar Aliyev and Azerbaijani cinema&quot; was
                    held at the Nizami Cinema Center
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default News;
