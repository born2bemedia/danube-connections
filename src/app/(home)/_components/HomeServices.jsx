"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import ArrowBtn from "@/icons/other/ArrowBtn";

const NewHomeServices = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Новые слайды
    const slides = [
        {
            number: "/images/home/home-services-01.svg",
            title: "Supplier Identification and Connection",
            text: "We identify and connect your business with top-tier suppliers that meet rigorous standards for quality, cost-effectiveness, and reliability. By vetting and building relationships with suppliers aligned to your operational needs, we streamline your supply chain and reduce risks, ensuring long-term value and consistency in business operations."
        },
        {
            number: "/images/home/home-services-02.svg",
            title: "Marketing Personnel and Employee Recruitment",
            text: "We specialise in sourcing and recruiting talented marketing professionals and key employees who meet industry standards and are a cultural fit for your organisation. Whether you need executives, digital marketing experts, or specialised personnel, we ensure that each candidate aligns with your business objectives, driving growth and innovation from within."
        },
        {
            number: "/images/home/home-services-03.svg",
            title: "Customer Introduction",
            text: "Our service connects your business with potential customers strategically aligned with your market and business objectives. Targeting key audiences and decision-makers, we help you expand your customer base, drive revenue growth, and establish long-lasting business relationships."
        },
        {
            number: "/images/home/home-services-04.svg",
            title: "Investment Opportunity Identification",
            text: "We actively seek and evaluate real estate investment opportunities in Hungary, focusing on high-return prospects and strategic fit. By conducting in-depth market analysis and due diligence, we ensure that each opportunity aligns with your financial goals, offering profitable and sustainable investments."
        },
        {
            number: "/images/home/home-services-05.svg",
            title: "On-going Strategic Networking and Partnership Development",
            text: "We facilitate the development of strategic partnerships with local businesses, investors, and key industry stakeholders to enhance your market presence and business potential. Our ongoing networking efforts ensure that you continuously build relationships that drive collaboration, innovation, and long-term success in both local and international markets."
        }
    ];

    return (
        <section className="home-services">
            <div className="home-services__container _container">
                <div className="home-services__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="home-services__title"
                    >
                        <span>Explore</span>
                        Our Services
                    </motion.h2>
                    <div className="home-services__content">
                        {isMobile ? (
                            <Swiper
                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                                spaceBetween={15}
                                loop={true}
                                className="home-services-slider"
                            >
                                {slides.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="home-services-slider__item">
                                            <div className="home-services-slider__wrapper">
                                                <h3 className="home-services-slider__title">{slide.title}</h3>
                                                <div className="home-services-slider__text">{slide.text}</div>
                                                <Link href="#" className="home-services-slider__link">
                                                    Learn More
                                                    <span className="icon">
                                                        <ArrowBtn />
                                                    </span>
                                                </Link>
                                                <div className="home-services-slider__number"><img src={`${slide.number}`} alt={`Number ${slide.number}`} /></div>
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
                                className="home-services-slider"
                            >
                                {slides.map((slide, index) => (
                                    <div className="home-services-slider__item" key={index}>
                                        <div className="home-services-slider__wrapper">
                                            <h3 className="home-services-slider__title">{slide.title}</h3>
                                            <div className="home-services-slider__text">{slide.text}</div>
                                            <Link href="#" className="home-services-slider__link">
                                                Learn More
                                                <span className="icon">
                                                    <ArrowBtn />
                                                </span>
                                            </Link>
                                            <div className="home-services-slider__number"><img src={`${slide.number}`} alt={`Number ${slide.number}`} /></div>
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

export default NewHomeServices;