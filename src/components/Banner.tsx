import banner_community from '@/src/assets/banner/banner_community.png';
import banner_gamble from '@/src/assets/banner/banner_gamble.png';
import banner_strategy from '@/src/assets/banner/banner_strategy.png';
import { useEffect, useState } from 'react';

const bannerImages = [banner_community, banner_gamble, banner_strategy];

function Banner() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="px-5">
        <img src={bannerImages[index]} alt="banner" />
      </div>
    </>
  );
}

export default Banner;
