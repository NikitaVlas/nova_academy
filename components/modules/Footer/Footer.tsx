"use client"
import Link from "next/link";
import Logo from "@/components/elements/Logo/Logo";
import { useLang } from "@/hooks/useLang";

const Footer = () => {
  const { lang, translations } = useLang();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__top__container">
          <div className="footer__logo">
            <Logo />
          </div>
          <div className="footer__contacts">
            <span>
              <a href="tel:+4970000000">+49 (700) 000-00-00</a>
            </span>
            <span>
              <a href="mailto:nova_academy@gmail.com">nova_academy@gmail.com</a>
            </span>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom__container">
          <div className="footer__copyright">
            ©2024 {translations[lang].footer.copyright}
          </div>
          <div className="footer__policy">
            <div className="footer__policy__inner">
              <Link href="/personal-data-policy">
                {translations[lang].footer.policy}
              </Link>
              <Link href="/privacy-policy">
                {translations[lang].footer.privacy}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
