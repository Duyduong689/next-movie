"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import requests from "../_utils/request";
import CarouselCard from "./CarouselCard";
import { baseUrl } from "../_constants/constants";
import Image from "next/image";
import background from "../_assets/card-img 1.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Modal from "./BookingModal";
import { blockBodyScroll, enableBodyScroll } from "../_utils/helper";
import { Movie } from "../_utils/interfaces";
function Carousel() {
  const [carouselData, setCarouselData] = useState<any[]>([]);
  const [activeMovie, setActiveMovie] = useState<number>(3);
  const [movieModal, setMovieModal] = useState<Movie | null>();

  const [scrollAmount, setScrollAmount] = useState<number>(0);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    carouselRef.current?.scrollTo({
      top: 0,
      left: scrollAmount - 500,
      behavior: "smooth",
    });
    if (scrollAmount > 0) {
      setScrollAmount((prev) => prev - 500);
    }
  };
  const scrollRight = () => {
    if (
      carouselRef.current != null &&
      scrollAmount <=
        carouselRef?.current?.scrollWidth - carouselRef?.current?.clientWidth
    ) {
      carouselRef.current?.scrollTo({
        top: 0,
        left: scrollAmount + 500,
        behavior: "smooth",
      });
      setScrollAmount((prev) => prev + 500);
    }
  };
  const handleActiveMovie = (id: number) => {
    setActiveMovie(id);
  };
  useEffect(() => {
    async function getData() {
      const res = await fetch(requests.fetchTrending);
      if (res.ok) {
        const data = await res.clone().json();
        setCarouselData(data.results);
      }
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      return res.json();
    }
    getData();
  }, []);
  useEffect(() => {
    if (isShowModal) {
      window.scrollTo({ top: 0 });
      blockBodyScroll();
    } else {
      enableBodyScroll();
    }
  }, [isShowModal]);
  return (
    <div className="carousel flex gap-[44px] items-end z-10 px-[5px]">
      {/* <Image
        className=" object-cover absolute h-[770px]"
        src={'https://wallpaperaccess.com/full/525039.jpg'}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={activeMovie?.original_title}
      /> */}
      <div
        className=" rounded-[5px] scrollLeft text-red-200 text-[50px] h-[198px] flex cursor-pointer bg-[rgba(0,0,0,0.3)]"
        onClick={scrollLeft}
      >
        <LeftOutlined />
      </div>
      <div
        className="flex-1 flex overflow-hidden gap-[44px] flex-shrink-0 items-end "
        ref={carouselRef}
      >
        {carouselData &&
          carouselData.map((data: any, index) => (
            <div
              onClick={() => {
                handleActiveMovie(index);
              }}
              key={data.id}
            >
              <CarouselCard
                dataDetail={data}
                active={index == activeMovie ? true : false}
                setShowModal={setIsShowModal}
                setMovieModal={setMovieModal}
              />
            </div>
          ))}
      </div>
      <div
        className=" rounded-[5px] scrollLeft text-red-200 text-[50px] h-[198px] flex cursor-pointer bg-[rgba(0,0,0,0.3)]"
        onClick={scrollRight}
      >
        <RightOutlined />
      </div>
      {isShowModal && <Modal setShowModal={setIsShowModal} dataDetail={movieModal} />}
    </div>
  );
}

export default Carousel;
