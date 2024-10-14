"use client";
import React, { useState, createContext, useContext } from "react";

const PopupsContext = createContext();

export const PopupsProvider = ({ children }) => {
  const [jobPopupDisplay, setJobPopupDisplay] = useState(false);
  const [orderPopupDisplay, setOrderPopupDisplay] = useState(false);
  const [consultationPopupDisplay, setConsultationPopupDisplay] = useState(false);
  const [currentJob, setCurrentJob] = useState(false);
  const [currentService, setCurrentService] = useState(null);

  return (
    <PopupsContext.Provider
      value={{
        jobPopupDisplay,
        setJobPopupDisplay,
        orderPopupDisplay,
        setOrderPopupDisplay,
        consultationPopupDisplay,
        setConsultationPopupDisplay,
        currentService,
        setCurrentService,
        currentJob,
        setCurrentJob,
      }}
    >
      {children}
    </PopupsContext.Provider>
  );
};

export const usePopup = () => useContext(PopupsContext);
