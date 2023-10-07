import { useState } from 'react';
import academie from '../../images/academie.png'

import './ChoixClub.css';
function ChoixClub({ setClub }) {

const[clubs, setClubs]= useState([
            
  {nom:'Académie Jackson Paulo', note:4.6 , urlImage: academie,},    //mettre d'autres
  {nom:'Sankuno Yawaratori', note:4.0 , urlImage: academie },
  {nom:'TOHO JJB', note:3.9 , urlImage: academie }
]) 

 const ItemClub = ({club})=>{
return <div className='flex flex-col w-full border mb-5 rounded-xl'  >
<div className='flex justify-content'>
  <img src={club?.urlImage} className="m-4" />
  <div className=' mt-6'>
    <span className='text-center text_ClubChoix '>{club.nom}</span>
      <div className='flex justify-around '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gold" className="w-8 h-8 ">
          <path stroke-linecap="round" fill="gold" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
        <span>{club.note}</span>
        <span>(176)</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        <span>7.6 km</span>
      </div>
      <div className='flex mx-2 '>
        <div className='circle'> </div>
        <span className="text-green-500 text-center ml-2">Ouvert aujourd’hui</span>
      </div>

  </div>
</div>
<button className='bg-gray-900 text-white p-2 font-bold rounded-xl  mx-4 mb-2' onClick={() => { setClub({ name: "anna" }) }}  >Gérer ce club</button>
</div>
 }
  return (
    <div className="flex flex-col container">
      <span className=' text_seConnecter flex justify-center mt-4 '> Choisissez votre club</span>
      <span className='text_seConnecterClub flex justify-center text-center w-3/4 mx-auto mt-2'>   Sélectionnez le club que vous souhaitez administrer dans la liste ci-dessous.</span>
      <div className='flex flex flex-col  justify-center justify-start w-1/2 mx-auto mt-8'>
{clubs.map(club=>
        <ItemClub  club = {club} key={club.nom} />
)
}
        <button className='butonC_Club bg-white text-black p-2 font-bold rounded-xl mb-6 ' onClick={() => { setClub({ name: "anna" }) }}   >Créer un club</button>
      </div>
    </div>
  );
}

export default ChoixClub;