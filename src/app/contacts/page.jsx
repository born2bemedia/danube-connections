import React from "react";
import "@/styles/contacts.scss";
import { Lato, Manrope } from "next/font/google";
import ContactsHero from "./_components/ContactsHero";
import ContactsDetails from "./_components/ContactsDetails";
import ContactLast from "./_components/ContactLast";

export const metadata = {
  title: "Contacts | Danube Connections",
  description:
    "Contact Danube Connections for inquiries, support, or collaboration. Our contact information includes phone, email, and addresses.",
  openGraph: {
    title: "Contacts | Danube Connections",
    description:
      "Contact Danube Connections for inquiries, support, or collaboration. Our contact information includes phone, email, and addresses.",
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

const Contacts = () => {
  return (
    <div className={`${lato.variable} ${manrope.variable}`}>
      <ContactsHero />
      <ContactsDetails />
      <ContactLast />
    </div>
  );
};

export default Contacts;
