import React from "react";
import { Lato, Manrope } from "next/font/google";
import "@/styles/areas.scss";
import AreasHero from "./_components/AreasHero";
import CallToAction from "../services/[slug]/_components/CallToAction";
import PagesLoop from "./_components/PagesLoop";

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

const callToAction = {
  text: "Need <span>Direct Assistance?</span>",
  buttonText: "Contact Us",
};

const AreasOfExpertise = () => {
  return (
    <div className={`${lato.variable} ${manrope.variable}`}>
      <AreasHero />
      <PagesLoop />
      <CallToAction callToAction={callToAction} />
    </div>
  );
};

export default AreasOfExpertise;
