import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import auth from "./services/auth";
import AuthPage from "./pages/authpage/AuthPage";
import ChoixClub from "./pages/choixclub/ChoixClub";
import academie from './images/academie.png';
import tableau from './images/icons/tableau.png';
import adherents from './images/icons/adherents.png';
import informations from './images/icons/informations.png';
import cours from './images/icons/cours.png';
import evenements from './images/icons/evenements.png';
import actualites from './images/icons/actualites.png';
import parametres from './images/icons/parametres.png';
import assistance from './images/icons/assistance.png';
import changer from './images/icons/changer.png';
import deconnexion from './images/icons/deconnexion.png';

import './Layout.css';
import DarkModeButton from "./components/darkModeButton/DarkModeButton";

const Layout = () => {


  const location = useLocation();
  const [user, setUser] = useState(auth.user());
  const [displayMenu, setDisplayMenu] = useState(false);
  const [club, setClub] = useState(null)
  const [showAvis, setShowAvis] = useState(false);
  //if(location.pathname.startsWith("/map/"))

  const logout = () => {
    auth.logout();
    setUser(null);
  }

  const handleAvisClick = () => {
    setShowAvis(!showAvis);
  }
  return <div className="flex flex-col md:flex-row min-h-screen relative z-10 ">

    {user && club &&
      <div className="flex flex-col shadow md:h-full  text-white fixed md:static p-2 w-1/4 z-8 bg-white min-h-screen ">
        <div className="">
          <div className="flex flex-col">
            <img className="logoDashbord m-auto mt-8 mb-6" src={academie} alt='logo de club' />
            <span className="text_logoDashbord text-black text-center">Académie Jackson Paulo</span>
            <div className='flex mx-2 justify-center'>
              <div className='circle'> </div>
              <span className="text-green-500 text-center ml-2">Ouvert aujourd’hui</span>
            </div>

            <div className="avis flex justify-center mr-2" onClick={handleAvisClick}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gold" className="mr-2 w-6 h-6 ">
                <path stroke-linecap="round" fill='gold' stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <span className="text-black mr-2 ">4.8</span>
              <span className="text-black mr-2">(176)</span>
            </div>
            {showAvis && (
              <div className="fixed top-0 left-0 w-screen h-screen bg-gray-500/50 flex items-center justify-center z-40">
                <div className="w-96 h-96 bg-white relative z-50">
                  <button className="absolute top-2 right-2 text-gray-500"onClick={handleAvisClick}> X </button>
                  {/* contenue */}
                </div>
              </div>
            )}
          </div>
        </div>

        <ul className={"flex flex-col p-2  md:block text-black  mt-4  " + (displayMenu ? " block " : " hidden")}>
          <li className="flex flex-row p-2 link_dashbord"> <img src={tableau} alt='icon tableau de bord' className="mr-3 " /><Link onClick={() => setDisplayMenu(false)} to="/"    > Tableau de bord</Link> </li>
          <li className="flex flex-row p-2 link_dashbord"><img src={adherents} alt='icon tableau de bord' className="mr-4" /><Link onClick={() => setDisplayMenu(false)} to="/adherents"    > Mes adhérents</Link> </li>
          <li className="flex flex-row p-2 link_dashbord"><img src={informations} alt='icon tableau de bord' className="mr-3" /><Link onClick={() => setDisplayMenu(false)} to="/infomations"    > Mes informations</Link> </li>
          <li className="flex flex-row p-2 link_dashbord"><img src={cours} alt='icon tableau de bord' className="mr-4" /><Link onClick={() => setDisplayMenu(false)} to="/cours"    > Mes cours</Link> </li>
          <li className="flex flex-row p-2 link_dashbord"><img src={evenements} alt='icon tableau de bord' className="mr-5" /><Link onClick={() => setDisplayMenu(false)} to="/events"    > Mes évènements</Link> </li>
          <li className="flex flex-row p-2 link_dashbord"><img src={actualites} alt='icon tableau de bord' className="mr-4" /><Link onClick={() => setDisplayMenu(false)} to="/actualites"    > Mes actualités</Link> </li>

          <div className="border-b-4 mx-2 my-6"></div>

          <li className="flex flex-row p-2 link_dashbord"><img src={parametres} alt='icon tableau de bord' className="mr-5" /><Link onClick={() => setDisplayMenu(false)} to="/settings"    > Paramètres</Link> </li>
          <li className="flex flex-row p-2 link_dashbord"><img src={assistance} alt='icon tableau de bord' className="mr-5" /><Link onClick={() => setDisplayMenu(false)} to="/settings"    > Assistance</Link> </li>
          <li className="flex flex-row py-2 link_dashbord "><img src={changer} alt='icon tableau de bord' className="mr-6 ml-2" /><button onClick={() => { setClub(null) }}
            className=''>Changer de club</button> </li>

          <DarkModeButton/>
          <div className="border-b-4 mx-2 my-5"></div>

          <li className="flex flex-row py-2 link_dashbord text-rose-600 mt-20"><img src={deconnexion} alt='icon tableau de bord' className="mr-2 ml-2" /><button onClick={logout}
            className='mr-5 ml-2'>Déconnexion</button> </li>
        </ul>
      </div>
    }


    <div className=" mt-16 md:mt-0  w-full">{user && club ? <Outlet /> : (user ? <ChoixClub setClub={setClub} /> : <AuthPage setUser={setUser} />)}
    </div></div>

};

export default Layout;