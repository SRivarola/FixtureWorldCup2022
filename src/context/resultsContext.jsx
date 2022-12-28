import { useState, createContext } from "react";

export const ResultsContext = createContext();

export const ResultsContextProvider = ({children}) => {

    const [dataOctavos, setDataOctavos] = useState(false)
    const [dataCuartos, setDataCuartos] = useState(false)
    const [dataSemis, setDataSemis] = useState(false)
    const [dataFinal, setDataFinal] = useState(false)
    const [dataFinalResult, setDataFinalResult] = useState({
        player1: '',
        player2: ''
    })

    return(
        <ResultsContext.Provider value={{
            dataOctavos,
            setDataOctavos,
            dataCuartos,
            setDataCuartos,
            dataSemis,
            setDataSemis,
            dataFinal,
            setDataFinal,
            dataFinalResult,
            setDataFinalResult,
        }} >
            {children}
        </ResultsContext.Provider>
    )
}