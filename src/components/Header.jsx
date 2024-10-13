"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import "@/styles/base.scss";
import Link from "next/link";
import LogoWhite from "@/icons/other/LogoWhite";
import { usePathname } from "next/navigation";
import Menu from "@/icons/other/Menu";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const pathname = usePathname();

  const menuOpen = () => {
    setMenuOpened(!menuOpened);
    document.body.classList.toggle("no-scroll", !menuOpened);
  };

  const toggleSubmenu = (index) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    setMenuOpened(false);
    document.body.classList.remove("no-scroll");
  }, [pathname]);

  return (
    <>
      <header className="header">
        <div className="header__container _container">
          <div className="header__body">
            <div className="header__col-01">
              <Link href="/" className="header__logo">LOGO</Link>
            </div>
            <div className="header__col-02">
              <button className="header__btn-menu"><Menu /></button>
            </div>

            {/* <div className={`header__menu ${menuOpened ? "_active" : ""}`}>
              <nav className="header__nav">
                <ul className="header__list">
                  <li
                    className={`header__item-menu _submenu ${submenuOpen["services"] ? "_open" : ""}`}
                    onClick={(event) => toggleSubmenu("services", event)}
                  >
                    <div className="wrapper">
                      <span>Services</span>
                      <button type="button" className="btn">
                        {!submenuOpen["services"] ? (
                          <img src="/images/menu-plus.svg" alt="expand" />
                        ) : (
                          <img src="/images/menu-minus.svg" alt="collapse" />
                        )}
                      </button>
                    </div>
                    <ul
                      className={`header__submenu ${submenuOpen["services"] ? "_active" : ""}`}
                      style={{
                        maxHeight: submenuOpen["services"] ? "200px" : "0",
                        overflow: "hidden",
                        transition: "all 0.3s ease 0s",
                        borderTop: submenuOpen["services"] ? "1px solid #6d6d6d4d" : "none",
                        paddingTop: submenuOpen["services"] ? "24px" : "0",
                        marginTop: submenuOpen["services"] ? "24px" : "0",
                      }}
                    >
                      <li className="header__subitem"><Link href="/it-consulting">IT Consulting</Link></li>
                      <li className="header__subitem"><Link href="/marketing-consulting">Marketing Consulting</Link></li>
                    </ul>
                  </li>

                  <li className="header__item-menu"><Link href="/complex-solutions">Complex Solutions</Link></li>
                  <li className="header__item-menu"><Link href="/market-research">Market Research</Link></li>

                  <li
                    className={`header__item-menu _submenu ${submenuOpen["company"] ? "_open" : ""}`}
                    onClick={() => toggleSubmenu("company")}
                  >
                    <div className="wrapper">
                      <span>Company</span>
                      <button type="button" className="btn">
                        {!submenuOpen["company"] ? (
                          <img src="/images/menu-plus.svg" alt="expand" />
                        ) : (
                          <img src="/images/menu-minus.svg" alt="collapse" />
                        )}
                      </button>
                    </div>
                    <ul
                      className={`header__submenu ${submenuOpen["company"] ? "_active" : ""}`}
                      style={{
                        maxHeight: submenuOpen["company"] ? "200px" : "0",
                        overflow: "hidden",
                        transition: "all 0.3s ease 0s",
                        borderTop: submenuOpen["company"] ? "1px solid #6d6d6d4d" : "none",
                        paddingTop: submenuOpen["company"] ? "24px" : "0",
                        marginTop: submenuOpen["company"] ? "24px" : "0",
                      }}
                    >
                      <li className="header__subitem"><Link href="/about">About</Link></li>
                      <li className="header__subitem"><Link href="/people">People</Link></li>
                      <li className="header__subitem"><Link href="/newsroom">Newsroom</Link></li>
                    </ul>
                  </li>

                  <li className="header__item-menu"><Link href="/how-we-work">How we work</Link></li>
                  <li className="header__item-menu"><Link href="/faq">FAQ</Link></li>
                  <li className="header__item-menu"><Link href="/contacts">Contact</Link></li>
                </ul>
              </nav>
            </div> */}

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
