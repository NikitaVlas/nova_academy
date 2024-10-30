import React, { useState } from "react"
import { useLang } from "../../../hooks/useLang";
import { useUnit } from "effector-react/compat";
import { $menuIsOpen, closeMenu } from "@/context/modals";
import Logo from "@/components/elements/Logo/Logo";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { removeOverflowHiddenFromBody } from "@/lib/utils/common";
import { AllowedLangs } from "@/constants/lang";
import { setLang } from "@/context/lang";
import BuyersListItems from "@/components/modules/Header/BuyersListItems";
import ContactsListItems from "@/components/modules/Header/ContactsListItems";
import { AnimatePresence, motion } from "framer-motion";
import Accordion from "@/components/modules/Accordion/Accordion";

const Menu = () => {
  const [showBuyerList, setShowBuyerList] = useState(false);
  const [showContactsList, setShowContactsList] = useState(false);
  const menuIsOpen = useUnit($menuIsOpen);
  const { lang, translations } = useLang();
  const isMedia800 = useMediaQuery(800);
  const isMedia640 = useMediaQuery(640);

  const handelSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs)
    localStorage.setItem("lang", JSON.stringify(lang));
  };

  const handleSwitchLangToRu = () => handelSwitchLang("ru");
  const handleSwitchLangToEn = () => handelSwitchLang("en")
  const handleSwitchLangToDe = () => handelSwitchLang("de")

  const handleShowBuyerList = () => {
    setShowBuyerList(true)
    setShowContactsList(false)
  }

  const handleShowContactsList = () => {
    setShowBuyerList(false)
    setShowContactsList(true)
  }

  const handelCloseMenu = () => {
    removeOverflowHiddenFromBody()
    closeMenu()
  }

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
        <ul className={`list-reset nav-menu__list ${menuIsOpen ? "open" : ""}`}>
          <li className="nav-menu__list__item">
            {!isMedia640 && (
              <button
                className="btn-reset nav-menu__list__item__btn"
                onMouseEnter={handleShowBuyerList}
              >
                {translations[lang].main_menu.about}
              </button>
            )}
            {!isMedia640 && (
              <AnimatePresence>
                {showBuyerList && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="list-reset nav-menu__accordion"
                  >
                    <BuyersListItems />
                  </motion.ul>
                )}
              </AnimatePresence>
            )}
            {isMedia640 && (
              <Accordion
                title={translations[lang].main_menu.about}
                titleClass="btn-reset nav-menu__list__item__btn"
              >
                <ul className="list-reset nav-menu__accordion__item__list">
                  <BuyersListItems />
                </ul>
              </Accordion>
            )}
          </li>
          <li className="nav-menu__list__item">
            {!isMedia640 && (
              <button
                className="btn-reset nav-menu__list__item__btn"
                onMouseEnter={handleShowContactsList}
              >
                {translations[lang].main_menu.contacts}
              </button>
            )}
            {!isMedia640 && (
              <AnimatePresence>
                {showContactsList && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="list-reset nav-menu__accordion"
                  >
                    <ContactsListItems />
                  </motion.ul>
                )}
              </AnimatePresence>
            )}
            {isMedia640 && (
              <Accordion
                title={translations[lang].main_menu.contacts}
                titleClass="btn-reset nav-menu__list__item__btn"
              >
                <ul className="list-reset nav-menu__accordion__item__list">
                  <ContactsListItems />
                </ul>
              </Accordion>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
