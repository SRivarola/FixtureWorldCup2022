import { useState, useEffect, useContext } from 'react'
import { ResultsContext } from '../context/resultsContext'
import { DataContext } from '../context/dataContext';
import { UserContext } from '../context/userContext';
import { ThreeDotsLoading } from './index'
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../constants/firebase.config';

const MyProdeTeamOctavos = ({column, llave, team1, team2, player, radio, setRadio}) => {

    const { user } = useContext(UserContext)
    const { dataOctavos } = useContext(ResultsContext)
    const [loading, setLoading] = useState(false)
    const { resultsOtctavos, getResultsOctavos } = useContext(DataContext)
    const findedLlave = resultsOtctavos?.find((item) => item.docId === llave)
    const [data, setData] = useState(null)
    
    const onChangeRadio = (team) => {
        setRadio(team)
    }

    useEffect(() => {
        setLoading(true)
        getResultsOctavos()
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, [dataOctavos]);

    useEffect(() => {
        const collectionRef = collection(db, `${user.email}octavos`)
        getDocs(collectionRef)
            .then(res => {
                const dataDB = res.docs.map((doc) => ({docId: doc.id, ...doc.data()}))
                if(column === '1'){
                    const findedData = dataDB.find(doc => (doc.player1 === team1.shortName) || (doc.player2 === team1.shortName))
                    setData(findedData ? findedData : null)
                }
                if(column === '2'){
                    const findedData = dataDB.find(doc => (doc.player1 === team2.shortName) || (doc.player2 === team2.shortName))
                    setData(findedData ? findedData : null)
                }
            })
    }, []);

    if(loading){
        return (
            <ThreeDotsLoading />
        )
    }
  return (
    <div className={`bg-dimWhite m-1 rounded-[5px] text-primary font-semibold py-1 pl-1 flex items-center justify-between ${column === '2' ? 'text-right justify-between lg:flex-row-reverse' : 'justify-between'} ${column === '1' && (findedLlave?.column1 && (player === '1' ? ((data?.winner === findedLlave?.column1?.winner?.shortName) && (data?.player1 === findedLlave?.column1?.winner?.shortName) ? 'bg-correct' : 'bg-error') : ((data?.winner === findedLlave?.column1?.winner?.shortName) && (data?.player2 === findedLlave?.column1?.winner?.shortName) ? 'bg-correct' : 'bg-error')))}`} >
        {
            column === '1' ? (
            <>
                <div className={`flex items-center ${column === '2' && 'lg:flex-row-reverse'}`}>
                    <img src={team1.flag} alt="flag" className='w-[30px] h-[20px] mr-1 rounded-[2px]' />
                    <p className='hidden ss:flex'>{team1.shortName}</p>
                </div>
                {
                    data ? (
                        <p className='mr-1 xs:mr-2'>{data.winner === team1.shortName && 'V'}</p>
                    ) : (
                        <input 
                            className='justify-self-end w-[30px] rounded-[5px] border border-primary text-center font-normal text-[14px]'
                            type='radio'
                            name={team1.shortName}
                            value={radio}
                            onChange={() => onChangeRadio(team1.shortName)}
                            checked={radio === team1.shortName ? true : false}
                        />
                    )
                }
            </>
            ) : (
                <>
                    <div className={`flex items-center ${column === '2' && 'lg:flex-row-reverse'}`}>
                        <img src={team2.flag} alt="flag" className='w-[25px] h-[18px] lg:ml-1 mr-1 rounded-[2px]' />
                        <p className='hidden ss:flex'>{team2.shortName}</p>
                    </div>
                    {
                        data ? (
                            <p className='mr-1 xs:mr-2'>{data.winner === team2.shortName && 'V'}</p>
                        ) : ( 
                            <input 
                                className='justify-self-end w-[30px] rounded-[5px] border border-primary text-center font-normal text-[14px]'
                                type='radio'
                                name={team2.shortName}
                                value={radio}
                                onChange={() => onChangeRadio(team2.shortName)}
                                checked={radio === team2.shortName ? true : false}
                            />
                        )
                    }
                </>
            )
        }
    </div>
  )
}
export default MyProdeTeamOctavos