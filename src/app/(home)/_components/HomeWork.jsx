"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp, fadeInDown } from "@/utils/animations";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import ArrowBtn from "@/icons/other/ArrowBtn";

const HomeWork = () => {
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
            title: "Technology and Innovation",
            text: "Leading-edge companies focused on developing innovative solutions and seeking strategic partnerships to drive growth."
        },
        {
            number: "02",
            title: "Financial and Investment",
            text: "Banks, investment firms, and financial advisors looking to identify lucrative opportunities and foster valuable connections."
        },
        {
            number: "03",
            title: "Marketing Services",
            text: "Marketing agencies and consulting firms that connect with top talent and resources to enhance their client offerings."
        },
        {
            number: "04",
            title: "Manufacturing and Retail",
            text: "Manufacturers and retailers aiming to optimise operations, improve supply chain efficiency, and build reliable supplier networks."
        }
    ];

    return (
        <section className="home-work">
            <div className="home-work__container _container">
                <div className="home-work__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="home-work__title">
                        <span>We</span>
                        <br />
                        Work
                    </motion.h2>
                    <div className="home-work__content">
                        {isMobile ? (
                            <Swiper
                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                                spaceBetween={15}
                                loop={true}
                                className="home-work-slider">
                                {slides.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="home-work-slider__item">
                                            <div className="home-work-slider__wrapper">
                                                <div className="home-work-slider__col-01">
                                                    <div className="home-work-slider__number">{slide.number}</div>
                                                    <h3 className="home-work-slider__title">{slide.title}</h3>
                                                </div>
                                                <div className="home-work-slider__col-02">
                                                    <div className="home-work-slider__text">{slide.text}</div>
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
                                className="home-work-slider">
                                {slides.map((slide, index) => (
                                    <div className="home-work-slider__item" key={index}>
                                        <div className="home-work-slider__wrapper">
                                            <div className="home-work-slider__col-01">
                                                <div className="home-work-slider__number">{slide.number}</div>
                                                <h3 className="home-work-slider__title">{slide.title}</h3>
                                            </div>
                                            <div className="home-work-slider__col-02">
                                                <div className="home-work-slider__text">{slide.text}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        <Link href="/areas-of-expertise" className="home-work__banner">
                            <h3 className="title">
                                Explore Our Expertise
                                <div className="icon"><ArrowBtn /></div>
                            </h3>
                            <div className="image">
                                <img src="/images/home/home-work-02.png" alt="image" className="img-01" />
                                <img src="/images/home/home-work-03.png" alt="image" className="img-02" />
                                <img src="/images/home/home-work-01.png" alt="image" className="img-03" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeWork;