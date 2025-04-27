import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MatchStatusIndicator from './MatchStatusIndicator';
import { Link } from 'react-router';

interface MatchListUnitProps {
  datetime: string;
  place: string;
  minimumParticipants: number;
  maximumParticipants: number;
  currentParticipants: number;
  matchId: number;
}

function MatchListUnit({
  datetime,
  place,
  minimumParticipants,
  maximumParticipants,
  currentParticipants,
  matchId,
}: MatchListUnitProps) {
  return (
    <>
      <Link
        className="flex flex-col relative border-b border-[#DDDDDD]"
        to={`/match/${matchId}`}
      >
        <p className="text-sm mt-3 ml-3">{datetime}</p>
        <p className="text-xs ml-5 mt-2 text-[#777777]">{place}</p>
        <p className="text-xs ml-5 mt-1 mb-3 text-[#777777]">
          최소 시작 인원 : {minimumParticipants}
        </p>
        <div className="absolute top-3 right-3 flex items-center gap-1">
          {currentParticipants} / {maximumParticipants}
          <PeopleAltIcon />
        </div>
        <MatchStatusIndicator status="마감" />
      </Link>
    </>
  );
}

export default MatchListUnit;
