"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp, fadeInDown } from "@/utils/animations";
import { motion } from "framer-motion";

const HomeBest = () => {
    return (
        <section className="home-best">
            <div className="home-best__container _container">
                <div className="home-best__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="home-best__title">
                        <span>Empowered by</span>
                        <br />
                        the Best
                    </motion.h2>
                    <div className="home-best__wrapper">
                        <div className="home-best__items">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="home-best__item">
                                <h3 className="home-best__label">Xero</h3>
                                <div className="home-best__image"><img src="/images/home/home-best-01.png" alt="Xero" /></div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="home-best__item">
                                <h3 className="home-best__label">Crunchbase</h3>
                                <div className="home-best__image"><img src="/images/home/home-best-02.png" alt="Crunchbase" /></div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="home-best__item">
                                <h3 className="home-best__label">Zoominfor</h3>
                                <div className="home-best__image"><img src="/images/home/home-best-03.png" alt="Zoominfor" /></div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.4}
                                className="home-best__item">
                                <h3 className="home-best__label">Capterra</h3>
                                <div className="home-best__image"><img src="/images/home/home-best-04.png" alt="Capterra" /></div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.5}
                                className="home-best__item">
                                <h3 className="home-best__label">Thomasnet</h3>
                                <div className="home-best__image"><img src="/images/home/home-best-05.png" alt="Thomasnet" /></div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.6}
                                className="home-best__item">
                                <h3 className="home-best__label">Slack</h3>
                                <div className="home-best__image"><img src="/images/home/home-best-06.png" alt="Slack" /></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBest;