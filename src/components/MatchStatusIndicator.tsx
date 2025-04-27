function MatchStatusIndicator({ status }: { status: '마감' | '신청가능' }) {
  return (
    <>
      <div
        className={
          (status == '마감' ? 'bg-[#777777]' : 'bg-[#1570FF]') +
          ' text-white text-xs w-[58px] px-2 py-1 rounded-sm absolute right-2 top-10 text-center'
        }
      >
        {status}
      </div>
    </>
  );
}

export default MatchStatusIndicator;
