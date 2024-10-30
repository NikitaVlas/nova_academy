
import Link from 'next/link'
import { useLang } from "@/hooks/useLang";

const BuyersListItems = () => {
  const { lang, translations } = useLang()

  return (
    <>
      <li className="nav-menu__accordion__item">
        <Link
          href="/course"
          className="nav-menu__accordion__item__link nav-menu__accordion__item__title"
        >
          {translations[lang].main_menu.course}
        </Link>
      </li>
      <li className="nav-menu__accordion__item">
        <Link
          href="/trainers"
          className="nav-menu__accordion__item__link"
        >
          {translations[lang].main_menu.trainers}
        </Link>
      </li>
      <li className="nav-menu__accordion__item">
        <Link
          href="/prices"
          className="nav-menu__accordion__item__link"
        >
          {translations[lang].main_menu.prices}
        </Link>
      </li>
    </>
  )
}

export default BuyersListItems
