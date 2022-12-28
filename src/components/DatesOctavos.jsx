import { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { ResultsContext } from '../context/resultsContext'
import { DataContext } from '../context/dataContext'
import { alertError, upLoadEliminatoriasData } from '../constants/functions'

const DatesOctavos = ({llave, column, team1, team2, team3, team4, date1, date2}) => {

    const { setDataOctavos, dataOctavos } = useContext(ResultsContext)
    const { user } = useContext(UserContext)
    const { resultsOctavos } = useContext(DataContext)
    const findedResults = resultsOctavos.find((result) => result.docId === llave)

    const onHandleClick = (e, equipo1, equipo2) => {
        e.preventDefault()
        const player1 = e.target.form[0].value
        const player2 = e.target.form[2].value
        const player1Number = Number(player1)
        const player2Number = Number(player2)
        if((player1 !== '') && (player2 !== '') && (player1Number == player1) && (player2Number == player2)){
            if(player1 > player2){
                upLoadEliminatoriasData('octavos', llave, column, player1Number, player2Number, equipo1)
                setTimeout(() => {
                    setDataOctavos(!dataOctavos)
                }, 1000)
            } else if (player2 > player1){
                upLoadEliminatoriasData('octavos', llave, column, player1Number, player2Number, equipo2)
                setTimeout(() => {
                    setDataOctavos(!dataOctavos)
                }, 1000)
            } else {
                alertError()
            }
        } else {
            alertError()
        }
    }

  return (
    <div className='text-center text-[12px] '>
        {column === '1' ? (
            !findedResults?.column1 &&
            <div className='flex justify-evenly items-center'>
                <p className='text-[8px] xs:text-[12px]'>{date1}</p>
                {
                    user.email === 'srivarola@gmail.com' &&
                   <button onClick={(e) => onHandleClick(e, team1, team2)} className='bg-secondary px-2 py-[1px] rounded-[4px]'>SET</button>
                }
            </div>
        ) : (
            !findedResults?.column2 &&
            <div className='flex justify-evenly items-center lg:flex-row-reverse'>
                <p className='text-[8px] xs:text-[12px]'>{date2}</p>
                {
                    user.email === 'srivarola@gmail.com' &&
                    <button onClick={(e) => onHandleClick(e, team3, team4)} className='bg-secondary px-2 py-[1px] rounded-[4px]'>SET</button>
                }
            </div>
        )}
    </div>
  )
}

export default DatesOctavos