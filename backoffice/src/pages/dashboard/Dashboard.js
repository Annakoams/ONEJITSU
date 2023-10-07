import { useState, useEffect } from 'react';
import Header2 from '../../components/header/HeaderDashbord';
import Footer from '../../components/footer/Footer.js';
import carte_events from '../../images/carte_events.png';
import './Dashboard.css';
import { DonutChart } from '../../components/donut_chart/DonutChart';
import fakeData from '../../fakeData';

function Dashboard() {


  const [cartesSemaine, setCartesSemaine] = useState([

    { nom: 'Cette semaine', pourcent: '+4%', nombre: 5, raison: ' nouveaux adhérents', background: 'bg-red-100' },
    { nom: 'Cette semaine', pourcent: '+17%', nombre: 3, raison: ' demandes d’adhésion', background: 'bg-amber-50' },
    { nom: 'Ce mois-ci', pourcent: '+12%', nombre: 229.90 + "€", raison: ' de cotisations', background: 'bg-purple-100' }

  ])

  const ItemCarteSEmaine = ({ carte }) => {
    return <div className={'carte_semaine mx-4  ' + carte.background}>
      <div className='flex justify-between mx-8 my-4 '>
        <span>{carte.nom}</span>
        <span className='text-green-500'> {carte.pourcent}</span>
      </div>
      <div className='flex  mx-8 my-4'>
        <span className='mr-4 font-bold'>{carte.nombre}</span>
        <span>{carte.raison}</span>
      </div>
    </div>
  }

  const [cartesCours, setCartesCours] = useState(fakeData.cours)

  const ItemCarteCours = ({ cours }) => {
    return <div className=' carte_cours  bg-white flex flex-row  mx-4 m-3 w-full'>
      <div className='flex w-full flex-col  p-4 items-center justify-center'>
        <span>{cours.nom}</span>
        <div className='flex justify-between flex-row'>
          <span>{cours.date}</span>
          <span className='text-green-500'> {cours.heure}</span>
        </div>
        <span>{cours.club}</span>
      </div>
      <div className='flex flex-row justify-start w-1/2 p-4'>

        {cours.participants.filter((participant, index) => { return index < 5 }).map((participant, index) => (
          <div className=' w-12 h-12 -ml-4 flex flex-row justify-start' key={index}>

            <img className='w-12 h-12 rounded-2xl ' src={participant.urlImage} alt='img' />

          </div>
        ))}
        {cours.participants.length > 5 && <div className='w-12 h-12 -ml-4 rounded-2xl bg-gray-200 text-black flex flex-row justify-center items-center text-xs'>+{cours.participants.length - 5}</div>}

      </div>
    </div>
  }
  const [carteEvents, setCarteEvents] = useState([
    { group: 'Prochain évènement', deteStart: 'DU 2 MAI 2023 ', hourStart: '10:00', deteEnd: ' 7 MAI 2023', hourEnd: '14:00', title: 'Portes Ouvertes AJP 2023', club: 'Académie Jackson Paulo - Lille, France', numParticipant: '32' },
    { group: 'Dernière actualité', deteStart: 'Il y a 3 jours ', title: 'Portes Ouvertes AJP 2023', club: 'Académie Jackson Paulo - Lille, France', numParticipant: '' }
  ])
  const ItenCarteEvents = ({ events }) => {
    return <div className=' flex flex-col w-1/2 justify-around pr-4 '>
      <div className='text_title flex justify-start'>{events.group}</div>
      <div className='bg-white w-full flex  m-auto drop-shadow-md rounded-2xl '>
        <div className='w-2/3'>
          <div className='flex justify-between text-red-500 px-2 '>
            <div>{events.deteStart}</div>
            <div>{events.hourStart}</div>
            <div>{events.deteEnd}</div>
            <div>{events.hourEnd}</div>
          </div>
          <div className='flex flex-col'>
            <span className=''>{events.title}</span>
            <span>{events.club}</span>
            <span><img src="" />{events.numParticipant}</span>
          </div>
        </div>

        <div className='w-1/3'>
          <img src={carte_events} />
        </div>
      </div>
    </div>

  }

  const [isDisplayAdherents , setIsDisplayAdherents ] = useState(true)

  const toggleDonutChart = () => {
    setIsDisplayAdherents(!isDisplayAdherents);
  };


  return (
    <div className="flex flex-col min-h-screen bg-red-300 h-full">
      <Header2 />
      <main className="flex-grow ">
      
      <section className='flex justify-around m-8'>
        {cartesSemaine.map(carte =>
          <ItemCarteSEmaine carte={carte} key={carte.nom} />
        )
        }
      </section>

      <section className=' flex m-8'>
        <div className='w-1/2 '>
          <div className='flex justify-between  mx-8 '>
            <span className='text_title ' onClick={toggleDonutChart}>Mes adhérents</span>
            <span className='text_title' onClick={toggleDonutChart}>Mes cotisations reçues</span>
          </div>
           
            <div className='grafique  flex justify-center m-auto bg-white drop-shadow-md rounded-2xl'>
              <DonutChart data={isDisplayAdherents ? fakeData.dataAdherents : fakeData.dataCotisations } />
            </div>
          

        </div> 
        <div  className='w-1/2  '>
          <div   className='text_title '>
            <span className='text_title ml-8'>Mes cours</span>
          </div>
          <div className='flex  flex-col  justify-start mx-4  '>
            {cartesCours.map(cours =>
              <ItemCarteCours cours={cours} key={cours.nom} />
            )
            }
          </div>
        </div>
      </section>
      <section className='flex justify-between mx-8'>
        {carteEvents.map(events =>
          <ItenCarteEvents events={events} key={events.nom} />
        )
        }
      </section>
      </main>
        <Footer  className='sticky bottom-0'/>
    </div>
  );
}

export default Dashboard;