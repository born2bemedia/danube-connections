"use client";
import React from "react";
import "@/styles/footer.scss";
import "@/styles/base.scss";
import Link from "next/link";
import Email from "@/icons/other/Email";
import Phone from "@/icons/other/Phone";
import Address from "@/icons/other/Address";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__body">
          <div className="footer__row-01">
            <div className="footer__wrapper _container">
              <div className="footer__col-01">
                <Link href="/" className="footer__logo">
                  <img src="/images/danube-logo.svg" alt="Danube Logo" />
                </Link>
                <div className="footer__text">
                  Connecting Business and <br /> Opportunity
                </div>
                <ul className="footer__contacts">
                  <li className="footer__contact">
                    <Link href="mailto:danubestrategic@gmail.com" className="footer__contact-link">
                      <span className="icon"><Email /></span>
                      <span className="text">danubestrategic@gmail.com</span>
                    </Link>
                  </li>
                  <li className="footer__contact">
                    <Link href="#" className="footer__contact-link">
                      <span className="icon"><Address /></span>
                      <span className="text">Budapest, Október 6 utca 5. A. I building 1. Floor door no 1/A, H-1051</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer__col-02">
                <h2 className="footer__title">Services</h2>
                <nav className="footer__menu">
                  <ul className="footer__list">
                    <li className="footer__item">
                      <Link href="/services/supplier-identification-and-connection" className="footer__link">
                        Supplier Identification <br /> and Connection
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link href="/services/marketing-personnel-and-employee-recruitment" className="footer__link">
                        Marketing Personnel and Employee <br /> Recruitment
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link href="/services/customer-introduction" className="footer__link">
                        Customer Introduction
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link href="/services/investment-opportunity-identification" className="footer__link">
                        Investment Opportunity Identification
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link href="/services/ongoing-strategic-networking-and-partnership-development" className="footer__link">
                        On-going Strategic Networking and <br /> Partnership Development
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footer__col-03">
                <h2 className="footer__title">Areas of Expertise</h2>
                <nav className="footer__menu">
                  <ul className="footer__list">
                    <li className="footer__item">
                      <Link href="/technology-and-innovation" className="footer__link">
                        Technology and Innovation
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link href="/finance-and-investment" className="footer__link">
                        Financial and Investment
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link href="/marketing-and-professional-services" className="footer__link">
                        Marketing and Professional <br /> Services
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link href="/manufacturing-and-retail" className="footer__link">
                        Manufacturing and Retail
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footer__col-04">
                <nav className="footer__menu-last">
                  <ul className="footer__menu-list">
                    <li className="footer__menu-item">
                      <Link href="/insights" className="footer__menu-link">
                        Insights
                      </Link>
                    </li>
                    <li className="footer__menu-item">
                      <Link href="/about-us" className="footer__menu-link">
                        About us
                      </Link>
                    </li>
                    <li className="footer__menu-item">
                      <Link href="/career" className="footer__menu-link">
                        Career
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="footer__row-02">
            <div className="footer__bottom _container">
              <div className="footer__copy">
                © {currentYear} Danube Connections. All Rights Reserved.
              </div>
              <nav className="footer__menu-policy">
                <ul className="footer__policy-list">
                  <li className="footer__policy-item">
                    <Link href="/terms-of-use" className="footer__policy-link">
                      Terms of Use
                    </Link>
                  </li>
                  <li className="footer__policy-item">
                    <Link href="/privacy-policy" className="footer__policy-link">
                      Privacy
                    </Link>
                  </li>
                  <li className="footer__policy-item">
                    <Link href="/cookie-policy" className="footer__policy-link">
                      Cookie
                    </Link>
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
