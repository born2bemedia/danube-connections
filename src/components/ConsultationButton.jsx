"use client";
import React from "react";
import { usePopup } from "@/context/PopupsContext";
import ExploreIcon from "@/icons/ExploreIcon";

function ConsultationButton({ className }) {
  const { setConsultationPopupDisplay } = usePopup();

  const orderPopupOpen = () => {
    setConsultationPopupDisplay(true);
  };
  return (
    <>
      <button className={className} onClick={() => orderPopupOpen()}>
        <span>Contact Us</span>
      </button>
    </>
  );
}

export default ConsultationButton;
