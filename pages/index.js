import React from 'react';

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { 
  HeroSection, 
  Service, 
  BigNFTSlider, 
  Subscribe, 
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  FollowerTab,
  AudioLive,
  Slider,
  Brand,
  Video,
} from '../components/componentsindex';

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title 
      heading="Latest Music Audio Collection"
      paragraph="Explore the NFTS in featured categories."
      />
      <AudioLive/>
      <FollowerTab />
      <Slider/>
      <Collection />
      <Title 
      heading="New Collection by In-Hosue Artists and New Members"
      paragraph="Explore these NFTS in featured categories."
      />
      <Filter />
      <NFTCard />
      <Title 
      heading="Browse By Category"
      paragraph="Explore the NFTS in featured categories."
      />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  );
};

export default Home;
