"use client";
import React from "react";
import "@/styles/footer.scss";
import "@/styles/base.scss";
import Link from "next/link";
import Email from "@/icons/other/Email";
import Phone from "@/icons/other/Phone";
import Address from "@/icons/other/Address";
/* import LogoBlack from "@/icons/other/LogoBlack"; */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__body">
          <div className="footer__row-01">
            <div className="footer__wrapper _container">
              <div className="footer__col-01">
                <Link href="/" className="footer__logo">LOGO</Link>
                <div className="footer__text">Connecting Business and <br /> Opportunity</div>
                <ul className="footer__contacts">
                  <li className="footer__contact">
                    <Link href="#" className="footer__contact-link">
                      <span className="icon"><Email /></span>
                      Email
                    </Link>
                  </li>
                  <li className="footer__contact">
                    <Link href="#" className="footer__contact-link">
                      <span className="icon"><Phone /></span>
                      Phone
                    </Link>
                  </li>
                  <li className="footer__contact">
                    <Link href="#" className="footer__contact-link">
                      <span className="icon"><Address /></span>
                      Address
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer__col-02">
                <h2 className="footer__title">Services</h2>
                <nav className="footer__menu">
                  <ul className="footer__list">
                    <li className="footer__item"><Link href="#" className="footer__link">Supplier Identification <br /> and Connection</Link></li>
                    <li className="footer__item"><Link href="#" className="footer__link">Marketing Personnel and Employee <br /> Recruitment</Link></li>
                    <li className="footer__item"><Link href="#" className="footer__link">Customer Introduction</Link></li>
                    <li className="footer__item"><Link href="#" className="footer__link">Investment Opportunity Identification</Link></li>
                    <li className="footer__item"><Link href="#" className="footer__link">On-going Strategic Networking and <br /> Partnership Development</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="footer__col-03">
                <h2 className="footer__title">Areas of Expertise</h2>
                <nav className="footer__menu">
                  <ul className="footer__list">
                    <li className="footer__item"><Link href="#" className="footer__link">Technology and Innovation</Link></li>
                    <li className="footer__item"><Link href="#" className="footer__link">Financial and Investment</Link></li>
                    <li className="footer__item"><Link href="#" className="footer__link">Marketing and Professional <br /> Services</Link></li>
                    <li className="footer__item"><Link href="#" className="footer__link">Manufacturing and Retail</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="footer__col-04">
                <nav className="footer__menu-last">
                  <ul className="footer__menu-list">
                    <li className="footer__menu-item">
                      <Link href="#" className="footer__menu-link">Insights</Link>
                    </li>
                    <li className="footer__menu-item">
                      <Link href="#" className="footer__menu-link">About us</Link>
                    </li>
                    <li className="footer__menu-item">
                      <Link href="#" className="footer__menu-link">Career</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="footer__row-02">
            <div className="footer__bottom _container">
              <div className="footer__copy">
                © {currentYear} All Rights Reserved.
              </div>
              <nav className="footer__menu-policy">
                <ul className="footer__policy-list">
                  <li className="footer__policy-item">
                    <Link href="#" className="footer__policy-link">Terms of Use</Link>
                  </li>
                  <li className="footer__policy-item">
                    <Link href="#" className="footer__policy-link">Privacy</Link>
                  </li>
                  <li className="footer__policy-item">
                    <Link href="#" className="footer__policy-link">Cookie</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;