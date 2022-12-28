import { useContext, useEffect } from 'react'
import { ResultsContext } from '../context/resultsContext'
import { DataContext } from '../context/dataContext';
import { TeamCuartos, DatesCuartos } from './index';

const Cuartos = ({column}) => {

    const { dataCuartos } = useContext(ResultsContext)
    const { getResultsCuartos, resultsOctavos } = useContext(DataContext)

    useEffect(() => {
        getResultsCuartos()
    }, [dataCuartos]);

  return (
    <div className='flex flex-col justify-between py-[40px] w-[25%]'>
        <form className={`h-[160px] text-white flex flex-col justify-between border-solid border-r-2 border-t-2 border-b-2 border-white rounded-tr-[8px] rounded-br-[8px] ${column === '2' && 'lg:border-l-2 lg:border-r-0 lg:rounded-tl-[8px] lg:rounded-bl-[8px] lg:rounded-tr-[0px] lg:rounded-br-[0px]'}`}>
            <TeamCuartos column={column} team={column === '1' ? resultsOctavos[0]?.column1?.winner : resultsOctavos[0]?.column2?.winner} llave='llave1' player='1'/>
            <DatesCuartos 
                column={column} 
                llave='llave1' 
                team1={column === '1' ? resultsOctavos[0]?.column1?.winner : resultsOctavos[0]?.column2?.winner} 
                team2={column === '1' ? resultsOctavos[1]?.column1?.winner : resultsOctavos[1]?.column2?.winner}
            />
            <TeamCuartos column={column} team={column === '1' ? resultsOctavos[1]?.column1?.winner : resultsOctavos[1]?.column2?.winner} llave='llave1' player='2'/>
        </form>
        <form className={`h-[160px] text-white flex flex-col justify-between border-solid border-r-2 border-t-2 border-b-2 border-white rounded-tr-[8px] rounded-br-[8px] ${column === '2' && 'lg:border-l-2 lg:border-r-0 lg:rounded-tl-[8px] lg:rounded-bl-[8px] lg:rounded-tr-[0px] lg:rounded-br-[0px]'}`}>
            <TeamCuartos column={column} team={column === '1' ? resultsOctavos[2]?.column1?.winner : resultsOctavos[2]?.column2?.winner} llave='llave2' player='1'/>
            <DatesCuartos 
                column={column} 
                llave='llave2' 
                team1={column === '1' ? resultsOctavos[2]?.column1?.winner : resultsOctavos[2]?.column2?.winner} 
                team2={column === '1' ? resultsOctavos[3]?.column1?.winner : resultsOctavos[3]?.column2?.winner}
            />
            <TeamCuartos column={column} team={column === '1' ? resultsOctavos[3]?.column1?.winner : resultsOctavos[3]?.column2?.winner} llave='llave2' player='2'/>
        </form>
    </div>
  )
}

export default Cuartos