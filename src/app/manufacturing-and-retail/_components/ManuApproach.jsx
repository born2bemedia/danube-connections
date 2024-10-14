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

const ManuApproach = () => {
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
            title: "Comprehensive <br/> Assessment",
            text: "Conducting a thorough analysis of your existing operations, identifying specific challenges and opportunities for improvement."
        },
        {
            number: "02",
            title: "Collaborative Strategy <br /> Development",
            text: "Working closely with your team to create tailored strategies that align with your business goals and industry requirements."
        },
        {
            number: "03",
            title: "Implementation <br/> and Support",
            text: "Assisting in executing the proposed strategies, providing ongoing support to ensure successful integration and adoption."
        },
        {
            number: "04",
            title: "Continuous Monitoring <br/> and Optimization",
            text: "Monitoring performance metrics and industry trends, making adjustments as needed to ensure sustained improvement and competitiveness."
        },
        {
            number: "05",
            title: "Partnership Building",
            text: "Focusing on fostering long-term relationships with vendors and suppliers, enhancing your operational capabilities and resource access."
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

export default ManuApproach;