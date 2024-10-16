"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import ExploreIcon from "@/icons/ExploreIcon";
import ServiceArrow from "@/icons/ServiceArrow";
import OrderButton from "@/components/OrderButton";

const SolutionsTabs = ({ services }) => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="solutions-tabs" id="solutions">
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="solutions-tabs__body"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          {/* Tab Navigation */}
          <div className="tab-nav">
            {services.map((service, index) => (
              <>
                <button
                  key={index}
                  className={activeTab === index ? "active" : ""}
                  onClick={() => setActiveTab(index)}
                >
                  <span>{service.title}</span>
                  <ServiceArrow />
                </button>

                {/* Mobile Tab Content */}
                <div
                  className={`tab-content mobile ${
                    activeTab === index ? "active" : ""
                  }`}
                  style={{ display: activeTab === index ? "block" : "none" }}
                >
                  <div className="inner">
                    <div>
                      <p>{service.description}</p>
                      <ul>
                        {service.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                    <OrderButton
                      text={"Order Consultation"}
                      service={service.title}
                    />
                  </div>
                </div>
              </>
            ))}
          </div>

          {/* Desktop Tab Content */}
          <div className="tab-content desktop">
            {services.map((service, index) => (
              <div
                key={index}
                className={`tab${index} ${activeTab === index ? "active" : ""}`}
                style={{ display: activeTab === index ? "block" : "none" }}
              >
                <div className="inner">
                  <div>
                    <p>{service.description}</p>
                    <ul>
                      {service.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <OrderButton
                    text={"Order Consultation"}
                    service={service.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsTabs;
