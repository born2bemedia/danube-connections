"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import JobButton from "@/components/JobButton";

const ApplyJob = () => {
  return (
    <section className="apply-job">
      <div className="_container">
        <div
          className="apply-job__body"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          <div className="col-01">
            <Image src={"/images/career/apply2.png"} width={492} height={262} />
            <Image src={"/images/career/apply1.png"} width={460} height={367} />
          </div>
          <div className="col-02">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              If You
              <span>Are</span>
            </motion.h2>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <li>
                Interested in international business and investment strategies
              </li>
              <li>Proficient in English and/or other languages</li>
              <li>Eager to learn and grow across various industries</li>
              <li>
                Join us for full-time, part-time, or freelance opportunities!
              </li>
            </motion.ul>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Join us for full-time, part-time, or freelance opportunities!
            </motion.p>
            <JobButton text="Apply Now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyJob;
