import { useState, useEffect, useContext } from "react"
import { UserContext } from "../context/userContext"
import { DataContext } from "../context/dataContext"
import { getDoc, doc } from "firebase/firestore/lite"
import { db } from "../constants/firebase.config"
import { renderDate, upLoadMatchesData, upLoadTeamData, alertError } from "../constants/functions"

const Match = ({match}) => {

    const { user } = useContext(UserContext)
    const { teams } = useContext(DataContext)
    const [resultado, setResultado] = useState(false)
    const [data, setData] = useState(match)

    const handleOnClick = (e) => {
        e.preventDefault()
        const player1 = e.target.form[0].value
        const player2 = e.target.form[1].value
        const player1Number = Number(player1)
        const player2Number = Number(player2)
        const filteredTeam1 = teams.find((team) => team.shortName === match.player1)
        const filteredTeam2 = teams.find((team) => team.shortName === match.player2)
        if((player1 !== '') && (player2 !== '') && (player1Number == player1) && (player2Number == player2)) {
            if(player1 > player2){
                upLoadMatchesData(match.docId, player1Number, player2Number, data.player1)
                upLoadTeamData(filteredTeam1.docId, 3, player1Number - player2Number)
                upLoadTeamData(filteredTeam2.docId, 0, player2Number - player1Number)
            } if(player1 < player2){
                upLoadMatchesData(match.docId, player1Number, player2Number, data.player2)
                upLoadTeamData(filteredTeam2.docId, 3, player2Number - player1Number)
                upLoadTeamData(filteredTeam1.docId, 0, player1Number - player2Number)
            } if(player1 === player2){
                upLoadMatchesData(match.docId, player1Number, player2Number, 'empate')
                upLoadTeamData(filteredTeam1.docId, 1, 0)
                upLoadTeamData(filteredTeam2.docId, 1, 0)
            }
            setTimeout(() => {
                setResultado(!resultado)
            }, 3000); 
        } else {
            alertError()
        }
    }

    const playerFlag = (shortName) => {
        const findFlag = teams.find((team) => team.shortName === shortName)
        return findFlag.flag
    }
    
    useEffect(() => {
        const matchRef = doc(db, 'matches', match.docId)
        getDoc(matchRef)
            .then((doc) => {
                setData(doc.data())
            })
    }, [resultado]);

    return (
        <form className={`${data.color.bg} rounded-[5px] w-[400px]  p-4 m-2`}>
            <div className="flex justify-between items-center font-semibold font-poppins border-b-2 text-white">
                <div>{renderDate(data.date)}</div>
                <div className='text-[10px] font-thin'>GROUP {data.group}</div>
                <div>{data.hour}hs</div>
            </div>
            <div className="text-center text-white font-poppins py-2">{data.stadium}</div>
            <div className="flex justify-between gap-1 font-poppins">
                <div className="flex justify-between items-center bg-dimWhite w-[50%] p-2 rounded-[5px]">
                    <div className="flex items-center">
                        <img className="w-[30px] h-[20px] rounded-[2px]" src={playerFlag(data.player1)} alt='flag' />
                        <span className="font-semibold ml-1">{data.player1}</span>
                    </div>
                    <span className="font-semibold">
                        {
                            data.result ? (
                                data.result.player1
                            ) : (
                                user.email === 'srivarola@gmail.com' ? (
                                    <input 
                                        name="player1"
                                        className="w-[30px] border-2 border-slate-500 rounded-[5px] text-center" 
                                        type='text' 
                                    />
                                ) : (
                                 ''   
                                )
                            )
                        }
                    </span>
                </div>
                <div className="flex justify-between items-center bg-dimWhite w-[50%] p-2 rounded-[5px] text-right">
                    <span className="font-semibold">
                        {
                            data.result ? (
                                data.result.player2
                            ) : (
                                user.email === 'srivarola@gmail.com' ? (
                                    <input 
                                        name="player2"
                                        className="w-[30px] border-2 border-slate-500 rounded-[5px] text-center" 
                                        type='text' 
                                    />
                                ) : (
                                    ''
                                )
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
                    !data.result && user.email === 'srivarola@gmail.com' &&
                    <div className="h-[40px] mt-3 flex justify-center items-center">
                            <button 
                                className="p-2 bg-primary text-white font-poppins rounded-[5px]"
                                onClick={(e) => handleOnClick(e)}
                            >
                                CARGAR RESULTADO
                            </button>
                    </div>
                }
        </form>
    )
}

export default Match