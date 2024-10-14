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

const FinanceApproach = () => {
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
            title: "In-Depth Analysis",
            text: "Assessing your current financial practices and investment strategies to pinpoint areas for improvement."
        },
        {
            number: "02",
            title: "Customised Solutions",
            text: "Collaborating with your team, we design tailored strategies that align with your business objectives and regulatory requirements."
        },
        {
            number: "03",
            title: "Expert Guidance",
            text: "Providing insights and support throughout the implementation process, ensuring seamless integration of new strategies and technologies."
        },
        {
            number: "04",
            title: "Performance Tracking",
            text: "Continuously monitoring your financial performance, adjusting strategies based on market conditions and organisational goals."
        },
        {
            number: "05",
            title: "Network Development",
            text: "Extensively networking to connect you with potential investors, partners, and opportunities for collaboration."
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

export default FinanceApproach;