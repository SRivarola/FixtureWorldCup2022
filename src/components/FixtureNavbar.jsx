import { NavLink } from 'react-router-dom'

const FixtureNavbar = ({groupLink, eliminatoriasLink}) => {
  return (
    <div className='bg-secondary pt-1'>
      <ul className='font-semibold font-poppins text-sm flex flex-row justify-center items-center p-1'>
        <li>
          <NavLink to={groupLink} className={({ isActive }) => `${isActive ? 'text-dimWhite' : 'text-white'} mx-4`}>Fase de grupos</NavLink></li>
        <li>
          <NavLink to={eliminatoriasLink} className={({ isActive }) => `${isActive ? 'text-dimWhite' : 'text-white'} mx-4`}>Eliminatorias</NavLink></li>
      </ul>
    </div>
  )
}


export default FixtureNavbar