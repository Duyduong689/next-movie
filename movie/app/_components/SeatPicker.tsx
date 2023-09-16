"use client";
import React, { useEffect, FC, InputHTMLAttributes, useState } from "react";
import {
  datePickerArray,
  seatPickerArray,
  timePickerArray,
} from "../_constants/constants";
import { TabletFilled } from "@ant-design/icons";
import { SeatRow, SelectedSeat, SelectedSeatView } from "../_utils/interfaces";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  setSelectedSeats: (data: SelectedSeatView[]) => void;
  seatRowArray: SeatRow[];
  setSeatRowArray: (data: SeatRow[]) => void;
}
const SeatPicker: FC<InputProps> = ({
  setSelectedSeats,
  seatRowArray,
  setSeatRowArray,
}) => {
  const handleSelectSeat = (data: SelectedSeat) => {
    if (setSeatRowArray)
      setSeatRowArray((prev: SeatRow[]) => {
        prev[data.seatRowIndex].array[data.seatIndex].value =
          prev[data.seatRowIndex].array[data.seatIndex].value == 1 ? 2 : 1;
        return [...prev];
      });
  };
  return (
    <div className=" flex flex-col items-center gap-[40px] justify-center">
      <div className="date-picker flex flex-col items-center w-[60%] text-white">
        <span className=" text-[25px] ">Date</span>
        <ul className=" flex gap-[23px] mt-[34px]">
          {datePickerArray.map((item) => (
            <li
              className=" cursor-pointer bg-[#0b0b0b] px-[8px] py-[10px] rounded-[20px]"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
        <hr className=" w-full h-1 mt-[52px]" />
      </div>
      <div className="date-picker flex flex-col items-center w-[80%] text-white">
        <span className=" text-[25px] ">Time</span>
        <ul className=" flex gap-[23px] mt-[34px]">
          {timePickerArray.map((item) => (
            <li
              className=" cursor-pointer bg-[#0b0b0b] px-[20px] py-[5px] rounded-[20px]"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
        <hr className=" w-full h-1 mt-[52px]" />
      </div>
      <div className="seats flex flex-col items-center gap-[5px] ">
        <div
          className=" w-[330px] h-[70px] border-solid border-[5px] "
          style={{
            borderRadius: "50%/50px 50px 0 0",
            borderColor: "#ef4444 transparent transparent transparent",
          }}
        ></div>
        {seatRowArray &&
          seatRowArray.map((seatArray, seatRowIndex) => {
            return (
              <div key={seatRowIndex} className="flex gap-[5px]">
                <span className="text-white mr-[5px]">{seatArray.name}</span>
                {seatArray.array.map((seat, seatIndex) => {
                  return (
                    <div
                      key={seatIndex}
                      className={`${seat.value == -1 ? "invisible" : ""}`}
                    >
                      <TabletFilled
                        className={` text-[20px] ${
                          seat.value == 1
                            ? "text-white hover:text-red-500 cursor-pointer"
                            : seat.value == 2
                            ? "text-red-500"
                            : "text-black"
                        } `}
                        onClick={() => {
                          if (seat.value != 0)
                            handleSelectSeat({ seatRowIndex, seatIndex });
                        }}
                      />
                    </div>
                  );
                })}
                <span className=" ml-[5px]">{seatArray.name}</span>
              </div>
            );
          })}
        <ul className=" flex justify-around w-full mt-[10px]">
          <li className=" flex gap-[10px] ">
            <TabletFilled className="text-[15px] text-white" />
            <span className="text-white">Available</span>
          </li>
          <li className=" flex gap-[10px] ">
            <TabletFilled className="text-[15px]" />
            <span className="text-white">Booked</span>
          </li>
          <li className=" flex gap-[10px] ">
            <TabletFilled className=" text-[15px] text-red-500" />
            <span className="text-white">Selected</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SeatPicker;
