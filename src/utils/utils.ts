import { LeagueName, LeagueSymbol } from '../types/league';

export function convertSymbolToName(symbol: LeagueSymbol) {
  const STN = {
    SKKU: '성균관대학교',
    SNU: '서울대학교',
    YU: '연세대학교',
    KU: '고려대학교',
    HYU: '한양대학교',
  };

  return STN[symbol];
}

export function convertNameToSymbol(name: LeagueName) {
  const NTS = {
    성균관대학교: 'SKKU',
    서울대학교: 'SNU',
    연세대학교: 'YU',
    고려대학교: 'KU',
    한양대학교: 'HYU',
  };

  return NTS[name];
}

export function formatTimeInMinutes(minutes: number) {
  const H = Math.floor(minutes / 60);
  const M = minutes % 60;
  if (M == 0) {
    return `${H}시간`;
  } else {
    return `${H}시간 ${M}분`;
  }
}
