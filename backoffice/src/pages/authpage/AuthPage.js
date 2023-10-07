import './AuthPage.css';
import { useState } from "react";
import Signup from '../signup/Signup';
import Signin from '../signin/Signin';
import Header from '../../components/header/Header'; 

function AuthPage({ setUser }) {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <div>
      <Header /> 
      
      <div className='flex flex-row justify-center items-center container    '>
        <div className='mb-10 '>
          {hasAccount ? <Signin setUser={setUser} /> : <Signup setUser={setUser} />}
          {hasAccount ? (
            <div className ='flex justify-center text-center flex-col'   onClick={() => { setHasAccount(false) }}>Vous n'êtes pas encore inscrits ? <span className='text_liens'>Je crée un compte</span></div>
          ) : (
            <div className ='flex justify-center text-center flex-col mb-8 ' onClick={() => { setHasAccount(true) }}>Vous êtes déja inscrits ? <span className='text_liens'>  Connectez-vous</span></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
