import iconlight from '../../images/icons/cloche.png'
import icondark from '../../images/icons/chat.png'
import './DarkModeButton.css';
import { useState } from 'react';



function DarkModeButton() {

const [isDarkMode,setIsDarkMode] = useState(localStorage.getItem('darkMode') == 'darkMode')
const switchMode = ()=>{
    localStorage.setItem('darkMode', isDarkMode? '' : 'darkMode')
    setIsDarkMode(!isDarkMode)

}
  return (
 
    <div className="flex flex-row flex-start items-center ">

      <img className='m-1 w-8 h-8' src={iconlight}/>
        <div className='flex flex-row w-16' onClick={switchMode}>
            <div className='w-16 h-8 bg-gray-700 rounded-full'></div>
            <div className={' w-8 h-8 bg-white border-2 border-gray-700 rounded-full  transition-all duration-300   ' + (isDarkMode ? '-ml-8' :'-ml-16')}></div>
        </div>
      <img className='m-1 w-8 h-8' src={icondark}/>



    </div>

  );
}

export default DarkModeButton;