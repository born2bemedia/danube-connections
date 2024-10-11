import React from "react";
import "@/styles/services.scss";
import ServicesInnerHero from "./_components/ServicesInnerHero";
import servicesInner from "@/lib/services/servicesInner";
import { Lato, Manrope } from "next/font/google";
import HowDoThis from "./_components/HowDoThis";
import CallToAction from "./_components/CallToAction";
import SolutionsTabs from "./_components/SolutionsTabs";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--font-lato",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "800"],
  variable: "--font-manrope",
});

/*export async function generateMetadata({ params: { slug } }) {
    const serviceName = slug.replaceAll("-", "_");
  const serviceData = services[serviceName];
  
    return {
      title: serviceData.seo_title,
      description: serviceData.seo_description,
      openGraph: {
        title: serviceData.seo_title,
        description: serviceData.seo_description,
        images: "https://techfresco.com/images/meta.png",
      },
    };
  }*/

const ServiceInner = ({ params: { slug } }) => {
  const serviceName = slug.replaceAll("-", "_");
  const serviceData = servicesInner[serviceName];
  return (
    <div className={`${lato.variable} ${manrope.variable}`}>
      <ServicesInnerHero
        title={serviceData.title}
        description={serviceData.description}
      />
      <SolutionsTabs services={serviceData.services} />
      <HowDoThis howWeDoThis={serviceData.howWeDoThis} />
      <CallToAction callToAction={serviceData.callToAction} />
    </div>
  );
};

export default ServiceInner;
