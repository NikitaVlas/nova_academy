import React from 'react'
import Link from 'next/link'
import { useLang } from '@/hooks/useLang'

const ContactsListItems = () => {
  const { lang, translations } = useLang()

  return (
    <>
      <li className="nav-menu__accordion__item">
        <a
          href="tel:+49000000"
          className="nav-menu__accordion__item__link nav-menu__accordion__item__title"
        >
          +49000000
        </a>
      </li>
      <li className="nav-menu__accordion__item">
        <a
          href="nova_academy@gmail.com"
          className="nav-menu__accordion__item__link"
        >
          Email
        </a>
      </li>
    </>
  )
}

export default ContactsListItems
