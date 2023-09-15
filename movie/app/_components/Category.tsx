"use client";
import React, { FC, InputHTMLAttributes, useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import requests from "../_utils/request";
import { getRandomElements } from "../_utils/helper";
import arrowIcon from "../_assets/arrowRight.png";
import Image from "next/image";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  request: string;
}
const Category: FC<InputProps> = ({ label,request }) => {
  const [categoryData, setCategoryData] = useState<any[]>([]);
  useEffect(() => {
    async function getCategoryData() {
      const res = await fetch(request);
      if (res.ok) {
        const data = await res.clone().json();
        setCategoryData(() => {
          let result = data.results;
          result = getRandomElements(result, 4);
          return result;
        });
      }
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      return res.json();
    }
    getCategoryData();
  }, []);
  return (
    <div className="flex flex-col gap-[50px]">
      <div className="flex">
        <span className=" flex-1 text-[25px] font-semibold">{label}</span>
        <div className="flex gap-[10px] items-center">
          <span className=" font-semibold text-[16px]">see more</span>
          <Image width={13} height={21} src={arrowIcon} alt="arrow-icon" />
        </div>
      </div>
      <div className=" flex gap-[25px]">
        {categoryData &&
          categoryData.map((data) => (
            <CategoryCard dataDetail={data} key={data.id} />
          ))}
      </div>
    </div>
  );
};

export default Category;
