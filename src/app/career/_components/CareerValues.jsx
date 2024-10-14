"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const CareerValues = () => {
  return (
    <section className="our-values">
      <div className="_container">
        <div className="our-values__top">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Our
            <span>Values</span>
          </motion.h2>
        </div>
        <div
          className="our-values__body"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          <Swiper
            spaceBetween={36}
            slidesPerView={2}
            pagination={{ clickable: true }}
            breakpoints={{
              // For mobile, show only 1 slide per view
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
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
                className="our-values__item"
              >
                <Image src="/images/career/icon1.png" width={73} height={59} />
                <p>Continuous learning and development</p>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="our-values__item"
              >
                <Image src="/images/career/icon2.png" width={58} height={73} />
                <p>Embracing innovation and new technologies</p>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="our-values__item"
              >
                <Image src="/images/career/icon3.png" width={66} height={71} />
                <p>Collaborative and supportive culture</p>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CareerValues;
