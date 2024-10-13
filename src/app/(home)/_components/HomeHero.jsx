"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowBtn from "@/icons/other/ArrowBtn";

const HomeHero = () => {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const bgImage = isMobile
    /////? "/images/home/home-back-03.webp" /* Mobile */
    /////: "/images/home/home-img-01.webp"; /* Desktop */

    return (
        <section className="home-hero">
            <div className="home-hero__container _container">
                <div className="home-hero__body">
                    <div className="home-hero__col-01">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="home-hero__title">
                            <span>Bridging</span> <br />
                            Business,People, <br /> and Opportunity
                        </motion.h1>
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="home-hero__subtitle">
                            Empowering Growth through Strategic <br /> Partnerships and Tailored Solutions
                        </motion.h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="wrapper">
                            <Link href="#" className="home-hero__link">
                                Learn More
                                <ArrowBtn />
                            </Link>
                        </motion.div>

                    </div>
                    <div className="home-hero__col-02">
                        <img src="/images/home/home-img-01.png" alt="image" className="img-01" />
                        {/* <img src="/images/home/home-img-02.png" alt="image" className="img-02" /> */}

                        <img src="/images/home/home-float-01.png" alt="icon" className="img-float-01" />
                        <img src="/images/home/home-float-02.png" alt="icon" className="img-float-02" />
                        <img src="/images/home/home-float-03.png" alt="icon" className="img-float-03" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;