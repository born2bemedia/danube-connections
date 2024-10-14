"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ContactsDetails = () => {
  return (
    <section className="contacts-details">
      <div className="_container">
        <div
          className="contacts-details__body"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-01"
          >
            <p>Need immediate assistance or have a specific inquiry? </p>
            <h2>Connect with us directly:</h2>
            <Link href="mailto:">
              <Image
                src={"/images/contacts/email.png"}
                width={47}
                height={58}
              />
              <span>danubestrategic@gmail.com</span>
            </Link>
            <span>
              Our team is available to provide expert guidance and support in
              all matters.
            </span>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-02"
          >
            <div className="col">
              <div>
                <Image
                  src={"/images/contacts/address.png"}
                  width={49}
                  height={48}
                />
                <h2>Our Office</h2>
                <p>
                  If you need to visit us or send us documents, here’s where you
                  can find us:
                </p>
              </div>
              <img src="/images/contacts/arrow.svg" />
            </div>
            <div className="col">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.480133906008!2d19.04911784346636!3d47.500039997208525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc154ee41f69%3A0xf4f9b841b55ce1dd!2sBudapest%2C%20Okt%C3%B3ber%206.%20u.%205-A.%20I%2C%201051%20Hungary!5e0!3m2!1sen!2sua!4v1728918651336!5m2!1sen!2sua"
                width="326"
                height="307"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactsDetails;
