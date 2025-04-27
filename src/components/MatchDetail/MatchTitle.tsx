interface MatchTitleProps {
  datetime: string;
  place: string;
  address: string;
}

function MatchTitle({ datetime, place, address }: MatchTitleProps) {
  return (
    <>
      <div className="pl-6 mt-1 py-3 border-b-[16px] border-[#EEEEEE]">
        <p className="font-semibold">{datetime}</p>
        <p className="text-lg">{place}</p>
        <p className="text-xs">{address}</p>
      </div>
    </>
  );
}

export default MatchTitle;
