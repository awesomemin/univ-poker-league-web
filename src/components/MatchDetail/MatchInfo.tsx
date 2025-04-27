import { formatTimeInMinutes } from '../../utils/utils';
import D from '@/src/assets/D.png';

interface MatchInfoProps {
  buyinFee: number;
  rebuyinFee: number;
  rebuyinLimit: number;
  startingChips: number;
  startingBBs: number;
  entryClosedLevel: number;
  estimatedDurationInMinutes: number;
  minimumParticipants: number;
  maximumParticipants: number;
  dealer: string;
}

function MatchInfo({
  buyinFee,
  rebuyinFee,
  rebuyinLimit,
  startingChips,
  startingBBs,
  entryClosedLevel,
  estimatedDurationInMinutes,
  minimumParticipants,
  maximumParticipants,
  dealer,
}: MatchInfoProps) {
  return (
    <>
      <div className="grid grid-cols-[auto_auto_auto_auto] text-sm mx-6 gap-y-3 pt-3">
        <div className="font-semibold">참가비</div>
        <div>{buyinFee}원</div>
        <div className="font-semibold">예상 시간</div>
        <div>{formatTimeInMinutes(estimatedDurationInMinutes)}</div>
        <div className="font-semibold">재참가비</div>
        <div>{`${rebuyinFee}원 (최대 ${rebuyinLimit}회)`}</div>
        <div className="font-semibold">최소 인원</div>
        <div>{`${minimumParticipants}명`}</div>
        <div className="font-semibold">스타팅칩</div>
        <div>
          {startingChips} ({startingBBs}BB)
        </div>
        <div className="font-semibold">최대 인원</div>
        <div>{maximumParticipants}명</div>
        <div className="font-semibold">참가 마감</div>
        <div>Level {entryClosedLevel}</div>
      </div>
      <div className="flex text-sm gap-2 pl-6 mt-5 items-center pb-3 border-b-[16px] border-[#EEEEEE]">
        <img src={D} alt="dealer" />
        <p>{dealer} 딜러가 진행해요</p>
      </div>
    </>
  );
}

export default MatchInfo;
