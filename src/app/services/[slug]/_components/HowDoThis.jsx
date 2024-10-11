"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HowDoThis = ({ howWeDoThis }) => {
  return (
    <section className="how-do-this">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          How we
          <span>Do This</span>
        </motion.h2>
        <div
          className="how-do-this__body"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          <Swiper
            spaceBetween={36}
            slidesPerView={2}
            pagination={{ clickable: true }}
            breakpoints={{
              // For mobile, show only 1 slide per view
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 5,
                spaceBetween: 36,
              },
            }}
            modules={[Pagination]}
          >
            {howWeDoThis.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="how-do-this__item"
                >
                  <span style={{ fontFamily: "var(--font-manrope)" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p>{item}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HowDoThis;
