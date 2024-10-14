"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ExploreIcon from "@/icons/ExploreIcon";

const PagesLoop = () => {
  return (
    <section className="areas-loop">
      <div className="_container">
        <div
          className="areas-loop__body"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          <Link href="/technology-and-innovation">
            <h2 style={{ fontFamily: "var(--font-lato)" }}>
              Technology and <br />
              Innovation
            </h2>
            <span className="explore">
              <span>Explore</span>
              <ExploreIcon />
            </span>
            <Image
              className="image1"
              src="/images/areas/area1.png"
              width={316}
              height={212}
            />
            <Image
              className="image2"
              src="/images/areas/area1_back.png"
              width={316}
              height={212}
            />
          </Link>
          <Link href="/marketing-and-professional-services">
            <h2>
              Marketing and Professional <br />
              Services
            </h2>
            <span className="explore">
              <span>Explore</span>
              <ExploreIcon />
            </span>
            <Image
              className="image1"
              src="/images/areas/area2.png"
              width={316}
              height={212}
            />
            <Image
              className="image2"
              src="/images/areas/area2_back.png"
              width={316}
              height={212}
            />
          </Link>
          <Link href="/manufacturing-and-retail">
            <h2>Manufacturing and Retail</h2>
            <span className="explore">
              <span>Explore</span>
              <ExploreIcon />
            </span>
            <Image
              className="image1"
              src="/images/areas/area3.png"
              width={316}
              height={212}
            />
            <Image
              className="image2"
              src="/images/areas/area3_back.png"
              width={316}
              height={212}
            />
          </Link>
          <Link href="/finance-and-investment">
            <h2>Finance and Investment</h2>
            <span className="explore">
              <span>Explore</span>
              <ExploreIcon />
            </span>
            <Image
              className="image1"
              src="/images/areas/area4.png"
              width={316}
              height={212}
            />
            <Image
              className="image2"
              src="/images/areas/area4_back.png"
              width={316}
              height={212}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PagesLoop;