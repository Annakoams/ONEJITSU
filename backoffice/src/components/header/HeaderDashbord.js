import cloche from '../../images/icons/cloche.png'
import chat from '../../images/icons/chat.png'
import './HeaderDashbord.css';

function Header() {
  return (

    <header className="justify-between w-full flex flex-row flex-start bg-white p-6 border-b-2 --tw-border-opacity: 0.5;
      border-color: rgb(209 213 219 / var(--tw-border-opacity));">
      <span className='text_headerDashbord'>Tableau de bord</span>
      <div className='flex justify h-11'>
        <img className='mr-4' src={cloche} alt='icon cloche' />
        <img src={chat} alt='icon chat' />
      </div>


    </header>

  );
}

export default Header;