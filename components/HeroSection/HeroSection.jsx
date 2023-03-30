import React from 'react';
import Image from 'next/image';

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Collect, Sell, Discover, Unsigned Music Artists and Afro-American Digital NFT Art 🖼️ On CryptoUmeLabs NFT Market Place</h1>
          <p>
            The most outstanding NTFs on all topics like "Afro-Americian digital Art" and freatured digital Artist's, example "BossLady Vegas", see her profile above top right conner. Creative
            your NTFs and sell them on CryptoUmeLabs NFT Market Place
          </p>
          <Button btnName="Start your search" />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
