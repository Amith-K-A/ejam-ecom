import React from "react";
import { Link } from "react-router-dom";
import useIsDevice from "../../utility/useIsDevice";
import { deviceType } from "../../utility/enum/device-list";
import MobileHeader from "./mobile/header";
import Cart from "../cart/cart";
import "./header.scss";

function Header() {
  const isMobile = useIsDevice(deviceType.MOBILE, deviceType.MOBILELARGE);
  return (
    <header className="header">
      {isMobile ? (
        <MobileHeader />
      ) : (
        <>
          <section className="header_section_wrapper">
            <nav>
              <Link to="/">
                {/* <img alt="" className="header__logo" src={logo} /> */}
              </Link>
            </nav>
          </section>
        </>
      )}
      <Cart />
    </header>
  );
}

export default Header;
