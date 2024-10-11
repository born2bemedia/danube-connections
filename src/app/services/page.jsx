import React from "react";
import "@/styles/services.scss";
import ServicesHero from "./_components/ServicesHero";
import { Lato, Manrope } from "next/font/google";
import ServicesLoop from "./_components/ServicesLoop";

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

const Services = () => {
  return (
    <div className={`${lato.variable} ${manrope.variable}`}>
      <ServicesHero />
      <ServicesLoop />
    </div>
  );
};

export default Services;
