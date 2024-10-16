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
                        <img src="images/insights/insights-img-01.png" alt="image" className="img-05" />
                        <img src="/images/insights/float-img-01.png" alt="image" className="img-02" />
                        <img src="/images/insights/float-img-02.png" alt="image" className="img-03" />
                        <img src="/images/insights/float-img-03.png" alt="image" className="img-04" />
                    </div>
                    <div className="insights-hero__circle">
                        <img src="/images/services/circle.svg" alt="circle" />
                        <img src="/images/services/arrow.svg" alt="arrow" />
                    </div>
                </div>
            </div>
            <img src="/images/insights/insights-back-01.png" alt="image" className="img-01" />
        </section>
    );
};

export default InsightsHero;