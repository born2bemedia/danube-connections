"use client";
import React, { useState, useEffect } from "react";
import "@/styles/areas.scss";
import { fadeInUp, fadeInDown } from "@/utils/animations";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TechGaps = () => {
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
            title: "Funding <br/> Shortages",
            text: "Difficulty in accessing capital for research and development."
        },
        {
            title: "Market <br/> Saturation",
            text: "Struggling to differentiate products in a crowded market."
        },
        {
            title: "Speed to <br/> Market",
            text: "The need to rapidly develop and launch new products."
        },
        {
            title: "Talent <br/> Acquisition",
            text: "Challenges in finding skilled professionals to drive innovation."
        },
        {
            title: "Regulatory <br/> Compliance",
            text: "Navigating complex regulations in tech and innovation."
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
                                className="gaps-slider">
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

export default TechGaps;