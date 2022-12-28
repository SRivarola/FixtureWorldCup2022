import { useState, useEffect, createContext } from "react"
import { db } from "../constants/firebase.config"
import { getDocs, collection } from "firebase/firestore/lite"
import { sortedMatchesbyDate } from "../constants/functions"

export const DataContext = createContext();

export const DataContextProvider = ({children}) => {

    const [teams, setTeams] = useState([])
    const [matches, setMatches] = useState([])
    const [matchesByGroup, setMatchesByGroup] = useState([])

    const [resultsOctavos, setResultsOctavos] = useState([])
    const [resultsCuartos, setResultsCuartos] = useState([])
    const [resultsSemis, setResultsSemis] = useState([])
    const [resultsFinal, setResultsFinal] = useState([])
    const [findedLlave, setFindedLlave] = useState()
    
    const getTeams = () => {
        const teamsRef = collection(db, 'teams')
        getDocs(teamsRef)
          .then((res) => {
            const data = res.docs.map((doc) => ({docId: doc.id, ...doc.data()}))
            setTeams(data)
          })
          .catch(err => console.log(err))
    }

    const getMatches = () => {
        const matchesRef = collection(db, 'matches')
        getDocs(matchesRef)
          .then((res) => {
            const data = res.docs.map((doc) => ({docId: doc.id, ...doc.data()}))
            const sorteredData = sortedMatchesbyDate(data)
            setMatches(sorteredData)
          })
          .catch(err => console.log(err))
    }

    const getMatchesByGroup = (group) => {      
        const filteredData = matches.filter((match) => match.group === group)
        const sorteredData = sortedMatchesbyDate(filteredData)
        setMatchesByGroup(sorteredData)
    }

    const getResultsOctavos = () => {
        const octavosRef = collection(db, 'octavos')
        getDocs(octavosRef)
            .then((res) => {
                const data = res.docs.map((doc) => ({docId: doc.id, ...doc.data()}))
                setResultsOctavos(data)
            })
            .catch(err => console.log(err))
    }

    const getResultsCuartos = () => {
        const cuartosRef = collection(db, 'cuartos')
        getDocs(cuartosRef)
            .then((res) => {
                const data = res.docs.map((doc) => ({docId: doc.id, ...doc.data()}))
                setResultsCuartos(data)
            })
            .catch(err => console.log(err))
    }

    const getResultsSemis = () => {
        const semisRef = collection(db, 'semis')
        getDocs(semisRef)
            .then((res) => {
                const data = res.docs.map((doc) => ({docId: doc.id, ...doc.data()}))
                setResultsSemis(data)
            })
            .catch(err => console.log(err))
    } 

    const getResultsFinal = () => {
        const finalRef = collection(db, 'final')
        getDocs(finalRef)
            .then((res) => {
                const data = res.docs.map((doc) => ({docId: doc.id, ...doc.data()}))
                setResultsFinal(data)
            })
            .catch(err => console.log(err))
    } 

    useEffect(() => {
        getTeams()
        getMatches()
    }, []);

    return (
        <DataContext.Provider value={{
            teams,
            matches,
            matchesByGroup,
            resultsOctavos,
            resultsCuartos,
            resultsSemis,
            resultsFinal,
            getMatchesByGroup,
            getResultsOctavos,
            getResultsCuartos,
            getResultsSemis,
            getResultsFinal
        }}>
            {children}
        </DataContext.Provider>
    )
}