"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const ContactsHero = () => {
  return (
    <section className="contacts-hero">
      <div className="_container">
        <div
          className="contacts-hero__body"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          <div>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Direct
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Communication <br />
              Channels
            </motion.h2>
            <div className="circle">
              <img src="/images/services/circle.svg" />
              <img src="/images/services/arrow.svg" />
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              src="/images/contacts/heroImage.png"
              width={480}
              height={480}
            />
            <Image
              src="/images/contacts/spheres.png"
              width={245}
              height={370}
            />
          </motion.div>
        </div>
      </div>
      <Image
        className="hero-mob"
        src="/images/contacts/heroMob.png"
        width={490}
        height={420}
      />
    </section>
  );
};

export default ContactsHero;
