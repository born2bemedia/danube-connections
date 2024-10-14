"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ContactLast = () => {
  return (
    <section className="contact-last">
      <div className="_container">
        <div
          className="contact-last__body"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Business Inquiries & Partnerships
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              For collaboration or partnership opportunities, please reach out
              to us at the contact details above.
            </motion.p>
          </div>
          <Image
            className="hero-mob"
            src="/images/contacts/contactLastMob.png"
            width={490}
            height={420}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactLast;
