"use client";
import React, { FC, InputHTMLAttributes, useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { getRandomElements } from "../_utils/helper";
import { ArrowRightOutlined } from "@ant-design/icons";
import ImageSkeleton from "./ImageSkeleton";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  request: string;
}
const Category: FC<InputProps> = ({ label, request }) => {
  const [categoryData, setCategoryData] = useState<any[]>([]);
  const [isFetchingData, setIsFetchingData] = useState<boolean>(true);

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
        setIsFetchingData(false);
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
      <div className="flex flex-row max-[360px]:flex-col">
        <span className=" flex-1 text-[25px] font-semibold dark:text-white">
          {label}
        </span>
        <div className="flex gap-[10px] items-center cursor-pointer">
          <span className=" font-semibold text-[16px] dark:text-white">
            see more
          </span>
          <ArrowRightOutlined className=" dark:text-white" />
        </div>
      </div>
      <div className=" grid px-[20%] sm:grid-cols-1 sm:px-[20%] md:grid-cols-2 md:px-[7%] lg:grid-cols-3 lg:px-[5%] xl:grid-cols-4 xl:px-[0%]  gap-[25px]">
        {isFetchingData &&
          Array.from({ length: 4 }, (_, index) => {
            return (
              <div key={index} className="h-[380px] sm:h-[530px]">
                <ImageSkeleton />
              </div>
            );
          })}
        {categoryData &&
          categoryData.map((data) => (
            <CategoryCard dataDetail={data} key={data.id} />
          ))}
      </div>
    </div>
  );
};

export default Category;
