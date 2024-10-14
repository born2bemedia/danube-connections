"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="_container">
        <div
          className="about-hero__body"
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
              How We Assist
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Your Business <br />
              Growth
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
            <Image src="/images/about/heroImage.png" width={480} height={480} />
            <Image src="/images/about/spheres.png" width={205} height={437} />
          </motion.div>
        </div>
        <Image
          className="back"
          src="/images/about/heroBack.png"
          width={633}
          height={645}
        />
      </div>
      <Image
        className="hero-mob"
        src="/images/about/heroMob.png"
        width={490}
        height={420}
      />
    </section>
  );
};

export default AboutHero;
