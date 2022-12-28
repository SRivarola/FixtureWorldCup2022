import { useContext } from "react"
import { alertError, toastSuccess, upLoadEliminatoriasData } from "../constants/functions"
import { DataContext } from "../context/dataContext"
import { ResultsContext } from "../context/resultsContext"
import { UserContext } from "../context/userContext"

const DatesSemis = ({ column, llave, team1, team2 }) => {

    const { user } = useContext(UserContext)
    const { resultsCuartos, resultsSemis } = useContext(DataContext)
    const { dataSemis, setDataSemis } = useContext(ResultsContext)
    const findedResultsSemis = resultsSemis.find((result) => result.docId === llave)
    const findedResultsCuartos1 = resultsCuartos.find((result) => result.docId === 'llave1')
    const findedResultsCuartos2 = resultsCuartos.find((result) => result.docId === 'llave2')

    const onHandleClick = (e) => {
        e.preventDefault()
        const player1 = e.target.form[0].value
        const player1Number = Number(player1)
        const player2 = e.target.form[2].value
        const player2Number = Number(player2)
        if ((player1 !== '') && (player2 !== '') && (player1Number == player1) && (player2Number == player2)) {
            if(player1Number > player2Number){
                upLoadEliminatoriasData('semis', 'llave1', column, player1Number, player2Number, team1)
                setTimeout(() => {
                    setDataSemis(!dataSemis)
                }, 1000);
            } else if (player2Number > player1Number) {
                upLoadEliminatoriasData('semis', 'llave1', column, player1Number, player2Number, team2)
                setTimeout(() => {
                    setDataSemis(!dataSemis) 
                }, 1000);
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
                        !findedResultsSemis?.column1 &&
                        <>
                            <p>13/12 22hs</p>
                            {
                                user.email === 'srivarola@gmail.com' && findedResultsCuartos1?.column1 && findedResultsCuartos2?.column1 &&
                                <button  onClick={(e) => onHandleClick(e)} className='bg-secondary px-2 py-[1px] rounded-[4px]'>SET</button>
                            }
                        </>
                    ) : ( 
                        !findedResultsSemis?.column2 &&
                        <>
                            <p>14/12 22hs</p>
                            {
                                user.email === 'srivarola@gmail.com' && findedResultsCuartos1?.column2 && findedResultsCuartos2?.column2 &&
                                <button onClick={(e) => onHandleClick(e)} className='bg-secondary px-2 py-[1px] rounded-[4px]'>SET</button>
                            }
                        </>
                    )
                }
            </div>
  )
}
export default DatesSemis