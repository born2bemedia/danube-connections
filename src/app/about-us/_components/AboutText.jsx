"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const AboutText = () => {
  return (
    <section className="about-text">
      <div className="about-text__container _container">
        <div className="about-text__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="about-text__text"
          >
            It is your comprehensive support, offering expertise at every stage
            of your business growth. From identifying opportunities to
            implementing tailored strategies, we ensure your business thrives in
            competitive markets. With specialists in every key area, we can
            address all your business needs, helping you achieve long-term
            success.
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutText;
