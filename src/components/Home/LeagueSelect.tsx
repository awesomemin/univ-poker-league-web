import { useState } from 'react';
import UnivLogo from '../UnivLogo';
import { convertSymbolToName } from '../../utils/utils';
import { LeagueSymbol } from '../../types/league';

function LeagueSelect() {
  const [selectedLeague, setSelectedLeague] = useState<LeagueSymbol>('SKKU');
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
        {convertSymbolToName(selectedLeague)} 리그
      </p>
    </>
  );
}

export default LeagueSelect;
