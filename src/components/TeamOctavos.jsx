import { useState, useEffect, useContext } from 'react'
import { ResultsContext } from '../context/resultsContext'
import { UserContext } from '../context/userContext'
import { DataContext } from '../context/dataContext'
import { ThreeDotsLoading } from './index'

const TeamOctavos = ({column, llave, team1, team2, player}) => {

    const { dataOctavos } = useContext(ResultsContext)
    const { user } = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const { resultsOctavos, getResultsOctavos } = useContext(DataContext)
    const findedLlave = resultsOctavos?.find((item) => item.docId === llave)
    
    useEffect(() => {
        setLoading(true)
        getResultsOctavos()
        setTimeout(() => { 
            setLoading(false)
        }, 2500);
    }, [dataOctavos]);

    if(loading){
        return (
            <ThreeDotsLoading />
        )
    }
  return (
    <div className={`bg-dimWhite m-1 rounded-[5px] text-primary font-semibold p-1 flex items-center ${column === '2' ? 'text-right justify-between lg:flex-row-reverse' : 'justify-between'}`}>
        {
            column === '1'
            ? (
                <>
                    <div className={`flex items-center ${column === '2' && 'lg:flex-row-reverse'}`}>
                        <img src={team1.flag} alt="flag" className='w-[30px] h-[20px] mr-1 rounded-[2px]' />
                        <p className='hidden ss:flex'>{team1.shortName}</p>
                    </div>
                    {
                        findedLlave?.column1 ? (
                            <p className='mr-1'>{player === '1' ? findedLlave.column1.resplayer1 : findedLlave.column1.resplayer2 }</p>
                        ) : (
                            user.email === 'srivarola@gmail.com' ?  
                                <input className='justify-self-end w-[30px] rounded-[5px] border border-primary text-center font-normal text-[14px]'/>
                            :
                                ''
                        )
                    }
                </>
            ) : (
                <>
                    <div className={`flex items-center ${column === '2' && 'lg:flex-row-reverse'}`}>
                        <img src={team2.flag} alt="flag" className='w-[30px] h-[20px] lg:ml-1 mr-1 rounded-[2px]' />
                        <p className='hidden ss:flex'>{team2.shortName}</p>
                    </div>
                    {
                        findedLlave?.column2 ? (
                            <p className='mr-1 xs:ml-1'>{player === '1' ? findedLlave.column2.resplayer1 : findedLlave.column2.resplayer2 }</p>
                        ) : (
                            user.email === 'srivarola@gmail.com' ?  
                                <input className='justify-self-end w-[30px] rounded-[5px] border border-primary text-center font-normal text-[14px]'/>
                            :
                                ''
                        )
                    }
                </>
            )
        }
    </div>
  )
}

export default TeamOctavos