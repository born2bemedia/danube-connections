import React from "react";
import { Lato, Manrope } from "next/font/google";
import "@/styles/areas.scss";
import AreasHero from "./_components/AreasHero";
import CallToAction from "../services/[slug]/_components/CallToAction";
import PagesLoop from "./_components/PagesLoop";

export const metadata = {
  title: "Our Expertise | Danube Connections",
  description:
    "Find out what industries we work with and how we can help each one to grow and develop. Danube Connections - your strategic partner for growth and development.",
  openGraph: {
    title: "Our Expertise | Danube Connections",
    description:
      "Find out what industries we work with and how we can help each one to grow and develop. Danube Connections - your strategic partner for growth and development.",
    images: "https://danubestrategic.com/images/meta.png",
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
