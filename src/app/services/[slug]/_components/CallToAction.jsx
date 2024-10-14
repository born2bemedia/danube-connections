"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const CallToAction = ({ callToAction }) => {
  return (
    <section className="call-to-action">
      <div className="_container">
        <div
          className="call-to-action__body"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={{ fontFamily: "var(--font-manrope)" }}
              dangerouslySetInnerHTML={{ __html: callToAction.text }}
            />
            <Link href={"/contacts"}>Contact Us</Link>
          </div>
          <Image
            className="hero-mob"
            src="/images/services/callToActionMob.png"
            width={490}
            height={420}
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
