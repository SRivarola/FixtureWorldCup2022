import { useContext, useEffect, useState } from "react"
import { DataContext } from "../context/dataContext"
import { ResultsContext } from '../context/resultsContext'
import { ThreeDotsLoading } from "./index"

const TeamFinal = ({column, team}) => {

    const [loading, setLoading] = useState(false)
    const { setDataFinalResult, dataFinalResult, dataSemis, dataFinal } = useContext(ResultsContext)
    const { resultsFinal } = useContext(DataContext)
    
    const onHandleChange = (e) => {
        setDataFinalResult({
            ...dataFinalResult,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2500);
    }, [dataSemis, dataFinal]);

  if(loading){
    return (
        <ThreeDotsLoading />
    )
  }
  return ( 
    <>
        {
            team ? (
                <div className={`flex flex-row justify-between items-center m-1 p-1 bg-dimWhite rounded-[5px] text-primary font-semibold ${column === '2' && 'lg:flex-row-reverse lg:text-right'}`}>
                    {
                        column === '1' ? (<>
                            <div className={`flex items-center ${column === '2' && 'lg:flex-row-reverse'}`}>
                                <img src={team.flag} className={`w-[30px] h-[20px] rounded-[2px] mr-1 ${column === '2' && 'lg:mr-0 lg:ml-1'}`} alt="flag"/>
                                <p className='hidden ss:flex font-semibold'>{team.shortName}</p>
                            </div>
                            {
                                resultsFinal[0]?.resplayer1 ? (
                                    <p>{resultsFinal[0]?.resplayer1}</p>
                                ) : (
                                    <input
                                        name='player1'
                                        value={dataFinalResult.player1}
                                        onChange={(e) => onHandleChange(e)} 
                                        className='justify-self-end w-[25px] rounded-[5px] border border-primary text-center font-normal text-[14px]'
                                    />
                                )
                            }
                        </>) : (<>
                            <div className={`flex items-center ${column === '2' && 'lg:flex-row-reverse'}`}>
                                <img src={team.flag} className={`w-[30px] h-[20px] rounded-[2px] mr-1 ${column === '2' && 'lg:mr-0 lg:ml-1'}`} alt="flag"/>
                                <p className='hidden ss:flex font-semibold'>{team.shortName}</p>
                            </div>
                            {
                                resultsFinal[0]?.resplayer2 ? (
                                    <p>{resultsFinal[0]?.resplayer2}</p>
                                ) : (
                                    <input 
                                        name='player2'
                                        value={dataFinalResult.player2}
                                        onChange={(e) => onHandleChange(e)}
                                        className='justify-self-end w-[25px] rounded-[5px] border border-primary text-center font-normal text-[14px]'
                                    />
                                )
                            }
                        </>) 
                    }
                </div>
            ) : (
                <p className='m-1 p-1 text-primary font-semibold bg-dimWhite rounded-[5px] text-[12px] xs:text-[16px] text-center'>FINAL</p>
            )
        }
    </>
  )
}

export default TeamFinal