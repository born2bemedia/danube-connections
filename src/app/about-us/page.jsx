import React from "react";
import "@/styles/about.scss";
import { Lato, Manrope } from "next/font/google";
import AboutHero from "./_components/AboutHero";
import WhatWeOffer from "./_components/WhatWeOffer";
import CallToAction from "../services/[slug]/_components/CallToAction";
import AboutText from "./_components/AboutText";
import AboutTeam from "./_components/AboutTeam";

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
  text: "Need Supply <span>Assistance?</span>",
  buttonText: "Contact Us",
};

const AboutUs = () => {
  return (
    <div className={`${lato.variable} ${manrope.variable}`}>
      <AboutHero />
      <WhatWeOffer />
      <AboutTeam />
      <AboutText />
      <CallToAction callToAction={callToAction} />
    </div>
  );
};

export default AboutUs;
