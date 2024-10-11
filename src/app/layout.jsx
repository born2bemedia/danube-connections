import React from "react";
import { DM_Sans, Lato, Manrope } from "next/font/google";
import "@/styles/base.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
/* import Preloader from "@/components/Preloader"; */
/* import RequestPopup from "@/components/RequestPopup"; */
import { GoogleAnalytics } from "@next/third-parties/google";
import { PopupsProvider } from "@/context/PopupsContext";
/* import OrderPopup from "@/components/OrderPopup";
import ServicePopup from "@/components/ServicePopup"; */


/* const dmsans = DM_Sans({ subsets: ["latin"] }); */
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700", "900"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${dmsans.className} ${lato.className} ${manrope.className}`}>

        {/* <GoogleAnalytics gaId="" /> */}
        <PopupsProvider>
          {/* <Preloader /> */}
          <Header />
          <main className="site">{children}</main>
          <Footer />
         {/*  <OrderPopup />
          <ServicePopup /> */}
        </PopupsProvider>
      </body>
    </html>
  );
}; 