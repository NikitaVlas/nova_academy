import React from "react";
import { useLang } from "@/hooks/useLang";
import styles from "@/styles/main-page/index.module.scss";
import ProductSubtitle from "@/components/elements/ProductSubtitle/ProductSubtitle";
import productSubtitleStyles from "@/styles/productSubtitle/index.module.scss";

const Hero = () => {
  const { lang, translations } = useLang()

  return (
    <section className={styles.hero}>
      <h1 className="visually-hidden">
        {translations[lang].main_page.hero_hidden_title}
      </h1>
      <div className={`container ${styles.hero__container}`}>
        <ProductSubtitle
          subtitleClassName={productSubtitleStyles.product_subtitle__subtitle}
          subtitleRectClassName={
            productSubtitleStyles.product_subtitle__subtitle__rect
          }
        />
        <h2 className={styles.hero__title}>
          <span
            className={`${styles.hero__title__subtitle} ${
              lang === "ru" ? "" : styles.hero__title__subtitle_lang
            }`}
          >
          </span>
          <span className={styles.hero__title__text}>
            {translations[lang].main_page.hero_title}
          </span>
        </h2>
      </div>
    </section>
  )
}

export default Hero;
