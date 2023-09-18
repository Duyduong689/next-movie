"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import requests from "../_utils/request";
import CarouselCard from "./CarouselCard";
import Image from "next/image";
import background from "../_assets/card-img 1.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Modal from "./BookingModal";
import { blockBodyScroll, enableBodyScroll } from "../_utils/helper";
import { Movie } from "../_utils/interfaces";
import SkeletonImage from "antd/es/skeleton/Image";
import ImageSkeleton from "./ImageSkeleton";
const scrollPerClick = 400;
function Carousel() {
  const [carouselData, setCarouselData] = useState<any[]>([]);
  const [activeMovie, setActiveMovie] = useState<number>(2);
  const [movieModal, setMovieModal] = useState<Movie | null>();
  const [scrollAmount, setScrollAmount] = useState<number>(0);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isFetchingData, setIsFetchingData] = useState<boolean>(true);

  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    carouselRef.current?.scrollTo({
      top: 0,
      left: scrollAmount - scrollPerClick,
      behavior: "smooth",
    });
    if (scrollAmount > 0) {
      setScrollAmount((prev) => prev - scrollPerClick);
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
        left: scrollAmount + scrollPerClick,
        behavior: "smooth",
      });
      setScrollAmount((prev) => prev + scrollPerClick);
    }
  };
  const handleActiveMovie = (id: number) => {
    setActiveMovie(id);
    // carouselRef.current?.scrollTo({
    //   top: 0,
    //   left: (scrollAmount + scrollPerClick)*id,
    //   behavior: "smooth",
    // });
    // setScrollAmount((prev) => prev + (scrollAmount + scrollPerClick)*id);
  };
  useEffect(() => {
    async function getData() {
      const res = await fetch(requests.fetchTrending);
      if (res.ok) {
        const data = await res.clone().json();
        setCarouselData(data.results);
        setIsFetchingData(false);
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
    <div className="carousel flex gap-[10px] items-end z-10 px-[5px] mb-[100px] md:mb-[200px]">
      {/* <Image
        className=" object-cover absolute h-[770px]"
        src={'https://wallpaperaccess.com/full/525039.jpg'}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={activeMovie?.original_title}
      /> */}
      <div
        className=" rounded-[5px] scrollLeft text-red-200 text-[50px] h-[198px] flex cursor-pointer  items-center bg-[rgba(0,0,0,0.3)]"
        onClick={scrollLeft}
      >
        <div className=" h-fit">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/office/40/back.png"
            alt="back"
          />
        </div>
      </div>
      <div
        className="flex-1 flex overflow-hidden gap-[44px] flex-shrink-0 items-end "
        ref={carouselRef}
      >
        {isFetchingData && (
          <>
            <div className="cardSkeleton flex-shrink-0 rounded-[5px] w-[230px] h-[300px] md:w-[320px] md:h-[453px]">
              <ImageSkeleton />
            </div>
            {Array.from({ length: 10 }, (_, index) => {
              return (
                <div
                  key={index}
                  className="cardSkeleton flex-shrink-0 rounded-[5px] w-[138px] h-[198px]"
                >
                  <ImageSkeleton />
                </div>
              );
            })}
          </>
        )}

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
        className=" rounded-[5px] scrollLeft text-red-200 text-[50px] h-[198px] flex cursor-pointer items-center bg-[rgba(0,0,0,0.3)]"
        onClick={scrollRight}
      >
        <div className=" h-fit">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/office/40/forward--v1.png"
            alt="forward--v1"
          />
        </div>
      </div>
      {isShowModal && (
        <Modal setShowModal={setIsShowModal} dataDetail={movieModal} />
      )}
    </div>
  );
}

export default Carousel;
