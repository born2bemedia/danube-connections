"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp, fadeInDown } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowBtn from "@/icons/other/ArrowBtn";

const HomeInsights = () => {
    return (
        <section className="home-insights">
            <div className="home-insights__container _container">
                <div className="home-insights__body">
                    <div
                        className="home-insights__row-01">
                        <h2 className="home-insights__title">
                            <span>Our</span>
                            <br />
                            Insights
                        </h2>
                        <Link href="/insights" className="home-insights__more-link">More Insights</Link>
                    </div>
                    <div className="home-insights__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="home-insights__item">
                            <div className="home-insights__icon"><img src="/images/home/home-insights-icon-01.png" alt="image" /></div>
                            <h2 className="home-insights__label">Investment Opportunities for Businesses 2025</h2>
                            <img src="/images/home/home-insights-desc-01.png" alt="image" className="img-01" />
                            <Link href="/insights/investment-opportunities-for-businesses-2025" className="home-insights__link">
                                Open
                                <span className="icon">
                                    <ArrowBtn />
                                </span>
                            </Link>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="home-insights__item">
                            <div className="home-insights__icon"><img src="/images/home/home-insights-icon-02.png" alt="image" /></div>
                            <h2 className="home-insights__label">Supply Chain Optimisation Tools and Technologies 2025</h2>
                            <img src="/images/home/home-insights-desc-02.png" alt="image" className="img-01" />
                            <Link href="/insights/state-of-business-networking-2024" className="home-insights__link">
                                Open
                                <span className="icon">
                                    <ArrowBtn />
                                </span>
                            </Link>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="home-insights__item">
                            <div className="home-insights__icon"><img src="/images/home/home-insights-icon-03.png" alt="image" /></div>
                            <h2 className="home-insights__label">State of Business Networking 2024</h2>
                            <img src="/images/home/home-insights-desc-03.png" alt="image" className="img-01" />
                            <Link href="/insights/supply-chain-optimisation-tools-and-technologies-2025" className="home-insights__link">
                                Open
                                <span className="icon">
                                    <ArrowBtn />
                                </span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeInsights;