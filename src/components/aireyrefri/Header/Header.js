import { useRootContext } from "@/context/context";
import navbarData from "@/data/navbarData";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import React from "react";
import { Container, Image, Navbar } from "react-bootstrap";
import NavItem from "./NavItem";

const { logo, navItems, rightBtn, logo2 } = navbarData;

const Header = ({ pageTitle }) => {
  const { scrollTop } = useScroll(100);
  const { menuStatus, toggleMenu } = useRootContext();

  return (
    <header
      className={`site-header header-one${
        pageTitle === "Refacciones A/C y Refrigeradores" ? "" : " header-one__home-two"
      }`}
    >
      <Navbar
        expand="lg"
        variant="light"
        className={
          scrollTop
            ? "header-navigation stricky stricky-fixed slideInDown animated"
            : "header-navigation stricky"
        }
      >
        <Container className="clearfix">
          <div className="logo-box clearfix">
            <Link href="/" passHref>
              <Navbar.Brand>
                <Image
                  src={pageTitle === "Refacciones A/C y Refrigeradores" ? logo.src : logo2.src}
                  className="main-logo"
                  alt="refacciones"
                />
              </Navbar.Brand>
            </Link>
            <button onClick={() => toggleMenu()} className="menu-toggler">
              <span className="fa fa-bars"></span>
            </button>
          </div>

          <div
            className={
              menuStatus
                ? "main-navigation showen d-block"
                : "main-navigation d-none"
            }
          >
            <ul className="navigation-box one-page-scroll-menu">
              {navItems.map((navItem) => (
                <NavItem key={navItem.id} navItem={navItem} />
              ))}
            </ul>
          </div>
          <div className="right-side-box">
            <a href={rightBtn.href} className="header-one__btn">
            <i className="fa fa-whatsapp"> </i>9982421057
            </a>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
