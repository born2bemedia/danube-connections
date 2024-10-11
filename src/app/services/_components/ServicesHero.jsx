"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const ServicesHero = () => {
  return (
    <section className="services-hero">
      <div className="_container">
        <div
          className="services-hero__body"
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
              Solutions
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              to Grow Your <br />
              Business
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Targeted services that connect you with suppliers, <br />
              customers, talent, and investment opportunities to <br />
              help your business expand and succeed globally.
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
              src="/images/services/servicesHero.png"
              width={490}
              height={420}
            />
            <Image
              src="/images/services/sphere1.png"
              width={320}
              height={360}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
