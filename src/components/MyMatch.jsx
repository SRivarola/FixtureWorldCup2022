import { useState, useEffect, useContext } from "react"
import { DataContext } from "../context/dataContext"
import { UserContext } from "../context/userContext"
import { getDoc, doc, collection, addDoc, getDocs } from "firebase/firestore/lite"
import { db } from "../constants/firebase.config"
import { renderDate, toastSuccessForm, alertErrorForm } from "../constants/functions"

const MyMatch = ({match}) => {

    const [radio, setRadio] = useState('')
    const [resultado, setResultado] = useState(false)
    const { teams } = useContext(DataContext)
    const [data, setData] = useState(match)
    const [matchResult, setMatchResult] = useState(null)
    const { user } = useContext(UserContext) 
  
    const onChangeRadio = e => {
        setRadio(e.target.value)
    }
    const handleOnClick = (e) => {
        e.preventDefault()
        if(radio !== '') {
            const collectionRef = collection(db, `${user.email}groups`)
            addDoc(collectionRef, {
                player1: data.player1,
                player2: data.player2,
                winner: radio,
            })
                .then((res) => {
                    toastSuccessForm('Datos cargados correctamente')
                    setResultado(!resultado)
                })
                .catch((err) => {
                    alertErrorForm('Hubo un error al cargar el resultado, intente nuevamente!')
                })
        } else {
            alertErrorForm('Debe seleccionar un resultado!')
        }
    }

    const playerFlag = (shortName) => {
        const findFlag = teams.find((team) => team.shortName === shortName)
        return findFlag.flag
    }

    useEffect(() => {
        const collectionRef = collection(db, `${user.email}groups`)
        getDocs(collectionRef)
            .then((res) => {
                const dataDB = res.docs.map((doc) => ({docId: doc.id, ...doc.data()}))
                const findedData = dataDB.find((doc) => (doc.player1 === data.player1) && (doc.player2 === data.player2))
                setMatchResult(findedData ? findedData : null)
            })
    }, [resultado]);

    return (
        <div className={`${data.color.bg} rounded-[5px] w-[400px]  p-4 m-2`}>
            <div className="flex justify-between items-center font-semibold font-poppins border-b-2 text-white">
                <div>{renderDate(data.date)}</div>
                <div className='text-[10px] font-thin'>GROUP {data.group}</div>
                <div>{data.hour}hs</div>
            </div>
            <div className="text-center text-white font-poppins py-2">{data.stadium}</div>
            <div className="flex justify-between gap-1 font-poppins">
                <div className={`flex justify-between items-center bg-dimWhite w-[45%] p-2 rounded-[5px] ${(matchResult?.player1 === matchResult?.winner) && (matchResult?.winner === data?.result?.winner) && (matchResult?.player1 !== undefined) && 'bg-correct'} ${(data.player1 === matchResult?.winner) && (matchResult?.winner !== data?.result?.winner) && (data?.result?.player1 !== undefined) && 'bg-error'}`}>
                    <div className='flex items-center'>
                        <img className="w-[30px] h-[20px] rounded-[2px]" src={playerFlag(data.player1)} alt='flag' />
                        <span className="font-semibold ml-1">{data.player1}</span>
                    </div>
                    <span className="font-semibold flex items-center">
                        {
                            matchResult ? (<>
                            {
                                data.player1 === matchResult.winner && (
                                    'V'
                                )
                            }
                            </>) : (
                                <input 
                                    name="player1"
                                    value={data.player1}
                                    onChange={onChangeRadio}
                                    checked={radio === data.player1 ? true : false}
                                    type='radio' 
                                />
                            )
                        }
                    </span>
                </div>
                <div className={`flex justify-center items-center bg-dimWhite w-[10%] p-2 rounded-[5px] ${(matchResult?.winner === 'empate') && (matchResult?.winner === data?.result?.winner) && (matchResult?.player2 !== undefined) && 'bg-correct'} ${(matchResult?.winner === 'empate') && (matchResult?.winner !== data?.result?.winner) && (data.result !== undefined) && 'bg-error'}`}>
                    {
                        matchResult ? (
                            matchResult.winner === 'empate' && (
                                <p className="font-semibold">E</p>
                            )
                        ) : (
                            <input 
                                name="empate"
                                value='empate'
                                onChange={onChangeRadio}
                                checked={radio === 'empate' ? true : false}
                                type='radio' 
                            />
                        )
                    }
                </div>
                <div className={`flex justify-between items-center bg-dimWhite w-[45%] p-2 rounded-[5px] text-right ${(matchResult?.player2 === matchResult?.winner) && (matchResult?.winner === data?.result?.winner) && (matchResult?.player2 !== undefined) && 'bg-correct'} ${(data.player2 === matchResult?.winner) && (matchResult?.winner !== data?.result?.winner) && (data?.result?.player1 !== undefined) && 'bg-error'}`}>
                    <span className="font-semibold flex items-center">
                        {
                            matchResult ? (
                                data.player2 === matchResult.winner && (
                                    'V'
                                )
                            ) : (
                                <input 
                                    name="player2"
                                    value={data.player2}
                                    onChange={onChangeRadio}
                                    checked={radio === data.player2 ? true : false}
                                    type='radio'
                                />
                            )
                        }
                    </span>
                    <div className="flex items-center">
                        <span className="font-semibold mr-1">{data.player2}</span>
                        <img className="w-[30px] h-[20px] rounded-[2px]" src={playerFlag(data.player2)} alt='flag' />
                    </div>
                </div>
            </div>
                {
                    !matchResult && !data?.result &&
                    <div className="h-[40px] mt-3 flex justify-center items-center">
                            <button 
                                className="p-2 bg-primary text-white font-poppins rounded-[5px]"
                                onClick={handleOnClick}
                            >
                                CARGAR RESULTADO
                            </button>
                    </div>
                }
        </div>
    )
}

export default MyMatch