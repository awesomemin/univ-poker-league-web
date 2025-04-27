import ParticipantsListItem from './ParticipantsListItem';
import fish from '@/src/assets/tier/fish.png'; // 프로토타입용으로 가져옴. 추후 실 구현에 제거

function ParticipantsList() {
  return (
    <div className="pl-6 py-3">
      <p className="text-lg font-semibold">참가자</p>
      <div className="flex flex-col px-7">
        <ParticipantsListItem
          participantInfo={{
            userId: 1,
            profileImgUrl: fish,
            nickname: '마크주커버그',
            league: 'SKKU',
            status: '확정',
            upl: 10000,
          }}
        />
        <ParticipantsListItem participantInfo={undefined} />
        <ParticipantsListItem participantInfo={undefined} />
        <ParticipantsListItem participantInfo={undefined} />
        <ParticipantsListItem participantInfo={undefined} />
        <ParticipantsListItem participantInfo={undefined} />
        <ParticipantsListItem participantInfo={undefined} />
        <ParticipantsListItem participantInfo={undefined} />
        <ParticipantsListItem participantInfo={undefined} />
      </div>
    </div>
  );
}

export default ParticipantsList;
