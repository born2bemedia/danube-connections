"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import "@/styles/base.scss";
import Link from "next/link";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

  const menuOpen = () => {
    setMenuOpened((prev) => !prev);
    setButtonActive((prev) => !prev);
    document.body.classList.toggle("no-scroll", !menuOpened);
  };

  const toggleSubmenu = (index) => {
    setSubmenuOpen((prev) => {
      const isOpen = prev[index];
      return {
        services: false,
        company: false,
        [index]: !isOpen,
      };
    });
  };

  const closeMenu = () => {
    setMenuOpened(false);
    setButtonActive(false);
    document.body.classList.remove("no-scroll");
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
            <Link href="/" className="header__logo" onClick={closeMenu}>
              <img src="/images/danube-logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="header__col-02">
            <button onClick={menuOpen} className={`header__menu-btn ${menuOpened ? "_active" : ""}`}>
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
                    <Link href="/services" onClick={closeMenu}>Services</Link>
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
                    <li className="header__subitem">
                      <Link href="/services/supplier-identification-and-connection" onClick={closeMenu}>Supplier Identification and Connection</Link>
                    </li>
                    <li className="header__subitem">
                      <Link href="/services/marketing-personnel-and-employee-recruitment" onClick={closeMenu}>Marketing Personnel and Employee Recruitment</Link>
                    </li>
                    <li className="header__subitem">
                      <Link href="/services/customer-introduction" onClick={closeMenu}>Customer Introduction</Link>
                    </li>
                    <li className="header__subitem">
                      <Link href="/services/investment-opportunity-identification" onClick={closeMenu}>Investment Opportunity Identification</Link>
                    </li>
                    <li className="header__subitem">
                      <Link href="/services/ongoing-strategic-networking-and-partnership-development" onClick={closeMenu}>On-going Strategic Networking and Partnership Development</Link>
                    </li>
                  </ul>
                </li>

                <li
                  className={`header__item-menu _submenu ${submenuOpen["company"] ? "_open" : ""}`}
                  onClick={() => toggleSubmenu("company")}
                >
                  <div className="wrapper">
                    <Link href="/areas-of-expertise" onClick={closeMenu}>Areas of Expertise</Link>
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
                      maxHeight: submenuOpen["company"] ? "1000px" : "0",
                      overflow: "hidden",
                      transition: "all 0.3s ease 0s",
                      paddingTop: submenuOpen["company"] ? "14px" : "0",
                    }}
                  >
                    <li className="header__subitem">
                      <Link href="/technology-and-innovation" onClick={closeMenu}>Technology and Innovation</Link>
                    </li>
                    <li className="header__subitem">
                      <Link href="/finance-and-investment" onClick={closeMenu}>Finance and Investment</Link>
                    </li>
                    <li className="header__subitem">
                      <Link href="/marketing-and-professional-services" onClick={closeMenu}>Marketing and Professional Services</Link>
                    </li>
                    <li className="header__subitem">
                      <Link href="/manufacturing-and-retail" onClick={closeMenu}>Manufacturing and Retail</Link>
                    </li>
                  </ul>
                </li>

                <li className="header__item-menu"><Link href="/insights" onClick={closeMenu}>Insights</Link></li>
                <li className="header__item-menu"><Link href="/about-us" onClick={closeMenu}>About Us</Link></li>
                <li className="header__item-menu"><Link href="/career" onClick={closeMenu}>Career</Link></li>
                <li className="header__item-menu"><Link href="/contacts" onClick={closeMenu}>Contacts</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
