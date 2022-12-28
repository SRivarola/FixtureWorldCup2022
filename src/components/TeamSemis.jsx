import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/dataContext';
import { ResultsContext } from '../context/resultsContext';
import ThreeDotsLoading  from './Loadings/ThreeDots';

const TeamSemis = ({column, team, player}) => {

    const { dataSemis, dataCuartos } = useContext(ResultsContext)
    const { resultsSemis, getResultsSemis } = useContext(DataContext)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2500);
    }, [dataCuartos]);

    useEffect(() => {
        setLoading(true)
        getResultsSemis()
        setTimeout(() => {
            setLoading(false)
        }, 2500);
    }, [dataSemis]);

    if(loading){
        return (
            <ThreeDotsLoading />
        )
    }
  return (
    <div className={`flex flex-row justify-between items-center m-1 p-1 bg-dimWhite rounded-[5px] text-primary font-semibold ${column === '2' && 'lg:flex-row-reverse lg:text-right'}`}>
        {
            team ? (<>
                <div className={`flex items-center ${column === '2' && 'lg:flex-row-reverse'}`}>
                    <img src={team.flag} className={`w-[30px] h-[20px] rounded-[2px] mr-1 ${column === '2' && 'lg:mr-0 lg:ml-1'}`} alt="flag"/>
                    <p className='hidden ss:flex font-semibold'>{team.shortName}</p>
                </div>
                {
                    column === '1' ? (
                        resultsSemis[0]?.column1 ? (
                            <p className="">{player === '1' ? resultsSemis[0]?.column1.resplayer1 : resultsSemis[0]?.column1.resplayer2}</p>
                        ) : (
                            <input className='justify-self-end w-[25px] rounded-[5px] border border-primary text-center font-normal text-[14px]'/>
                        )
                    ) : (
                        resultsSemis[0]?.column2 ? (
                            <p>{player === '1' ? resultsSemis[0]?.column2.resplayer1 : resultsSemis[0]?.column2.resplayer2}</p>
                        ) : (
                            <input className='justify-self-end w-[25px] rounded-[5px] border border-primary text-center font-normal text-[14px]'/>
                        )
                    ) 
                }
            </>) : (    
                <p className='font-semibold text-[12px] xs:text-[16px] w-full text-center'>SEMIS</p>
            )
        }
    </div>
  )
}

export default TeamSemis