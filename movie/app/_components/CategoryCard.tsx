import Image from "next/image";
import React, { FC, InputHTMLAttributes, useEffect, useState } from "react";
import { baseUrl } from "../_constants/movie";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  dataDetail: any;
}
const CategoryCard: FC<InputProps> = ({ dataDetail }) => {
  return (
    <div
      className={`relative cursor-pointer flex-1 h-[380px] sm:h-[430px] shadow-md rounded-[5px]`}
    >
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
