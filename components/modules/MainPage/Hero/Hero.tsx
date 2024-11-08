'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { useLang } from "@/hooks/useLang";
import styles from "@/styles/main-page/index.module.scss";
import ProductSubtitle from "@/components/elements/ProductSubtitle/ProductSubtitle";
import productSubtitleStyles from "@/styles/productSubtitle/index.module.scss";
import img1 from "@/public/img/photo.png";
import HeroSlide from "@/components/modules/MainPage/Hero/HeroSlide";
import { handleOpenAuthPopup } from "@/lib/utils/common";

const Hero = () => {
  const { lang, translations } = useLang()

  const slides = [
    {
      id: 1,
      title: `${translations[lang].main_page.photo} «Line» ${translations[lang].main_page.photo}`,
      image: img1,
    },
    {
      id: 2,
      title: `${translations[lang].main_page.photo} «Line» ${translations[lang].main_page.photo}`,
      image: img1,
    },
    {
      id: 3,
      title: `${translations[lang].main_page.photo} «Line» ${translations[lang].main_page.photo}`,
      image: img1,
    },
  ];

  const handleSlideClick = (e: SwiperType) => e.slideTo(e.clickedIndex);

  return (
    <section className={styles.hero}>
      <h1 className="visually-hidden">
        {translations[lang].main_page.hero_hidden_title}
      </h1>
      <div className={`container ${styles.hero__container}`}>
        <Swiper
          className={styles.hero__slider}
          effect='coverflow'
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          slidesPerView='auto'
          initialSlide={2}
          autoplay
          loop
          onClick={handleSlideClick}
          modules={[EffectCoverflow]}
          grabCursor
          centeredSlides
        >
          {slides.map((slide) => (
            <SwiperSlide className={styles.hero__slider__slide} key={slide.id}>
              <HeroSlide slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
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
          />
          <span className={styles.hero__title__text}>
            {translations[lang].main_page.hero_title}
          </span>
        </h2>
        <button onClick={handleOpenAuthPopup}>Записаться</button>
      </div>
    </section>
  )
}

export default Hero;
