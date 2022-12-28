import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../context/dataContext'
import { ResultsContext } from '../context/resultsContext'
import ThreeDotsLoading from './Loadings/ThreeDots'

const TeamCuartos = ({column, team, llave, player}) => {

    const { dataOctavos, dataCuartos } = useContext(ResultsContext)
    const [loading, setLoading] = useState(false)
    const { resultsCuartos, getResultsCuartos } = useContext(DataContext)
    const findedLlave = resultsCuartos?.find((item) => item.docId === llave)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2500);
    }, [dataOctavos]);
   
    useEffect(() => {
        setLoading(true)
        getResultsCuartos()
        setTimeout(() => {
            setLoading(false)
        }, 2500);
    }, [dataCuartos]);
    
    if(loading){
        return (
            <ThreeDotsLoading />
        )
    }
  return (
    <div className={`px-2 flex text-primary items-center justify-between bg-dimWhite m-1 p-1 rounded-[5px] ${column === '2' && 'lg:text-right lg:flex-row-reverse'}`}>
        {
            team ? (
                <>
                    <div className={`flex items-center ${column === '2' && 'lg:flex-row-reverse'}`}>
                        <img src={team.flag} className={`w-[30px] h-[20px] rounded-[2px] mr-1 ${column === '2' && 'lg:mr-0 lg:ml-1'}`} alt="flag"/>
                        <p className='hidden ss:flex font-semibold'>{team.shortName}</p>
                    </div>
                    {
                        column === '1' ? (
                            findedLlave?.column1 ? (
                                <p className='font-semibold'>{player === '1' ? findedLlave?.column1.resplayer1 : findedLlave?.column1.resplayer2}</p>
                            ) : (
                                <input className='justify-self-end w-[25px] rounded-[5px] border border-primary text-center font-normal text-[14px]'/>
                            )
                        ) : (
                            findedLlave?.column2 ? (
                                <p className='font-semibold'>{player === '1' ? findedLlave?.column2.resplayer1 : findedLlave?.column2.resplayer2}</p>
                            ) : (
                                <input className='justify-self-end w-[25px] rounded-[5px] border border-primary text-center font-normal text-[14px]'/>
                            )
                        )
                    }
                </>
            ) : (
                <p className='font-semibold text-[12px] xs:text-[16px] w-full text-center'>CUARTOS</p>
            )
        }
    </div>
  )
}

export default TeamCuartos
