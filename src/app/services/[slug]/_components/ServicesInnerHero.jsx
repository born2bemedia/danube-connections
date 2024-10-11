"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const ServicesInnerHero = ({ title, description }) => {
  return (
    <section className="services-inner-hero">
      <div className="_container">
        <div
          className="services-inner-hero__body"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          <div>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={{ fontFamily: "var(--font-manrope)" }}
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {description}
            </motion.p>
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
              src="/images/services/service1.png"
              width={480}
              height={480}
            />
            <Image
              src="/images/services/sphere1.png"
              width={320}
              height={360}
            />
          </motion.div>
        </div>
      </div>
      <Image
        className="hero-mob"
        src="/images/services/innerMob.png"
        width={490}
        height={420}
      />
    </section>
  );
};

export default ServicesInnerHero;
