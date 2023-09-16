import Image from "next/image";
import React, { FC, InputHTMLAttributes, useEffect, useState } from "react";
import { baseUrl } from "../_constants/constants";
import { Movie } from "../_utils/interfaces";
import { convertDateFormat } from "../_utils/helper";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  dataDetail: Movie;
}
const CategoryCard: FC<InputProps> = ({ dataDetail }) => {
  return (
    <div
      className={`relative cursor-pointer flex-1 h-[380px] sm:h-[430px] shadow-md rounded-[5px]`}
    >
      <div className="title absolute z-[5] px-[7%] w-full h-full flex flex-col gap-[10px] bg-[rgba(57,56,56,0.16)]">
        <div className="flex flex-col justify-end gap-1 h-full items-start mb-[20px]">
          <span className=" text-white font-semibold text-[22px]">
            {dataDetail.title || dataDetail.name}
          </span>
          <span className=" text-white text-[16px]">
            {convertDateFormat(dataDetail.release_date ?? "")}
          </span>{" "}
          <div className=" px-[10px] py-[5px] rounded-[5px] bg-[rgba(187,186,186,0.44)] text-white font-semibold text-[14px]">
            <span>{dataDetail.original_language}</span>
          </div>
        </div>
      </div>
      <Image
        className="rounded-[5px] relative object-cover sm:object-fill"
        src={`${baseUrl}${dataDetail.poster_path || dataDetail.backdrop_path}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={dataDetail.original_title}
      />
    </div>
  );
};

export default CategoryCard;
