import MatchListUnit from './MatchListUnit';

function MatchList() {
  return (
    <>
      <div className="mx-5 mt-5">
        <MatchListUnit
          datetime="5월 1일 목요일 19:00"
          place="성균관대학교 산학협력관 85529"
          minimumParticipants={4}
          maximumParticipants={9}
          currentParticipants={9}
          matchId={1}
        />
        <MatchListUnit
          datetime="5월 1일 목요일 19:00"
          place="성균관대학교 산학협력관 85529"
          minimumParticipants={4}
          maximumParticipants={9}
          currentParticipants={9}
          matchId={1}
        />
      </div>
    </>
  );
}

export default MatchList;
