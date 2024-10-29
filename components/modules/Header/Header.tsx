"use client"
import { useLang } from "@/hooks/useLang";
import Logo from "@/components/elements/Logo/Logo";
import Menu from "@/components/modules/Header/Menu";
import { openMenu } from "@/context/modals";
import { addOverflowHiddenToBody } from "@/lib/utils/common";

const Header = () => {
  const { lang, translations } = useLang();

  const handelOpenMenu = () => {
    addOverflowHiddenToBody()
    openMenu()
  }

  return (
    <header className="header">
      <div className="container header__container">
        <button className="btn-reset header__burger" onClick={handelOpenMenu}>
          {translations[lang].header.menu_btn}
        </button>
        <Menu />
        <div className="header__logo">
          <Logo />
        </div>
        <ul className="header__links list-reset" />
      </div>
    </header>
  );
};

export default Header;
