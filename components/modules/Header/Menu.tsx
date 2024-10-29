import React, { useState } from "react"
import { useLang } from "../../../hooks/useLang";
import { useUnit } from "effector-react/compat";
import { $menuIsOpen, closeMenu } from "@/context/modals";
import Logo from "@/components/elements/Logo/Logo";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { removeOverflowHiddenFromBody } from "@/lib/utils/common";

const Menu = () => {
  const [showBuyerList, setShowBuyerList] = useState(false);
  const [showCOntactList, setShowContactList] = useState(false);
  const menuIsOpen = useUnit($menuIsOpen);
  const { lang, translations } = useLang();
  const isMedia800 = useMediaQuery(800);
  const isMedia640 = useMediaQuery(640);

  const handelCloseMenu = () => {
    removeOverflowHiddenFromBody()
    closeMenu()
  };

  return (
    <nav className={`nav-menu ${menuIsOpen ? "open" : "close"}`}>
      <div className={`nav-menu__logo ${menuIsOpen ? "open" : ""}`}>
        <Logo />
      </div>
      {/*<img*/}
      {/*  className={`nav-menu__bg ${menuIsOpen ? "open" : ""}`}*/}
      {/*  src={`/img/menu-bg${isMedia800 ? "-small" : ""}.png`}*/}
      {/*  alt="menu background"*/}
      {/*/>*/}
      <button
        className={`btn-reset nav-menu__close ${menuIsOpen ? "open" : ""}`}
        onClick={handelCloseMenu}
      />
    </nav>
  );
}

export default Menu;
