import React, { useEffect, FC, InputHTMLAttributes, useState } from "react";
import { SeatRow, SelectedSeatView } from "../_utils/interfaces";
import { TabletFilled, CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { seatPrice } from "../_constants/constants";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  selectedSeats?: SelectedSeatView[];
  setSeatRowArray?: (data: SeatRow[]) => void;
  setIsShowOrderFormModal?: (data: boolean) => void;
}
const SeatPickerModal: FC<InputProps> = ({
  selectedSeats,
  setSeatRowArray,
  setIsShowOrderFormModal,
}) => {
  const [price, setPrice] = useState<number>(0);
  const handleRemoveSelectedSeat = (data: SelectedSeatView) => {
    if (setSeatRowArray)
      setSeatRowArray((prev: SeatRow[]) => {
        prev[data.seatRowIndex].array[data.seatIndex].value =
          prev[data.seatRowIndex].array[data.seatIndex].value == 1 ? 2 : 1;
        return [...prev];
      });
  };
  useEffect(() => {
    if (selectedSeats && selectedSeats?.length > 0) {
      setPrice(selectedSeats.length * seatPrice);
    }
  }, [selectedSeats]);
  return (
    <div className="absolute w-full h-full flex items-center justify-center  z-30">
      <div className="text-white bg-black w-[409px] h-[524px] flex justify-start items-center flex-col py-[21px] px-[62px]">
        <span className=" text-[20px] uppercase">Selected seats</span>
        <ul className="flex flex-col max-h-[264px] gap-[24px] mt-[44px]">
          {selectedSeats?.map((seat, index) => {
            return (
              <li className="flex gap-[20px]" key={index}>
                <TabletFilled />
                <span>
                  {seat.rowName} row/ {seat.position} seat
                </span>
                <span>${seatPrice}</span>
                <CloseOutlined
                  className=" cursor-pointer text-[#787878]"
                  onClick={() => {
                    handleRemoveSelectedSeat(seat);
                  }}
                />
              </li>
            );
          })}
        </ul>
        <Button
          className="mt-[30px] w-[250px]"
          size="large"
          type="primary"
          danger
          onClick={() => {
            if (setIsShowOrderFormModal) setIsShowOrderFormModal(true);
          }}
        >
          Purchase({price}$)
        </Button>
        <span className="mt-[20px]">Time left to purchase: 10:15</span>
      </div>
    </div>
  );
};

export default SeatPickerModal;
