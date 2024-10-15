"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import "@/styles/base.scss";
import Link from "next/link";
import Menu from "@/icons/other/Menu";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

  const menuOpen = () => {
    setMenuOpened(!menuOpened);
    setButtonActive(!buttonActive);
    document.body.classList.toggle("no-scroll", !menuOpened);
  };

  const toggleSubmenu = (index) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 992);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__body">
          <div className="header__col-01">
            <Link href="/" className="header__logo"><img src="/images/danube-logo.svg" alt="logo" /></Link>
          </div>
          <div className="header__col-02">
            <button onClick={() => menuOpen()} className={`header__menu-btn ${menuOpened ? "_active" : ""}`}>
              {!menuOpened ? (
                <img src="/images/menu-close.svg" alt="menu-burger" />
              ) : (
                <img alt="logo" src="/images/menu-open.svg" />
              )}
            </button>
          </div>

          <div className={`header__menu ${menuOpened ? "_active" : ""}`}>
            <nav className="header__nav _container">
              <ul className="header__list">
                <li
                  className={`header__item-menu _submenu ${submenuOpen["services"] ? "_open" : ""}`}
                  onClick={() => toggleSubmenu("services")}
                >
                  <div className="wrapper">
                    <span>Services</span>
                    <button type="button" className="btn">
                      {!submenuOpen["services"] ? (
                        <img src="/images/menu-right.svg" alt="expand" />
                      ) : (
                        <img src="/images/menu-left.svg" alt="collapse" />
                      )}
                    </button>
                  </div>
                  <ul
                    className={`header__submenu ${submenuOpen["services"] ? "_active" : ""}`}
                    style={{
                      maxHeight: submenuOpen["services"] ? "1000px" : "0",
                      overflow: "hidden",
                      transition: "all 0.3s ease 0s",
                      paddingTop: submenuOpen["services"] ? "10px" : "0",
                    }}
                  >
                    <li className="header__subitem"><Link href="/services/supplier-identification-and-connection">Supplier Identification and Connection</Link></li>
                    <li className="header__subitem"><Link href="/services/marketing-personnel-and-employee-recruitment">Marketing Personnel and Employee Recruitment</Link></li>
                    <li className="header__subitem"><Link href="/services/customer-introduction">Customer Introduction</Link></li>
                    <li className="header__subitem"><Link href="/services/investment-opportunity-identification">Investment Opportunity Identification</Link></li>
                    <li className="header__subitem"><Link href="/services/ongoing-strategic-networking-and-partnership-development">On-going Strategic Networking and Partnership Development</Link></li>
                  </ul>
                </li>

                <li
                  className={`header__item-menu _submenu ${submenuOpen["company"] ? "_open" : ""}`}
                  onClick={() => toggleSubmenu("company")}
                >
                  <div className="wrapper">
                    <span>Areas of Expertise</span>
                    <button type="button" className="btn">
                      {!submenuOpen["company"] ? (
                        <img src="/images/menu-right.svg" alt="expand" />
                      ) : (
                        <img src="/images/menu-left.svg" alt="collapse" />
                      )}
                    </button>
                  </div>
                  <ul
                    className={`header__submenu ${submenuOpen["company"] ? "_active" : ""}`}
                    style={{
                      maxHeight: submenuOpen["company"] ? "200px" : "0",
                      overflow: "hidden",
                      transition: "all 0.3s ease 0s",
                      paddingTop: submenuOpen["company"] ? "14px" : "0",
                    }}
                  >
                    <li className="header__subitem"><Link href="/technology-and-innovation">Technology and Innovation</Link></li>
                    <li className="header__subitem"><Link href="/finance-and-investment">Finance and Investment</Link></li>
                    <li className="header__subitem"><Link href="/marketing-and-professional-services">Marketing and Professional Services</Link></li>
                    <li className="header__subitem"><Link href="/manufacturing-and-retail">Manufacturing and Retail</Link></li>
                  </ul>
                </li>

                <li className="header__item-menu"><Link href="/insights">Insights</Link></li>
                <li className="header__item-menu"><Link href="/about-us">About Us</Link></li>
                <li className="header__item-menu"><Link href="/career">Career</Link></li>
                <li className="header__item-menu"><Link href="/contacts">Contacts</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;