import logo from '../../images/logo.png';
import './Header.css';

function Header() {
  return (
   
      <header className="w-full flex flex-row justify-center bg-white p-6 border-b-4 --tw-border-opacity: 0.5;
      border-color: rgb(209 213 219 / var(--tw-border-opacity));">
        <img src={logo} className="" alt='logo Onejitsu' />
      </header>

  );
}

export default Header;