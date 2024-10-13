"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp, fadeInDown } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeReach = () => {
    return (
        <section className="home-reach">
            <div className="home-reach__container _container">
                <div className="home-reach__body">
                    <div className="home-reach__row-01">
                        <h2 className="home-reach__title">
                            <span>Our</span>
                            <br />
                            Reach
                        </h2>
                        <Link href="#" className="home-reach__link">Get to Know Us</Link>
                    </div>
                    <div className="home-reach__row-02">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInDown}
                            custom={0.2}
                            className="img-01">
                            <img src="/images/home/home-reach-01.png" alt="image" />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="img-02">
                            <img src="/images/home/home-reach-02.png" alt="image" />
                        </motion.div>
                    </div>
                    <div className="home-reach__row-03">
                        <div className="home-reach__items">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="home-reach__item">
                                <div className="home-reach__top">
                                    <div className="home-reach__icon"><img src="/images/home/home-reach-icon-01.png" alt="icon" /></div>
                                    <h3 className="home-reach__label">Global Reach</h3>
                                </div>
                                <div className="home-reach__text">Connecting businesses across 40+ countries to unlock new market opportunities.</div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="home-reach__item">
                                <div className="home-reach__top">
                                    <div className="home-reach__icon"><img src="/images/home/home-reach-icon-02.png" alt="icon" /></div>
                                    <h3 className="home-reach__label">Strategic Network</h3>
                                </div>
                                <div className="home-reach__text">Partnering with 100+ global and local businesses to create strategic alliances that accelerate growth and market entry.</div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="home-reach__item">
                                <div className="home-reach__top">
                                    <div className="home-reach__icon"><img src="/images/home/home-reach-icon-03.png" alt="icon" /></div>
                                    <h3 className="home-reach__label">Expertise at Scale</h3>
                                </div>
                                <div className="home-reach__text">A dedicated team of 25 industry experts delivering tailored solutions for your growth.</div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.4}
                                className="home-reach__item">
                                <div className="home-reach__top">
                                    <div className="home-reach__icon"><img src="/images/home/home-reach-icon-04.png" alt="icon" /></div>
                                    <h3 className="home-reach__label">Agile Methodologies</h3>
                                </div>
                                <div className="home-reach__text">Agile project management allows us to deliver results 40% faster than traditional methods and adapt quickly    to customer needs.</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeReach;