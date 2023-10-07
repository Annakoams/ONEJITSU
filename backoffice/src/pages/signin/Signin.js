
import facebook from '../../images/facebook.png';
import google from '../../images/google.png';
import './Signin.css';



function Signin({ setUser }) {
  return (
    <div className="flex flex-col container  ">
      <span className=' text_seConnecter flex justify-center mt-4 '> Se connecter</span>


      <span className='text_explication flex justify-center text-center w-3/4 mx-auto mt-2'>     Connectez-vous et profitez de tous les avantages de la plateforme pour  gérer votre club, ses adhérents et leurs cotisations.</span>

      <div className='flex flex-col  justify-center justify-start w-1/3 mx-auto mt-8'>
        <form className='flex justify-center '>
          <label className="block w-full">
            <div className='flex justify-start '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className=" block text-sm font-medium text-slate-700 ml-2">Votre e-mail</span>
            </div>
            <input type="email" className="peer ... input_singin w-full h-8 rounded-lg border-gray-300 text-center" placeholder='
Saisissez votre adresse e-mail' />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </label>
        </form >
        <form className='flex justify-center '>
          <label className="block w-full">
            <div className='flex justify-start '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>


              <span className=" block text-sm font-medium text-slate-700 ml-2">Votre mot de passe</span>
            </div>

            <input className=' peer ... input_singin w-full h-8 rounded-lg border-gray-300 text-center' type="password" placeholder='
Saisissez votre mot de passe' />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </label>
        </form>
        <button className='bg-gray-900 text-white p-2 font-bold rounded-xl ' onClick={() => { setUser({ name: "anna" }) }}   >Je me connecte</button>
        <a className='text_liens mt-6'>Mot de passe oublié?</a>
        <div className='mt-8'>
          <span className='text_icons flex justify-center text-center'>Ou je m'insctis avec</span>
          <div className='flex justify-center mb-36'>
            <img src={google} className="" />
            <img src={facebook} className="" />
          </div>

        </div>
      </div>










    </div>
  );
}

export default Signin;
