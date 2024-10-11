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
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
