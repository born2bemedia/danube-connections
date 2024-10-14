"use client";
import React from "react";
import { usePopup } from "@/context/PopupsContext";
import ExploreIcon from "@/icons/ExploreIcon";

function OrderButton({ className, text, service }) {
  const { setOrderPopupDisplay, setCurrentService } = usePopup();

  const orderPopupOpen = () => {
    setCurrentService(service);
    setOrderPopupDisplay(true);
  };
  return (
    <>
      <button className={className} onClick={() => orderPopupOpen()}>
        <span>{text}</span>
        <ExploreIcon />
      </button>
    </>
  );
}

export default OrderButton;
