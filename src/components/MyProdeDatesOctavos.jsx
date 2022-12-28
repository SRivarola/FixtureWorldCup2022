import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userContext'
import { DataContext } from '../context/dataContext'
import { toastSuccess, alertError, alertErrorForm } from '../constants/functions'
import { addDoc, collection, getDocs } from 'firebase/firestore/lite'
import { db } from '../constants/firebase.config'

const MyProdeDatesOctavos = ({llave, column, team1, team2, team3, team4, date1, date2, radio}) => {

  const { user } = useContext(UserContext)
  const { resultsOtctavos } = useContext(DataContext)
  const findedResults = resultsOtctavos.find((result) => result.docId === llave)
  const [resultado, setResultado] = useState(false)
  const [data, setData] = useState(null)
  
  const onHandleClick = (e, team1, team2) => {
    e.preventDefault()
    if(radio !== ''){
      const collectionRef = collection(db, `${user.email}octavos`)
      addDoc(collectionRef, {
        player1: team1.shortName,
        player2: team2.shortName,
        winner: radio
      })
        .then(() => {
          toastSuccess()
          setResultado(!resultado)
        })
        .catch((err) => {
          alertErrorForm('Hubo un error al cargar el resultado, intente nuevamente!')
        })
    } else {
      alertError()
    }
  }
  
  useEffect(() => {
    const collectionRef = collection(db, `${user.email}octavos`)
    getDocs(collectionRef)
      .then(res => {
        const dataDB = res.docs.map((doc) => ({docId: doc.id, ...doc.data()}))
        if(column === '1'){
          const findedData = dataDB.find((doc) => (doc.player1 === team1.shortName) && (doc.player2 === team2.shortName))
          setData(findedData ? findedData : null)
        }
        if(column === '2'){
          const findedData = dataDB.find((doc) => (doc.player1 === team3.shortName) && (doc.player2 === team4.shortName))
          setData(findedData ? findedData : null)
        }
      })
  }, [resultado]);

  return (
    <div className='text-center text-[12px] '>
      {column === '1' ? (
          !findedResults?.column1 &&
          <div className='flex justify-evenly items-center'>
              <p className='text-[8px] xs:text-[12px]'>{date1}</p>
              {
                  !data &&
                <button 
                  onClick={(e) => onHandleClick(e, team1, team2)} 
                  className='bg-secondary px-2 py-[1px] rounded-[4px]'
                >SET</button>
              }
          </div>
      ) : (
          !findedResults?.column2 &&
          <div className='flex justify-evenly items-center lg:flex-row-reverse'>
              <p className='text-[8px] xs:text-[12px]'>{date2}</p>
              {
                  !data &&
                  <button 
                    onClick={(e) => onHandleClick(e, team3, team4)} 
                    className='bg-secondary px-2 py-[1px] rounded-[4px]'
                  >SET</button>
              }
          </div>
      )}
  </div>
  )
}
export default MyProdeDatesOctavos