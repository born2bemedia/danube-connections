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

export const metadata = {
  title: "Services | Danube Connections",
  description:
    "Explore our range of services at Danube Connections, including supply chain optimization, investment facilitation, talent acquisition, and customer introduction services designed to drive business success.",
  openGraph: {
    title: "Services | Danube Connections",
    description:
      "Explore our range of services at Danube Connections, including supply chain optimization, investment facilitation, talent acquisition, and customer introduction services designed to drive business success.",
    //images: "/images/meta.png",
  },
};

const Services = () => {
  return (
    <div className={`${lato.variable} ${manrope.variable}`}>
      <ServicesHero />
      <ServicesLoop />
    </div>
  );
};

export default Services;
