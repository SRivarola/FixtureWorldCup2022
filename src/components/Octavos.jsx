
import { useContext } from 'react'
import { DataContext } from '../context/dataContext'
import { sortedGroup } from '../constants/functions'
import { OctavosLlave, DatesOctavos, TeamOctavos} from './index';

const Octavos = ({column}) => {

    const { teams } = useContext(DataContext)
    
    const filteredGroupA = teams.filter((team) => team.group === 'A')
    const filteredGroupB = teams.filter((team) => team.group === 'B')
    const filteredGroupC = teams.filter((team) => team.group === 'C')
    const filteredGroupD = teams.filter((team) => team.group === 'D')
    const filteredGroupE = teams.filter((team) => team.group === 'E')
    const filteredGroupF = teams.filter((team) => team.group === 'F')
    const filteredGroupG = teams.filter((team) => team.group === 'G')
    const filteredGroupH = teams.filter((team) => team.group === 'H')
    
    const groupA = sortedGroup(filteredGroupA)
    const groupB = sortedGroup(filteredGroupB)
    const groupC = sortedGroup(filteredGroupC)
    const groupD = sortedGroup(filteredGroupD)
    const groupE = sortedGroup(filteredGroupE)
    const groupF = sortedGroup(filteredGroupF)
    const groupG = sortedGroup(filteredGroupG)
    const groupH = sortedGroup(filteredGroupH)

  return (
    <div className='flex flex-col justify-between text-white w-[25%]'>
        <OctavosLlave column={column}>
            <TeamOctavos column={column} llave='llave1' player='1' team1={groupA[0]} team2={groupB[0]}/>            
            <DatesOctavos llave={'llave1'} column={column} team1={groupA[0]} team2={groupB[1]} team3={groupB[0]} team4={groupA[1]} date1='03/12 18hs' date2='04/12 22hs' />
            <TeamOctavos column={column} llave='llave1' player='2' team1={groupB[1]} team2={groupA[1]}/>
        </OctavosLlave>
        <OctavosLlave column={column}>
            <TeamOctavos column={column} llave='llave2' player='1' team1={groupC[0]} team2={groupD[0]}/>
            <DatesOctavos llave={'llave2'} column={column} team1={groupC[0]} team2={groupD[1]} team3={groupD[0]} team4={groupC[1]} date1='03/12 22hs' date2='04/12 18hs' />
            <TeamOctavos column={column} llave='llave2' player='2' team1={groupD[1]} team2={groupC[1]}/>
        </OctavosLlave>
        <OctavosLlave column={column}>
            <TeamOctavos column={column} llave='llave3' player='1' team1={groupE[0]} team2={groupF[0]}/>
            <DatesOctavos llave={'llave3'} column={column} team1={groupE[0]} team2={groupF[1]} team3={groupF[0]} team4={groupE[1]} date1='05/12 18hs' date2='06/12 18hs' />
            <TeamOctavos column={column} llave='llave3' player='2' team1={groupF[1]} team2={groupE[1]}/>
        </OctavosLlave>
        <OctavosLlave column={column}>
            <TeamOctavos column={column} llave='llave4' player='1' team1={groupG[0]} team2={groupH[0]}/>
            <DatesOctavos llave={'llave4'} column={column} team1={groupG[0]} team2={groupH[1]} team3={groupH[0]} team4={groupG[1]} date1='05/12 22hs' date2='06/12 22hs' />
            <TeamOctavos column={column} llave='llave4' player='2' team1={groupH[1]} team2={groupG[1]}/>
        </OctavosLlave>
    </div>
  )
}

export default Octavos