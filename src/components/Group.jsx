import { useContext } from 'react'
import { DataContext } from '../context/dataContext'
import { sortedGroup } from '../constants/functions'

const Group = ({group}) => {

  const { teams } = useContext(DataContext)
  const filteredGroup =  teams?.filter((team) => team.group === group)
  const thisGroup = sortedGroup(filteredGroup)

  return (
    <div className="bg-white flex flex-col xs:w-[320px] w-[95%] relative rounded-[10px]">
        <h1 className="font-poppins font-semibold text-secondary text-center py-3">{`GRUPO ${group}`}</h1>
        <ul className="mb-5">
          <li className='font-poppins font-semibold bg-dimWhite flex flex-row justify-start items-center mx-3 my-1 px-2 py-1 rounded-[5px]'>
            <p className='w-[66%] pl-[55px]'>TEAM</p>
            <p className='w-[16.5%] text-right'>Pts</p>
            <p className='w-[16.5%] text-right'>GF</p>
          </li>
          {
            thisGroup.map((team) => (
              <li key={team.id} className='font-poppins bg-dimWhite flex flex-row justify-start items-center mx-3 my-1 px-2 py-1 rounded-[5px]'>
                <div className='flex flex-row items-center w-[20%]'>
                  <img src={team.flag} alt={team.name} className='w-[40px] h-[30px] border rounded-[4px]' />
                </div>
                <div className='flex flex-row items-center justify-start w-[80%]'>
                  <p className="w-[66%]">{team.name}</p>
                  <p className='w-[16.5%] text-right'>{team.points}pts.</p>
                  <p className='w-[16.5%] text-right pr-1'>{team.gf}</p>
                </div>
              </li>   
            ))
          }

        </ul>
    </div>
  )
}

export default Group