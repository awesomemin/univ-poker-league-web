import SKKU from '@/src/assets/univ/SKKU.png';
import HYU from '@/src/assets/univ/HYU.png';
import KU from '@/src/assets/univ/KU.png';
import SNU from '@/src/assets/univ/SNU.png';
import YU from '@/src/assets/univ/YU.png';
import { LeagueSymbol } from '../types/league';

const universities = {
  SKKU,
  HYU,
  KU,
  SNU,
  YU,
};

interface UnivLogoProps {
  univ: LeagueSymbol;
  height: number;
  active: boolean;
}

function UnivLogo({ univ, height, active }: UnivLogoProps) {
  return (
    <img
      src={universities[univ]}
      alt={univ}
      className={`${active ? '' : 'grayscale'}`}
      style={{ height: `${height}px` }}
    />
  );
}

export default UnivLogo;
