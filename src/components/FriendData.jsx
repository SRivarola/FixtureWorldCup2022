import { useEffect, useState, useContext } from 'react'
import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from '../constants/firebase.config'
import { UserContext } from '../context/userContext'
import { DataContext } from '../context/dataContext'

const FriendData = ({item, idx, users}) => {

    const { user } = useContext(UserContext)
    const { matches } = useContext(DataContext)
    const [prodeResults, setProdeResults] = useState([])
    const [points, setPoints] = useState(0)

    const getPoints = (results) => {
        let counter = 0
        results.forEach(result => {
            const matchResult = matches?.find((match) => (match.player1 === result.player1) && (match.player2 === result.player2))
            if (matchResult.result && result.winner) {
                if (matchResult.result.winner === result.winner) {
                    counter ++
                }
            }
        })
        setPoints(counter)
    }

    useEffect(() => {
        const userProdeRef = collection(db, `${item.email}groups`)
        getDocs(userProdeRef)
            .then((res) => {
                const data = res.docs.map((doc) => ({docId: doc.id, ...doc.data()}))
                setProdeResults(data)
            })
    }, []);

    useEffect(() => {
        if(prodeResults.length > 0){
            setTimeout(() => {
                getPoints(prodeResults)
            }, 500);
        }
    }, [prodeResults]);

  return (
    <div className={`p-3 flex gap-10 justify-start items-center border ${users.length === (idx + 1) && 'rounded-b-[10px]'} ${idx % 2 === 0 && 'bg-dimWhite'}`} key={idx}>
        <div className={`w-[70%] ${item.email === user.email && 'font-semibold'}`}>{`${item.name} ${item.lastName}`}</div>
        <div className={`w-[30%] text-center ${item.email === user.email && 'font-semibold'}`}>{points}</div>
    </div>
  )
}
export default FriendData