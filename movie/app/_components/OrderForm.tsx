"use client";
import React, { useEffect, FC, InputHTMLAttributes, useState } from "react";
import { Button, Col, Form, Input, Modal, Radio, Row, Select } from "antd";
import { CreditCardOutlined } from "@ant-design/icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isShowOrderFormModal?: boolean;
  setIsShowOrderFormModal: (data: boolean) => void;
  setIsShowConfirmModal: (data: boolean) => void;

  purchasePrice: number;
}
const OrderForm: FC<InputProps> = ({
  isShowOrderFormModal,
  setIsShowOrderFormModal,
  setIsShowConfirmModal,
  purchasePrice,
}) => {
  const handleCancel = () => {
    if (setIsShowOrderFormModal) setIsShowOrderFormModal(false);
  };

  return (
    <>
      <Modal open={isShowOrderFormModal} onCancel={handleCancel} footer={null}>
        <Form>
          <div className="text-center mb-[20px]">
            <h2 className=" uppercase text-[24px] font-bold">order</h2>
          </div>
          <ul className="flex flex-col gap-[10px]">
            <li className="flex flex-col gap-[5px]">
              <span className="text-[15px] font-semibold">
                Name and surname
              </span>
              <Input name="name" className=" w-full" />
            </li>
            <li className="flex flex-col gap-[5px]">
              <span className="text-[15px] font-semibold">Email</span>
              <Input name="email" />
            </li>
            <li className="flex items-end gap-[20px]">
              <div className="flex-1 flex flex-col gap-[5px]">
                <span className="text-[15px] font-semibold">Promo</span>
                <Input name="promo" />
              </div>
              <Button className="w-[100px]">Apply</Button>
            </li>
            <li className="flex flex-col gap-[5px]">
              <span className="text-[15px] font-semibold">Cell phone</span>
              <div className="flex gap-[10px]">
                <Input
                  className="flex-[20%]"
                  name="phonePrefix"
                  type="number"
                />
                <Form.Item
                  name="phoneCount"
                  className="dropdownPhone flex-[20%]"
                >
                  <Select
                    options={[
                      {
                        value: 5,
                        label: "5",
                      },
                      {
                        value: 10,
                        label: "10",
                      },
                      {
                        value: 15,
                        label: "15",
                      },
                      {
                        value: 20,
                        label: "20",
                      },
                    ]}
                  />
                </Form.Item>
                <Input className="flex-[60%]" name="phone" type="number" />
              </div>
            </li>
            <li className="flex flex-col gap-[5px]">
              <span className="text-[15px] font-semibold">Payment</span>
              <Form.Item name="payment" className="dropdownPayment flex-[20%]">
                <Select
                  options={[
                    {
                      value: "visaBankCard",
                      label: "Visa bank card",
                    },
                    {
                      value: "paypal",
                      label: "Paypal",
                    },
                  ]}
                />
              </Form.Item>
            </li>
            <li className="flex flex-col gap-[5px] mt-[20px]">
              <Input
                name="code"
                suffix={<CreditCardOutlined className=" text-[20px]" />}
              />
            </li>
          </ul>
          <div className=" text-center mt-[37px]">
            <Radio>
              <span>Remember card information</span>
            </Radio>
          </div>
          <div className=" flex justify-center mt-[31px]">
            <Button
              className="w-[250px]"
              type="primary"
              danger
              onClick={() => {
                setIsShowConfirmModal(true);
                handleCancel();
              }}
            >
              Purchase({purchasePrice}$)
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default OrderForm;
