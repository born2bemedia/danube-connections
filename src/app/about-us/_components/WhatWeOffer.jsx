"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const WhatWeOffer = () => {
  return (
    <section className="what-we-offer" id="what-we-offer">
      <div className="_container">
        <div className="what-we-offer__top">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            What
            <span>We Offer</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Targeted solutions across supply chain optimization, partnership
            development, <br />
            investment strategy, marketing personnel acquisition, and customer
            engagement <br />
            to drive growth, streamline operations, and enhance business
            performance.
          </motion.p>
        </div>
        <div
          className="what-we-offer__body"
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
                className="what-we-offer__item"
              >
                <Image src="/images/about/icon1.png" width={60} height={60} />
                <p>Innovation</p>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="what-we-offer__item"
              >
                <Image src="/images/about/icon2.png" width={60} height={60} />
                <p>Precision</p>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="what-we-offer__item"
              >
                <Image src="/images/about/icon3.png" width={60} height={60} />
                <p>Adaptability</p>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="what-we-offer__item"
              >
                <Image src="/images/about/icon4.png" width={60} height={60} />
                <p>Transparency</p>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
