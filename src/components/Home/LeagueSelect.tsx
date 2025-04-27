import { useState } from 'react';
import UnivLogo from '../UnivLogo';

const symbolToUniv = {
  SKKU: '성균관대학교',
  SNU: '서울대학교',
  YU: '연세대학교',
  KU: '고려대학교',
  HYU: '한양대학교',
};

type UnivKey = keyof typeof symbolToUniv; // 'SKKU' | 'HYU' | 'KU' | 'SNU' | 'YU'

function LeagueSelect() {
  const [selectedLeague, setSelectedLeague] = useState<UnivKey>('SKKU');
  return (
    <>
      <div className="my-5 flex gap-5 justify-center">
        <div onClick={() => setSelectedLeague('SKKU')}>
          <UnivLogo
            univ="SKKU"
            height={48}
            active={selectedLeague === 'SKKU'}
          />
        </div>
        <div onClick={() => alert('준비 중입니다.')}>
          <UnivLogo univ="SNU" height={48} active={selectedLeague === 'SNU'} />
        </div>
        <div onClick={() => alert('준비 중입니다.')}>
          <UnivLogo univ="YU" height={48} active={selectedLeague === 'YU'} />
        </div>
        <div onClick={() => alert('준비 중입니다.')}>
          <UnivLogo univ="KU" height={48} active={selectedLeague === 'KU'} />
        </div>
        <div onClick={() => alert('준비 중입니다.')}>
          <UnivLogo univ="HYU" height={48} active={selectedLeague === 'HYU'} />
        </div>
      </div>
      <p className="my-5 font-semibold text-xl text-center">
        {symbolToUniv[selectedLeague]} 리그
      </p>
    </>
  );
}

export default LeagueSelect;
