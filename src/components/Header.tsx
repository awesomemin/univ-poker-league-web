import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router';

function Header() {
  return (
    <>
      <div className="h-12 flex px-3 justify-between items-center">
        <Link to="/sidebar">
          <MenuIcon />
        </Link>
        <span className="font-[Impact] text-2xl">UPL</span>
        <PersonIcon />
      </div>
    </>
  );
}

export default Header;
