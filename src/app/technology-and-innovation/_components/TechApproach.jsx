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
import ArrowBtn from "@/icons/other/ArrowBtn";

const TechApproach = () => {
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
            title: "Needs <br/> Assessment",
            text: "Conduct a thorough analysis of your business challenges and objectives."
        },
        {
            number: "02",
            title: "Tailored Strategy <br /> Development",
            text: "Create customised strategies that align with your goals and address identified pain points."
        },
        {
            number: "03",
            title: "Implementation <br /> Support",
            text: "Provide hands-on support during the implementation of solutions, ensuring seamless integration."
        },
        {
            number: "04",
            title: "Monitoring and <br /> Optimization",
            text: "Continuously assess results and refine strategies for maximum impact."
        },
        {
            number: "05",
            title: "Partnership <br /> Cultivation",
            text: "Foster long-term relationships with key stakeholders to drive ongoing success."
        }
    ];

    return (
        <section className="approach">
            <div className="approach__container _container">
                <div className="approach__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="approach__title">
                        <span>Our</span>
                        <br />
                        Approach
                    </motion.h2>
                    <div className="approach__content">
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

                        <Link href="#" className="approach__banner">
                            <h3 className="title">
                                Contact Us
                                <div className="icon"><ArrowBtn /></div>
                            </h3>
                            <div
                                className="image">
                                <img src="/images/areas/area-approach-01.png" alt="image" className="img-01" />
                                <img src="/images/areas/area-approach-02.png" alt="image" className="img-02" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechApproach;