"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const CareerHero = () => {
  return (
    <section className="career-hero">
      <div className="_container">
        <div
          className="career-hero__body"
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
              Career
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              If you're passionate about business growth, innovation, and ready
              for a dynamic career, join our team!
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
              src="/images/career/heroImage.png"
              width={480}
              height={480}
            />
            <Image src="/images/career/spheres.png" width={257} height={450} />
          </motion.div>
        </div>
        <Image
          className="back"
          src="/images/career/heroBack.png"
          width={550}
          height={540}
        />
      </div>
      <Image
        className="hero-mob"
        src="/images/career/heroMob.png"
        width={490}
        height={420}
      />
    </section>
  );
};

export default CareerHero;
