"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ExploreIcon from "@/icons/ExploreIcon";
import services from "@/lib/services/services";

const ServicesLoop = () => {
  return (
    <section className="services-loop">
      <div className="_container">
        <div
          className="services-loop__body"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="service"
            >
              <h2
                style={{ fontFamily: "var(--font-manrope)" }}
                dangerouslySetInnerHTML={{ __html: service.title }}
              />
              <div
                className="service-details"
                style={{
                  backgroundImage: `url(/images/services/${service.pageLink}.png)`,
                }}
              >
                <div className="inner">
                  <img
                    src={`/images/services/${service.id}.svg`}
                    alt={service.title}
                  />
                  <div className="info">
                    <p>{service.description}</p>
                    <ul>
                      {service.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                    <p>{service.objective}</p>
                  </div>
                </div>
                <Link href={`/services/${service.pageLink}`}>
                  <span>Explore</span>
                  <ExploreIcon />
                </Link>
                <img
                  className="mob-image"
                  src={`/images/services/${service.pageLink}__mob.png`}
                  alt={service.title}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesLoop;
