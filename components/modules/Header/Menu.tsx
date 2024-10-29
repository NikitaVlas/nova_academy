import React, { useState } from "react"
import { useLang } from "../../../hooks/useLang";
import { useUnit } from "effector-react/compat";
import { $menuIsOpen, closeMenu } from "@/context/modals";
import Logo from "@/components/elements/Logo/Logo";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { removeOverflowHiddenFromBody } from "@/lib/utils/common";
import {AllowedLangs} from "@/constants/lang";
import {setLang} from "@/context/lang";

const Menu = () => {
  const [showBuyerList, setShowBuyerList] = useState(false);
  const [showCOntactList, setShowContactList] = useState(false);
  const menuIsOpen = useUnit($menuIsOpen);
  const { lang, translations } = useLang();

  const handelSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs)
    localStorage.setItem("lang", JSON.stringify(lang));
  }

  const handleSwitchLangToRu = () => handelSwitchLang('ru')
  const handleSwitchLangToEn = () => handelSwitchLang('en')
  const handleSwitchLangToDe = () => handelSwitchLang('de')

  const handelCloseMenu = () => {
    removeOverflowHiddenFromBody()
    closeMenu()
  };

  return (
    <nav className={`nav-menu ${menuIsOpen ? "open" : "close"}`}>
      <div className="container">
        <div className={`nav-menu__logo ${menuIsOpen ? "open" : ""}`}>
          <Logo />
        </div>
        <button
          className={`btn-reset nav-menu__close ${menuIsOpen ? "open" : ""}`}
          onClick={handelCloseMenu}
        />
        <div className={`nav-menu__lang ${menuIsOpen ? "open" : ""}`}>
          <button
            className={`btn-reset nav-menu__lang__btn ${
              lang === "de" ? "lang-active" : ""
            }`}
            onClick={handleSwitchLangToDe}
          >
            DE
          </button>
          <button
            className={`btn-reset nav-menu__lang__btn ${
              lang === "en" ? "lang-active" : ""
            }`}
            onClick={handleSwitchLangToEn}
          >
            EN
          </button>
          <button
            className={`btn-reset nav-menu__lang__btn ${
              lang === "ru" ? "lang-active" : ""
            }`}
            onClick={handleSwitchLangToRu}
          >
            RU
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
