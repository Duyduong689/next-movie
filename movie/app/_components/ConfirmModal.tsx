import React, { useEffect, FC, InputHTMLAttributes, useState } from "react";
import { Button, Col, Form, Input, Modal, Radio, Row, Select } from "antd";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isShowConfirmModal: boolean;
  setIsShowConfirmModal: (data: boolean) => void;
  setIsShowOrderFormModal: (data: boolean) => void;
}
const ConfirmModal: FC<InputProps> = ({
  isShowConfirmModal,
  setIsShowConfirmModal,
  setIsShowOrderFormModal,
}) => {
  const handleCancelConfirmModal = () => {
    setIsShowConfirmModal(false);
  };
  const handleCancel = () => {
    if (setIsShowOrderFormModal) setIsShowOrderFormModal(false);
  };
  return (
    <Modal
      centered
      open={isShowConfirmModal}
      onCancel={handleCancelConfirmModal}
      footer={null}
    >
      <div className="flex flex-col items-center justify-center">
        <span className="text-[20px] font-bold">CONGRATULATIONS!</span>
        <p className="text-[15px] font-semibold text-center mt-[30px] max-w-[337px]">
          Your’ve have successfully bought the tickets. Please, save it on your
          device and show before the entering to the theatre
        </p>
        <Button
          className="mt-[30px] w-[250px]"
          type="primary"
          danger
          onClick={() => {
            handleCancelConfirmModal();
            handleCancel();
          }}
        >
          Save tickets
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
