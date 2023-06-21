import { useEffect, useContext, useState } from 'react'
import { ResultsContext } from '../context/resultsContext'
import { DataContext } from '../context/dataContext'
import { UserContext } from '../context/userContext'
import { TeamFinal } from "./index"
import { alertError, upLoadFinalData } from '../constants/functions'

const Final = ({column}) => {
 
  const [loading, setLoading] = useState(false)
  const { user } = useContext(UserContext)
  const { resultsSemis, resultsFinal, getResultsFinal } = useContext(DataContext)
  const { dataFinalResult, dataFinal, setDataFinal } = useContext(ResultsContext)
  
  const onHandleClick = (equipo1, equipo2) => {
    const player1= dataFinalResult.player1
    const player1Number= Number(player1)
    const player2 = dataFinalResult.player2
    const player2Number = Number(player2)
    if ((player1 !== '') && (player2 !== '') && (player1Number == player1) && (player2Number == player2)) {
      if(player1Number > player2Number){
        upLoadFinalData(player1Number, player2Number, equipo1)
        setTimeout(() => {
          setDataFinal(!dataFinal)
        }, 1000);
      } else if (player2Number > player1Number) {
        upLoadFinalData(player1Number, player2Number, equipo2)
        setTimeout(() => {
          setDataFinal(!dataFinal)
        }, 1000);
      } else {
        alertError()
      }
    } else {
      alertError()
    }
  }

  useEffect(() => {
    setLoading(true)
    getResultsFinal()
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  }, [dataFinal]);

    return (
      <div className='relative h-[500px] flex flex-col text-white justify-between py-[245px] w-[25%]'>
      <div className={`relative border-solid border-t-2 lg:border-b-2 border-r-2 lg:border-r-0 lg:border-t-0 border-white ${column === '2' && 'lg:text-right border-t-0 border-b-2'}`}>
        <TeamFinal column={column} team={column === '1' ? resultsSemis[0]?.column1?.winner : resultsSemis[0]?.column2?.winner}/>
      </div>
      {
          column === '1' && !resultsFinal[0]?.winner &&
          <p className='absolute bottom-0 w-full text-white text-center text-[12px] lg:relative lg:mt-1 lg:ml-[50%] lg:text-[14px]'>
              18/12 18hs
          </p>
      }
      {
        column === '2' && user.email === 'srivarola@gmail.com' && !resultsFinal[0]?.winner && resultsSemis[0]?.column1 && resultsSemis[0]?.column2 &&
        <div className='absolute top-0 flex justify-center w-full lg:relative lg:mt-[30px] lg:ml-[-50%]'>
          <button onClick={() => onHandleClick(resultsSemis[0]?.column1?.winner, resultsSemis[0]?.column2?.winner)} className='bg-secondary px-2 py-[1px] rounded-[4px] text-[12px] lg:text-[14px]'>
            SET
          </button>
        </div>
      }
      {
        column === '1' && resultsFinal[0]?.winner && !loading &&
        <div className='absolute mt-[165px] flex flex-col justify-center lg:ml-0 lg:mt-[-250px] lg:w-[306px] lg:p-1 font-semibold'>
          <p className='lg:text-xl text-center text-groupC'>{(resultsFinal[0]?.winner?.name).toUpperCase()}</p>
          <p className='text-center'>CAMPEÓN DEL MUNDO QATAR 2022</p>
          <div className='flex justify-center mt-3'>
            <div className='flex justify-center items-center rounded-[100%] w-[110px] h-[110px] lg:w-[170px] lg:h-[170px] border-2 border-groupD'>
              <img className='rounded-[100%] h-[100px] lg:h-[160px]' src='https://firebasestorage.googleapis.com/v0/b/fixture2022-8c7f5.appspot.com/o/worldcup.png?alt=media&token=593e2454-0191-4fa9-a9ab-fe09580ccdf1' alt='imagen de la copa del mundo'/>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Final