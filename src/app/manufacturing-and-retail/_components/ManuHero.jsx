"use client";
import React, { useState, useEffect } from "react";
import "@/styles/areas.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ManuHero = () => {

    return (
        <>
            <section className="area-hero _manu">
                <div className="area-hero__container _container">
                    <div className="area-hero__body">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="area-hero__title">
                            Manufacturing <br /> and Retail
                        </motion.h1>
                        <div className="area-hero__circle">
                            <img src="/images/services/circle.svg" alt="circle" />
                            <img src="/images/services/arrow.svg" alt="arrow" />
                        </div>
                        <div className="area-hero__image _manu">
                            <img src="/images/areas/area-hero-desc-03.png" alt="image" className="img-01" />
                            <img src="/images/areas/area-hero-desc-03.png" alt="image" className="img-02" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ManuHero;
