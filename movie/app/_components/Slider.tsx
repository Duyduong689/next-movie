"use client";
import React from "react";
import { useEffect, useState } from "react";
import requests from "../_utils/request";
import SliderCard from "./SliderCard";
import { baseUrl } from "../_constants/movie";
import Image from "next/image";
import background from '../_assets/card-img 1.png'
function Slider() {
  const [sliderData, setSliderData] = useState<any[]>([]);
  const [activeMovie, setActiveMovie] = useState<any>();
  useEffect(() => {
    async function getData() {
      const res = await fetch(requests.fetchTrending);
      if (res.ok) {
        const data = await res.clone().json();
        setSliderData(data.results);
      }
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      return res.json();
    }
    getData();
  }, []);
  useEffect(() => {
    if (sliderData?.length > 0) {
      setActiveMovie(sliderData[8]);
    }
  }, [sliderData]);
  return (
    <div className="slider flex gap-[44px] overflow-clip flex-shrink-0 items-end ">
      {/* <Image
        className=" object-cover absolute h-[770px]"
        src={'https://wallpaperaccess.com/full/525039.jpg'}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={activeMovie?.original_title}
      /> */}
      {sliderData &&
        sliderData.map((data: any, index) => (
          <SliderCard
            dataDetail={data}
            active={index == 6 ? true : false}
            key={data.id}
          />
        ))}
    </div>
  );
}

export default Slider;
