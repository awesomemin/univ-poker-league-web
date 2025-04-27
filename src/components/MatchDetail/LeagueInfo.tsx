import { LeagueSymbol } from '../../types/league';
import { convertSymbolToName } from '../../utils/utils';
import UnivLogo from '../UnivLogo';

interface LeagueInfoProps {
  leagueSymbol: LeagueSymbol;
  matchId: number;
}

function LeagueInfo({ leagueSymbol, matchId }: LeagueInfoProps) {
  return (
    <>
      <div className="flex items-center pl-5 py-2 mt-3">
        <UnivLogo univ={leagueSymbol} height={48} active={true} />
        <span className="font-semibold text-xl ml-3">
          {convertSymbolToName(leagueSymbol)} 리그
        </span>
        <span className="font-semibold text-sm text-[#777777] ml-1">
          #{matchId}
        </span>
      </div>
    </>
  );
}

export default LeagueInfo;
