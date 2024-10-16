"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowBtn from "@/icons/other/ArrowBtn";

const InsightsMain = () => {

    return (
        <section className="insights-main">
            <div className="insights-main__container _container">
                <div className="insights-main__body">
                    <article className="insights-main__article">
                        <div className="insights-main__col-01">
                            <h2 className="insights-main__title">Investment Opportunities <br /> for Businesses 2025</h2>
                            <div className="insights-main__text">
                                Impact investing is gaining traction. Investors seek financial returns and measurable social and environmental impact. This trend reshapes the investment landscape and encourages businesses to adopt sustainable practices.
                            </div>
                            <Link href="/insights/investment-opportunities-for-businesses-2025" className="insights-main__link">
                                Read
                                <span className="icon"><ArrowBtn /></span>
                            </Link>
                        </div>
                        <div className="insights-main__col-02"><img src="/images/insights/insights-poster-01.png" alt="Investment Opportunities for Businesses 2025" /></div>
                        <img src="/images/insights/insights-poster-back-01.png" alt="image" className="img-01" />
                        <img src="/images/insights/insights-poster-back-04.png" alt="image" className="img-02" />
                    </article>

                    <article className="insights-main__article">
                        <div className="insights-main__col-01">
                            <h2 className="insights-main__title">Supply Chain Optimisation <br /> Tools and Technologies 2025</h2>
                            <div className="insights-main__text">
                                Explore the essential supply chain optimization tools and technologies for 2025, focusing on AI, blockchain, IoT, cloud solutions, and RPA to enhance efficiency and competitiveness in an evolving market.
                            </div>
                            <Link href="/insights/state-of-business-networking-2024" className="insights-main__link">
                                Read
                                <span className="icon"><ArrowBtn /></span>
                            </Link>
                        </div>
                        <div className="insights-main__col-02"><img src="/images/insights/insights-poster-02.png" alt="Supply Chain Optimisation Tools and Technologies 2025" /></div>
                        <img src="/images/insights/insights-poster-back-02.png" alt="image" className="img-01" />
                        <img src="/images/insights/insights-poster-back-05.png" alt="image" className="img-02" />
                    </article>

                    <article className="insights-main__article">
                        <div className="insights-main__col-01">
                            <h2 className="insights-main__title">State of Business Networking 2024</h2>
                            <div className="insights-main__text">
                                Explore the evolving landscape of business networking in 2024, highlighting key trends, challenges, and opportunities for growth.
                            </div>
                            <Link href="/insights/supply-chain-optimisation-tools-and-technologies-2025" className="insights-main__link">
                                Read
                                <span className="icon"><ArrowBtn /></span>
                            </Link>
                        </div>
                        <div className="insights-main__col-02"><img src="/images/insights/insights-poster-03.png" alt="State of Business Networking 2024" /></div>
                        <img src="/images/insights/insights-poster-back-03.png" alt="image" className="img-01" />
                        <img src="/images/insights/insights-poster-back-06.png" alt="image" className="img-02" />
                    </article>
                </div>
            </div>
        </section>
    );
};

export default InsightsMain;