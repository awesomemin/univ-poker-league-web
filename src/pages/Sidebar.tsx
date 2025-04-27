import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router';
import UnivLogo from '../components/UnivLogo';

function Sidebar() {
  return (
    <>
      <Link to="/">
        <CloseIcon className="absolute top-4 right-4" />
      </Link>
      <div className="mt-[50px] mx-10">
        <p className="font-semibold text-xl">학교별 리그</p>
        <div className="flex gap-5 mt-5">
          <Link className="flex flex-col items-center gap-2" to="/">
            <UnivLogo univ="SKKU" height={48} active={true} />
            <span className="text-xs">성균관대</span>
          </Link>
          <div
            className="flex flex-col items-center gap-2"
            onClick={() => {
              alert('준비 중입니다.');
            }}
          >
            <UnivLogo univ="SNU" height={48} active={true} />
            <span className="text-xs">서울대</span>
          </div>
          <div
            className="flex flex-col items-center gap-2"
            onClick={() => {
              alert('준비 중입니다.');
            }}
          >
            <UnivLogo univ="YU" height={48} active={true} />
            <span className="text-xs">연세대</span>
          </div>
          <div
            className="flex flex-col items-center gap-2"
            onClick={() => {
              alert('준비 중입니다.');
            }}
          >
            <UnivLogo univ="KU" height={48} active={true} />
            <span className="text-xs">고려대</span>
          </div>
          <div
            className="flex flex-col items-center gap-2"
            onClick={() => {
              alert('준비 중입니다.');
            }}
          >
            <UnivLogo univ="HYU" height={48} active={true} />
            <span className="text-xs">한양대</span>
          </div>
        </div>
      </div>

      <div className="mx-10 mt-10 border-b border-[#DDDDDD]">
        <p className="font-semibold text-xl">학교 대항전</p>
        <p className="text-center text-sm mt-5 mb-[30px]">준비 중입니다.</p>
      </div>
    </>
  );
}

export default Sidebar;
