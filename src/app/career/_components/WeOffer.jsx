"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const WeOffer = ({ howWeDoThis }) => {
  return (
    <section className="we-offer">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          We
          <span>Offer</span>
        </motion.h2>
        <div
          className="we-offer__body"
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
                slidesPerView: 4,
                spaceBetween: 36,
              },
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="we-offer__item"
              >
                <span style={{ fontFamily: "var(--font-manrope)" }}>01</span>
                <p>
                  Opportunities to advance your career in business growth
                  sectors
                </p>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="we-offer__item"
              >
                <span style={{ fontFamily: "var(--font-manrope)" }}>02</span>
                <p>Business communication and leadership training</p>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="we-offer__item"
              >
                <span style={{ fontFamily: "var(--font-manrope)" }}>03</span>
                <p>A diverse, vibrant team environment</p>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="we-offer__item"
              >
                <span style={{ fontFamily: "var(--font-manrope)" }}>04</span>
                <p>Exciting projects with a global reach</p>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WeOffer;
