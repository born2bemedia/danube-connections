"use client";
import React, { useState, useEffect } from "react";
import "@/styles/areas.scss";
import { fadeInUp, fadeInDown } from "@/utils/animations";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const FinanceGaps = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Слайды
    const slides = [
        {
            title: "Regulatory <br /> Compliance",
            text: "Navigating complex regulations can hinder investment opportunities and operational efficiency."
        },
        {
            title: "Market <br /> Volatility",
            text: "Fluctuating markets create uncertainty, making it difficult for businesses to make informed investment decisions."
        },
        {
            title: "Access to <br/> Capital",
            text: "Many firms struggle to secure funding for growth or innovation due to limited access to investors."
        },
        {
            title: "Data <br/> Management",
            text: "Inefficient data handling can lead to missed opportunities and suboptimal decision-making."
        },
        {
            title: "Technology <br /> Integration",
            text: "Legacy systems can hinder the adoption of modern financial tools and analytics."
        },
    ];

    return (
        <section className="gaps">
            <div className="gaps__container _container">
                <div className="gaps__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="gaps__title">
                        <span>Industry</span>
                        <br />
                        Gaps
                    </motion.h2>
                    <div className="gaps__content">
                        {isMobile ? (
                            <Swiper
                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                                spaceBetween={15}
                                loop={true}
                                slidesPerView={2}
                                className="gaps-slider _finance">
                                {slides.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="gaps-slider__item">
                                            <div className="gaps-slider__wrapper">
                                                <h3
                                                    className="gaps-slider__title"
                                                    dangerouslySetInnerHTML={{ __html: slide.title }}
                                                />
                                                <div className="gaps-slider__text">{slide.text}</div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                slidesPerView={2}
                                className="gaps-slider">
                                {slides.map((slide, index) => (
                                    <div className="gaps-slider__item" key={index}>
                                        <div className="gaps-slider__wrapper">
                                            <h3
                                                className="gaps-slider__title"
                                                dangerouslySetInnerHTML={{ __html: slide.title }}
                                            />
                                            <div className="gaps-slider__text">{slide.text}</div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinanceGaps;