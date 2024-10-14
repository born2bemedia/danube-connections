"use client";
import React from "react";
import { usePopup } from "@/context/PopupsContext";
import ExploreIcon from "@/icons/ExploreIcon";

function JobButton({ className, text, service }) {
  const { setJobPopupDisplay } = usePopup();

  const orderPopupOpen = () => {
    setJobPopupDisplay(true);
  };
  return (
    <>
      <button className={className} onClick={() => orderPopupOpen()}>
        <span>{text}</span>
      </button>
    </>
  );
}

export default JobButton;
