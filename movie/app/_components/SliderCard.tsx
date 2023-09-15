import Image from "next/image";
import React, { FC, InputHTMLAttributes } from "react";
import { baseUrl } from "../_constants/movie";
import { Button } from "antd";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  dataDetail: any;
  active?: boolean;
}
const SliderCard: FC<InputProps> = ({ dataDetail, active = false }) => {
  return (
    <div
      className={`relative flex-shrink-0 cursor-pointer shadow-md rounded-[5px] ${
        active ? "w-[320px] h-[453px]" : "w-[138px] h-[198px]"
      }`}
    >
      {active && (
        <div className="booking absolute z-[5] pt-[70%] px-[10px] w-full h-full flex flex-col justify-center items-center gap-[10px] bg-[rgba(0,0,0,0.3)]">
          <span className=" text-white font-semibold text-center text-[20px]">
            {dataDetail.title}
          </span>
          <Button className=" w-fit" type="primary" danger>
            Book Now
          </Button>
        </div>
      )}
      <Image
        className="rounded-[5px] relative"
        src={`${baseUrl}${dataDetail.poster_path || dataDetail.backdrop_path}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={dataDetail.original_title}
      />
    </div>
  );
};

export default SliderCard;
