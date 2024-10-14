"use client";
import React, { useState, useEffect } from "react";
import "@/styles/areas.scss";
import { fadeInUp, fadeInDown } from "@/utils/animations";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const MarketingApproach = () => {
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
            number: "01",
            title: "Comprehensive <br /> Market Insights",
            text: "Target market analysis and identification of the most effective marketing strategies."
        },
        {
            number: "02",
            title: "Optimised Lead <br/> Generation",
            text: "Tailored approaches to attract and engage high-value clients using data-driven methods."
        },
        {
            number: "03",
            title: "Technology Integration",
            text: "Cutting-edge marketing tools, from CRM systems to advanced marketing automation."
        },
        {
            number: "04",
            title: "Custom Talent Solutions",
            text: "Sourcing specialised marketing talent and training existing teams for peak performance."
        },
        {
            number: "05",
            title: "Performance Monitoring <br/> and Adjustments",
            text: "Ongoing analysis and refinement of your strategies to ensure long-term success."
        },
    ];

    return (
        <section className="approach">
            <div className="approach__container _container">
                <div className="approach__body">
                    <div
                        className="approach__top">
                        <h2 className="approach__title">
                            <span>Our</span>
                            <br />
                            Approach
                        </h2>
                        <Link href="/contacts/" className="approach__link">Contact Us</Link>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="approach__content">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="approach__banner">
                            <div className="images">
                                <img src="/images/areas/area-approach-01.png" alt="image" className="img-01" />
                                <img src="/images/areas/area-approach-02.png" alt="image" className="img-02" />
                            </div>
                        </motion.div>
                        {isMobile ? (
                            <Swiper
                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                                spaceBetween={15}
                                loop={true}
                                className="approach-slider">
                                {slides.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="approach-slider__item">
                                            <div className="approach-slider__wrapper">
                                                <div className="approach-slider__col-01">
                                                    <div className="approach-slider__number">{slide.number}</div>
                                                    <h3
                                                        className="approach-slider__title"
                                                        dangerouslySetInnerHTML={{ __html: slide.title }}
                                                    />
                                                </div>
                                                <div className="approach-slider__col-02">
                                                    <div className="approach-slider__text">{slide.text}</div>
                                                </div>
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
                                className="approach-slider">
                                {slides.map((slide, index) => (
                                    <div className="approach-slider__item" key={index}>
                                        <div className="approach-slider__wrapper">
                                            <div className="approach-slider__col-01">
                                                <div className="approach-slider__number">{slide.number}</div>
                                                <h3
                                                    className="approach-slider__title"
                                                    dangerouslySetInnerHTML={{ __html: slide.title }}
                                                />
                                            </div>
                                            <div className="approach-slider__col-02">
                                                <div className="approach-slider__text">{slide.text}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MarketingApproach;