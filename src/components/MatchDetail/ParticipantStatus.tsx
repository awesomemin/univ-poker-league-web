interface ParticipantStatusProps {
  status: '확정' | '승인대기';
}

function ParticipantStatus({ status }: ParticipantStatusProps) {
  return (
    <div
      className={
        (status == '확정'
          ? 'bg-[#1570FF] text-white'
          : 'bg-[#DDDDDD] text-[#777777]') +
        ' ml-auto font-light px-1 rounded-sm'
      }
    >
      {status}
    </div>
  );
}

export default ParticipantStatus;
