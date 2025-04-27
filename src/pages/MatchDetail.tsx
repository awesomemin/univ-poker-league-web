import Header from '../components/Header';
import { useParams } from 'react-router';
import LeagueInfo from '../components/MatchDetail/LeagueInfo';
import MatchTitle from '../components/MatchDetail/MatchTitle';
import MatchInfo from '../components/MatchDetail/MatchInfo';
import ParticipantsList from '../components/MatchDetail/ParticipantsList';

function MatchDetail() {
  const { matchId } = useParams();
  const safeMatchId = matchId ?? '0';
  const numericMatchId = Number(safeMatchId);
  return (
    <>
      <Header />
      <LeagueInfo leagueSymbol="SKKU" matchId={numericMatchId} />
      <MatchTitle
        datetime="5월 1일 목요일 19:00"
        place="성균관대학교 산학협력관 85529"
        address="경기도 수원시 장안구 서부로 2066"
      />
      <MatchInfo
        buyinFee={3000}
        rebuyinFee={2000}
        rebuyinLimit={1}
        startingChips={20000}
        startingBBs={200}
        entryClosedLevel={10}
        estimatedDurationInMinutes={180}
        minimumParticipants={4}
        maximumParticipants={9}
        dealer="오성민"
      />
      <ParticipantsList />
    </>
  );
}

export default MatchDetail;
