import { useContext } from 'react'
import { DataContext } from '../context/dataContext';
import { ResultsContext } from '../context/resultsContext';
import { alertError, upLoadEliminatoriasData } from '../constants/functions';
import { UserContext } from '../context/userContext';

const DatesCuartos = ({column, llave, team1, team2}) => {

    const { user } = useContext(UserContext)
    const { resultsCuartos, resultsOctavos } = useContext(DataContext)
    const { setDataCuartos, dataCuartos } = useContext(ResultsContext)
    const findedResultsCuartos = resultsCuartos.find((result) => result.docId === llave)
    const llaveOctavos = llave === 'llave1' ? ['llave1', 'llave2'] : ['llave3', 'llave4']
    const findedResultsOctavos1 = resultsOctavos.find((result) => result.docId === llaveOctavos[0])
    const findedResultsOctavos2 = resultsOctavos.find((result) => result.docId === llaveOctavos[1])

    const onHandleClick = (e) => {
        e.preventDefault()
        const player1 = e.target.form[0].value
        const player1Number = Number(player1)
        const player2 = e.target.form[2].value
        const player2Number = Number(player2)
        if ((player1 !== '') && (player2 !== '') && (player1Number == player1) && (player2Number == player2)) {
            if(player1Number > player2Number){
                upLoadEliminatoriasData('cuartos', llave, column, player1Number, player2Number, team1)
                setTimeout(() => {
                    setDataCuartos(!dataCuartos)
                }, 1000)
            } else if (player2Number > player1Number) {
                upLoadEliminatoriasData('cuartos', llave, column, player1Number, player2Number, team2)
                setTimeout(() => {
                    setDataCuartos(!dataCuartos)
                }, 1000)
            } else {
                alertError()
            }
        } else {
            alertError()
        }

    }

  return (
    <div className='text-center flex flex-col items-center justify-center gap-[5px] text-[12px]'>
        {
            column === '1' ? (
                !findedResultsCuartos?.column1 && 
                <>
                    <p>09/12 22hs</p>
                    {
                        user.email === 'srivarola@gmail.com' && findedResultsOctavos1?.column1 && findedResultsOctavos2?.column1 &&
                        <button onClick={(e) => onHandleClick(e)} className='bg-secondary px-2 py-[1px] rounded-[4px]'>SET</button>
                    }
                        
                </>
            ) : (
                !findedResultsCuartos?.column2 && 
                <>
                    <p>10/12 22hs</p>
                    {
                        user.email === 'srivarola@gmail.com' && findedResultsOctavos1?.column2 && findedResultsOctavos2?.column2 &&
                        <button onClick={(e) => onHandleClick(e)} className='bg-secondary px-2 py-[1px] rounded-[4px]'>SET</button>
                    }
                </>
            )
        }
    </div>
  )
}
export default DatesCuartos