import { LeagueSymbol } from '../../types/league';
import UnivLogo from '../UnivLogo';
import ParticipantStatus from './ParticipantStatus';

interface ParticipantsListItemProps {
  participantInfo:
    | {
        userId: number;
        profileImgUrl: string;
        nickname: string;
        league: LeagueSymbol;
        status: '승인대기' | '확정';
        upl: number;
      }
    | undefined;
}

function ParticipantsListItem({ participantInfo }: ParticipantsListItemProps) {
  if (typeof participantInfo == 'undefined') {
    return (
      <div className="h-10 border-b border-[#DDDDDD] flex items-center justify-center text-sm text-[#777777]">
        공석
      </div>
    );
  }
  return (
    <div className="h-10 border-b border-[#DDDDDD] flex items-center text-sm">
      <img
        src={participantInfo.profileImgUrl}
        alt="profile image"
        className="ml-1 w-6 h-6 rounded-full"
      />
      <span className="ml-2">{participantInfo.nickname}</span>
      <div className="ml-1">
        <UnivLogo univ="SKKU" height={16} active={true} />
      </div>
      <ParticipantStatus status="확정" />
      <span className="ml-3 font-[Impact]">UPL {participantInfo.upl}</span>
    </div>
  );
}

export default ParticipantsListItem;
