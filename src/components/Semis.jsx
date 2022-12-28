import { useContext, useEffect } from "react"
import { ResultsContext } from '../context/resultsContext'
import { DataContext } from "../context/dataContext"
import { TeamSemis, DatesSemis } from "./index"

const Semis = ({column}) => {

    const { dataSemis } = useContext(ResultsContext)
    const { resultsCuartos, getResultsSemis } = useContext(DataContext)

    useEffect(() => {
        getResultsSemis()
    }, [dataSemis]);

  return (
    <div className='h-[500px] flex flex-col justify-between py-[105px] w-[25%]'>
        <form className={`h-[310px] text-white flex flex-col justify-between border-solid border-t-2 border-r-2 border-b-2 rounded-tr-[10px] rounded-br-[10px] ${column === '2' && 'lg:border-l-2 lg:border-r-0 lg:rounded-tr-[0px] lg:rounded-bl-[10px] lg:rounded-tl-[10px]'} border-white`}>
            <TeamSemis 
                column={column} 
                team={
                    column === '1' ? 
                        (resultsCuartos[0]?.column1?.winner ? resultsCuartos[0]?.column1?.winner : null) 
                        : 
                        (resultsCuartos[0]?.column2?.winner ? resultsCuartos[0]?.column2?.winner : null)
                    } 
                player='1' 
            />
            <DatesSemis 
                column={column} 
                llave='llave1' 
                team1={
                    column === '1' ? resultsCuartos[0]?.column1?.winner : resultsCuartos[0]?.column2?.winner
                } 
                team2={
                    column === '1' ? resultsCuartos[1]?.column1?.winner : resultsCuartos[1]?.column2?.winner
                }/>
            <TeamSemis 
                column={column} 
                team={
                    column === '1' ? 
                        (resultsCuartos[1]?.column1?.winner ? resultsCuartos[1]?.column1?.winner : null) 
                        : 
                        (resultsCuartos[1]?.column2?.winner ? resultsCuartos[1]?.column2?.winner : null)
                    } 
                player='2' 
            />
        </form>
    </div>
  )
}

export default Semis