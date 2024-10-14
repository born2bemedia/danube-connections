"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutTeam = () => {
  return (
    <section className="about-team">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Our
          <span>Team</span>
        </motion.h2>
        <div className="about-team__body">
          <Image src="/images/about/teamLine.png" width={601} height={277} />
          <Image src="/images/about/teamImage.png" width={401} height={406} />
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
