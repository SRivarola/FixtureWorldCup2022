import { useState, useContext } from 'react'
import logo from '../assets/logoqatar.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import { BiMenuAltRight, BiX, BiLogOut } from "react-icons/bi";
import { UserContext } from '../context/userContext';

const Navbar = () => {

  const [menu, setMenu] = useState(false)
  const { logged, logout, user } = useContext(UserContext);
  const navigate = useNavigate()

  const signOut = () => {
    logout()
    setMenu(false)
    setTimeout(() => {
      navigate('/signup/login')
    }, 2500);
  }
  return (
    <nav className='w-full h-[100px] relative flex flex-row sm:justify-start justify-center items-center shadow-md shadow-gray-400 z-50 sm:z-10 bg-white'>
      <div className='flex items-center px-10 cursor-pointer'>
        <NavLink to='/'><img src={logo} alt="logo" className='relative h-[80px] w-[175px] cursor-pointer'/></NavLink>
      </div>
      <div className='hidden sm:flex flex-row flex-1 justify-end pr-5'>
        <ul className='flex flex-row items-center font-semibold font-poppins'>
          <NavLink to='/groups' className={({ isActive }) => `${isActive ? 'text-secondary' : 'text-primary'} mx-5`}>
            <li className='cursor-pointer'>Grupos</li>
          </NavLink>
          {
            logged && (<>
              <NavLink to='/GroupFixture' className={({ isActive }) => `${isActive ? 'text-secondary' : 'text-primary'} mx-5`}>
                <li className='cursor-pointer'>Fixture</li>
              </NavLink>
              <NavLink to='/puntajes' className={({ isActive }) => `${isActive ? 'text-secondary' : 'text-primary'} mx-5`}>
                <li className='cursor-pointer'>{user?.groupName}</li>
              </NavLink> <NavLink to='/miFixture/grupos' className={({ isActive }) => `${isActive ? 'text-secondary' : 'text-primary'} mx-5`}>
                <li className='cursor-pointer'>Prode</li>
              </NavLink>
            </>)
          }
          {
            logged ? (
              <BiLogOut onClick={signOut} className='text-[25px] mx-5 cursor-pointer'/>
            ) : (
              <NavLink to='/signup/register' className={({ isActive }) => `${isActive ? 'text-secondary ' : 'text-primary'} mx-5 m-[10px]`}>
                <li className='cursor-pointer'>Login</li>
              </NavLink>
            )


          }
        </ul>
      </div>
      <div onClick={() => setMenu(!menu)} className='sm:hidden flex absolute right-[20px] top-[40px]'>
        {
          menu ? (
            <BiX className='text-[25px]'/>
            ) : (
            <BiMenuAltRight className='text-[25px]' />
          )
        }
      </div>
      {
        menu &&
        <div className='sm:hidden flex justify-center absolute w-[100%] top-[100px] bg-white shadow-md shadow-gray-400 z-50'>
          <ul className='flex flex-col justify-center items-center mt-4 font-semibold font-poppins'>
            <NavLink to='/groups' onClick={() => setMenu(!menu)} className={({ isActive }) => `${isActive ? 'text-secondary ' : 'text-primary'} m-[10px]`}>
              <li className='cursor-pointer'>Grupos</li>
            </NavLink>
            {
              logged && (<>
                <NavLink to='/GroupFixture' onClick={() => setMenu(!menu)} className={({ isActive }) => `${isActive ? 'text-secondary ' : 'text-primary'} m-[10px]`}>
                  <li className='cursor-pointer'>Fixture</li>
                </NavLink>
                <NavLink to='/puntajes' onClick={() => setMenu(!menu)} className={({ isActive }) => `${isActive ? 'text-secondary ' : 'text-primary'} m-[10px]`}>
                  <li className='cursor-pointer'>{user?.groupName}</li>
                </NavLink>
                  <NavLink to='/miFixture/grupos' onClick={() => setMenu(!menu)} className={({ isActive }) => `${isActive ? 'text-secondary ' : 'text-primary'} m-[10px]`}>
                  <li className='cursor-pointer'>Prode</li>
                </NavLink>
              </>)
            }
            {
              logged &&
              <li onClick={signOut} className='cursor-pointer m-[10px]'>Log Out</li>
            }
          </ul>
        </div>
      }
    </nav>
  )
}

export default Navbar