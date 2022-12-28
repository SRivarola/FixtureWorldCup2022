import { useState, useContext } from 'react'
import { sortedGroup } from '../constants/functions'
import { DataContext } from '../context/dataContext'
import { OctavosLlave, MyProdeTeamOctavos, MyProdeDatesOctavos } from './index'

const MyProdeOctavos = ({column}) => {

  const { teams } = useContext(DataContext)
  const [radio1, setRadio1] = useState('')
  const [radio2, setRadio2] = useState('')
  const [radio3, setRadio3] = useState('')
  const [radio4, setRadio4] = useState('')

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
          <MyProdeTeamOctavos column={column} llave='llave1' player='1' team1={groupA[0]} team2={groupB[0]} radio={radio1} setRadio={setRadio1} />
          <MyProdeDatesOctavos llave={'llave1'} column={column} team1={groupA[0]} team2={groupB[1]} team3={groupB[0]} team4={groupA[1]} date1='03/12 18hs' date2='04/12 22hs'  radio={radio1}/>
          <MyProdeTeamOctavos column={column} llave='llave1' player='2' team1={groupB[1]} team2={groupA[1]} radio={radio1} setRadio={setRadio1} />
        </OctavosLlave>
        <OctavosLlave column={column}>
          <MyProdeTeamOctavos column={column} llave='llave2' player='1' team1={groupC[0]} team2={groupD[0]} radio={radio2} setRadio={setRadio2} />
          <MyProdeDatesOctavos llave={'llave2'} column={column} team1={groupC[0]} team2={groupD[1]} team3={groupD[0]} team4={groupC[1]} date1='03/12 22hs' date2='04/12 18hs' radio={radio2}/>
          <MyProdeTeamOctavos column={column} llave='llave2' player='2' team1={groupD[1]} team2={groupC[1]} radio={radio2} setRadio={setRadio2} />
        </OctavosLlave>
        <OctavosLlave column={column}>
          <MyProdeTeamOctavos column={column} llave='llave3' player='1' team1={groupE[0]} team2={groupF[0]} radio={radio3} setRadio={setRadio3} />
          <MyProdeDatesOctavos llave={'llave3'} column={column} team1={groupE[0]} team2={groupF[1]} team3={groupF[0]} team4={groupE[1]} date1='05/12 18hs' date2='06/12 18hs'  radio={radio3}/>
          <MyProdeTeamOctavos column={column} llave='llave3' player='2' team1={groupF[1]} team2={groupE[1]} radio={radio3} setRadio={setRadio3} />
        </OctavosLlave>
        <OctavosLlave column={column}>
          <MyProdeTeamOctavos column={column} llave='llave4' player='1' team1={groupG[0]} team2={groupH[0]} radio={radio4} setRadio={setRadio4} />
          <MyProdeDatesOctavos llave={'llave4'} column={column} team1={groupG[0]} team2={groupH[1]} team3={groupH[0]} team4={groupG[1]} date1='05/12 22hs' date2='06/12 22hs'  radio={radio4}/>
          <MyProdeTeamOctavos column={column} llave='llave4' player='2' team1={groupH[1]} team2={groupG[1]} radio={radio4} setRadio={setRadio4} />
        </OctavosLlave>
    </div>
  )
}
export default MyProdeOctavos