"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const InsightsHero = () => {
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
        ? "/images/insights/insights-img-01.png" /* Mobile */
        : "/images/insights/insights-img-02.png"; /* Desktop */

    return (
        <section className="insights-hero">
            <div className="insights-hero__container _container">
                <div className="insights-hero__body">
                    <div className="insights-hero__content">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="insights-hero__title">
                            <span>Market</span>
                            Insights and <br /> Research
                        </motion.h1>
                        <img src={bgImage} alt="insights" className="insights-hero__image" />
                    </div>
                    <div className="insights-hero__circle">
                        <img src="/images/services/circle.svg" alt="circle" />
                        <img src="/images/services/arrow.svg" alt="arrow" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InsightsHero;