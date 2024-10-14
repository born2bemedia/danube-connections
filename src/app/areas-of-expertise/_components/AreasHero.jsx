"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const AreasHero = () => {
  return (
    <section className="areas-hero">
      <div className="_container">
        <div
          className="areas-hero__body"
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
              Areas of Expertise
            </motion.h1>
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
              src="/images/areas/AreasOfExpertise.png"
              width={470}
              height={470}
            />
            <Image
              src="/images/areas/spheres.png"
              width={502}
              height={407}
            />
          </motion.div>
        </div>
      </div>
      <Image className="hero-mob" src="/images/areas/heroMob.png" width={490} height={420} />
    </section>
  );
};

export default AreasHero;
