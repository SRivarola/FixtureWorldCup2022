import bgmobile from '../assets/bgmobile2.jpg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { DataContext } from '../context/dataContext';
import CountDownTimer from './CountDownTimer';

const IndexPage = () => {

  const { teams } = useContext(DataContext)
  const { logged } = useContext(UserContext)


  return (
    <div className="absolute xs:bg-[url('./assets/bg2.jpeg')] bg-secondary bg-no-repeat sm:bg-cover bg-contain w-full h-[90vh] xs:h-[100vh] sm:top-0">
      <img className='w-100% xs:hidden' src={bgmobile} alt="fondo"/>
      <div className="relative sm:flex hidden mt-[280px] ml-[240px] w-[500px] py-3">
        <div className="flex flex-row flex-wrap gap-4">
          {teams.map((team) => (
            <img key={team.docId} src={team.flag} alt="flag" className="w-[45px] h-[30px] rounded-[4px]"/>
            ))}
        </div>
      </div>
      <CountDownTimer countdownTimestampMs={1668960000000} />
      {
        !logged &&
        <div className='m-5 flex items-center justify-evenly xs:hidden'>
          <Link to='/signup/login' className='bg-primary text-white text-center font-semibold py-2 px-5 rounded-[5px] w-[120px]'>LOGIN</Link>
          <Link to='/signup/register' className='bg-primary text-white text-center font-semibold py-2 px-5 rounded-[5px] w-[120px]'>REGISTER</Link>
        </div>
      }
    </div>
  )
}

export default IndexPage