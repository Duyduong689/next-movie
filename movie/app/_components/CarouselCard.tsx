import Image from "next/image";
import React, { FC, InputHTMLAttributes } from "react";
import { baseUrl } from "../_constants/constants";
import { Button } from "antd";
import { Movie } from "../_utils/interfaces";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  dataDetail: Movie;
  active?: boolean;
  setShowModal?: (isVisible: boolean) => void;
  setMovieModal?: (dataDetail: Movie) => void;
}
const CarouselCard: FC<InputProps> = ({
  dataDetail,
  active = false,
  setShowModal,
  setMovieModal,
}) => {
  return (
    <div
      className={`relative flex-shrink-0 cursor-pointer shadow-md rounded-[5px] ${
        active ? "w-[230px] h-[300px] md:w-[320px] md:h-[453px]" : "w-[138px] h-[198px]"
      }`}
    >
      {active && (
        <div className="booking absolute z-[5] px-[10px] w-full h-full flex flex-col justify-center items-center gap-[10px] bg-[rgba(0,0,0,0.3)]">
          <div className="flex flex-col justify-end gap-1 h-full items-center mb-[30px]">
            <span className=" text-white font-semibold text-center text-[20px]">
              {dataDetail.title || dataDetail.name}
            </span>
            <Button
              className=" w-fit"
              type="primary"
              danger
              onClick={() => {
                if (setShowModal && setMovieModal) {
                  setShowModal(true);
                  setMovieModal(dataDetail);
                }
              }}
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
      <Image
        className="rounded-[5px] relative"
        src={`${baseUrl}${dataDetail.poster_path || dataDetail.backdrop_path}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={dataDetail.original_title || dataDetail.name}
      />
    </div>
  );
};

export default CarouselCard;
