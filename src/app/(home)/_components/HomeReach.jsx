"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

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
                        <img src="" alt="image" className="img-01" />
                        <img src="" alt="image" className="img-02" />
                    </div>
                    <div className="home-reach__row-03"></div>
                </div>
            </div>
        </section>
    );
};

export default HomeReach;