"use client";
import { CloseOutlined } from "@ant-design/icons";
import React, { FC, InputHTMLAttributes, useState, useEffect } from "react";
import { Movie, SeatRow, SelectedSeatView } from "../_utils/interfaces";
import Image from "next/image";
import { baseUrl, seatPickerArray, seatPrice } from "../_constants/constants";
import { convertDateFormat } from "../_utils/helper";
import SeatPicker from "./SeatPicker";
import SeatPickerModal from "./SeatPickerModal";
import OrderForm from "./OrderForm";
import ConfirmModal from "./ConfirmModal";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  setShowModal?: (isVisible: boolean) => void;
  dataDetail?: Movie | null;
}
const Modal: FC<InputProps> = ({ setShowModal, dataDetail }) => {
  const [isShowSeatPickerModal, setIsShowSeatPickerModal] =
    useState<boolean>(false);
  const [isShowOrderFormModal, setIsShowOrderFormModal] =
    useState<boolean>(false);
  const [isShowConfirmModal, setIsShowConfirmModal] = useState<boolean>(false);

  const [selectedSeats, setSelectedSeats] = useState<SelectedSeatView[]>([]);
  const [seatRowArray, setSeatRowArray] = useState<SeatRow[]>([
    ...JSON.parse(JSON.stringify(seatPickerArray)),
  ]);
  const [purchasePrice, setPurchasePrice] = useState<number>(0);
  useEffect(() => {
    let res: SelectedSeatView[] = [];
    if (seatRowArray) {
      seatRowArray.map((seatRow, seatRowIndex): void => {
        seatRow.array.map((seat, seatIndex) => {
          if (seat.value == 2) {
            res.push({
              rowName: seatRow.name,
              position: seat.position,
              seatRowIndex,
              seatIndex,
            });
          }
        });
      });
    }
    if (setSelectedSeats) setSelectedSeats(res);
  }, [seatRowArray, setSelectedSeats]);
  useEffect(() => {
    if (selectedSeats.length > 0) {
      setIsShowSeatPickerModal(true);
      setPurchasePrice(selectedSeats.length * seatPrice);
    } else {
      setIsShowSeatPickerModal(false);
    }
  }, [selectedSeats]);
  return (
    <>
      <div className=" absolute inset-0 w-full flex flex-col md:flex-row bg-gradient-to-b from-gray-700 to-gray-900 z-20">
        <CloseOutlined
          className=" cursor-pointer absolute right-[10px] top-[10px] text-[40px] text-white"
          onClick={() => {
            if (setShowModal) setShowModal(false);
          }}
        />
        <div className="md:flex-1 md:relative md:bg-[rgba(0,0,0,0.8)] ">
          <Image
            className="rounded-[5px] object-contain relative hidden md:block"
            src={`${baseUrl}${
              dataDetail?.poster_path || dataDetail?.backdrop_path
            }`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={"modal image"}
          />
          {isShowSeatPickerModal && (
            <SeatPickerModal
              selectedSeats={selectedSeats}
              setSeatRowArray={setSeatRowArray}
              setIsShowOrderFormModal={setIsShowOrderFormModal}
            />
          )}
        </div>
        <div className="flex-1">
          <div className=" px-[5%]">
            <div className="title mb-[20px] z-[5] w-full bg-[rgba(57,56,56,0.16)]">
              <div className="flex flex-col justify-start gap-[5px] h-full items-start mt-[10px] md:mt-[20px]">
                <span className=" text-white font-semibold text-[34px]">
                  {dataDetail?.title || dataDetail?.name}
                </span>
                <div className=" flex gap-[10px] items-center md:flex-col md:items-start">
                  <span className=" text-white text-[26px]">
                    {convertDateFormat(dataDetail?.release_date ?? "")}
                  </span>{" "}
                  <div className=" px-[10px] py-[5px] rounded-[5px] bg-[rgba(187,186,186,0.44)] text-white font-semibold text-[24px]">
                    <span>{dataDetail?.original_language}</span>
                  </div>
                </div>
              </div>
            </div>
            <SeatPicker
              seatRowArray={seatRowArray}
              setSeatRowArray={setSeatRowArray}
            />
            <div className=" w-full flex justify-center items-center">
              <div className="rounded-[5px] relative w-[250px] h-[450px]">
                <Image
                  className="rounded-[5px] object-contain"
                  src={`${baseUrl}${
                    dataDetail?.poster_path || dataDetail?.backdrop_path
                  }`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={"modal image"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShowOrderFormModal && (
        <OrderForm
          isShowOrderFormModal={isShowOrderFormModal}
          setIsShowOrderFormModal={setIsShowOrderFormModal}
          purchasePrice={purchasePrice}
          setIsShowConfirmModal={setIsShowConfirmModal}
        />
      )}
      {isShowConfirmModal && (
        <ConfirmModal
          isShowConfirmModal={isShowConfirmModal}
          setIsShowOrderFormModal={setIsShowOrderFormModal}
          setIsShowConfirmModal={setIsShowConfirmModal}
        />
      )}
    </>
  );
};

export default Modal;
