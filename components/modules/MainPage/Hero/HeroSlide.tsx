import Image from "next/image";

import { IHeroSlide } from "@/types/main-page";
import styles from "@/styles/main-page/index.module.scss";

const HeroSlide = ({ slide }: { slide: IHeroSlide }) => (
  <>
    <Image
      src={slide.image}
      alt={slide.title}
      className={styles.hero__slider__slide__img}
    />
  </>
)

export default HeroSlide;
