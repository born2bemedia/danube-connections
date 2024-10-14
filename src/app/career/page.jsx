import React from "react";
import "@/styles/career.scss";
import { Lato, Manrope } from "next/font/google";
import CareerHero from "./_components/CareerHero";
import CareerValues from "./_components/CareerValues";
import WeOffer from "./_components/WeOffer";
import ApplyJob from "./_components/ApplyJob";
import JobPopup from "@/components/JobPopup";

export const metadata = {
  title: "Career | Danube Connections",
  description:
    "Explore career opportunities at Danube Connections. Join our team to develop your skills in a dynamic environment focused on international business growth.",
  openGraph: {
    title: "Career | Danube Connections",
    description:
      "Explore career opportunities at Danube Connections. Join our team to develop your skills in a dynamic environment focused on international business growth.",
    //images: "/images/meta.png",
  },
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--font-lato",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "800"],
  variable: "--font-manrope",
});

const page = () => {
  return (
    <div className={`${lato.variable} ${manrope.variable}`}>
      <CareerHero />
      <CareerValues />
      <WeOffer />
      <ApplyJob />
      <JobPopup />
    </div>
  );
};

export default page;
