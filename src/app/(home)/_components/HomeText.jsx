"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const HomeText = () => {
    return (
        <section className="home-text">
            <div className="home-text__container _container">
                <div className="home-text__body">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="home-text__text">
                        When you think of international growth, what do you need? Reliable suppliers, skilled talent, and valuable partnerships. This is where we come in — delivering hands-on results by connecting you with the right people and opportunities while saving your time and resources.
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeText;