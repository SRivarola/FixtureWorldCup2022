import { db } from "./firebase.config"
import { getDoc, doc, updateDoc, collection , getDocs } from "firebase/firestore/lite"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const toastSuccess = () => {
  MySwal.fire({
    title: <p>Datos cargados correctamente!</p>,
    color: '#000',
    icon: 'success',
    iconColor: '#17962a',
    background: '#fff',
    showConfirmButton: false,
    toast: true,
    timer: '2500',
    timerProgressBar: true,
    position: 'bottom-end',
  })
}

const alertError = () => {
  MySwal.fire({
    title: <p>Dato ingresado invalido!</p>,
    color: '#fff',
    icon: 'error',
    iconColor: '#ff0000',
    background: '#00040fb7',
    buttonsStyling: false,
    customClass: {
        confirmButton: 'bg-[#ff0000] py-2 px-4 outline-0 rounded-[5px] font-poppins font-semibold'
    },
  })
}

const toastSuccessForm = (message) => {
  MySwal.fire({
    title: <p>{message}</p>,
    color: '#000',
    icon: 'success',
    iconColor: '#17962a',
    background: '#fff',
    showConfirmButton: false,
    toast: true,
    timer: '2000',
    timerProgressBar: true,
    position: 'bottom-end',
  })
}

const alertErrorForm = (message) => {
  MySwal.fire({
    title: <p>{message}</p>,
    color: '#fff',
    icon: 'error',
    iconColor: '#ff0000',
    background: '#00040fb7',
    buttonsStyling: false,
    customClass: {
        confirmButton: 'bg-[#ff0000] py-2 px-4 outline-0 rounded-[5px] font-poppins font-semibold'
    },
  })
}

const sortedGroup = (group) => {
  group.sort((a, b) => {
    if (a.points < b.points){
      return 1
    } else if(a.points > b.points){
      return -1
    } else {
      if(a.gf < b.gf){
        return 1
      }
      if(a.gf > b.gf){
        return -1
      }
    }
  })
  return group
}

const sortedMatchesbyDate = (matches) => {
  matches.sort((a, b) => {
    const fechaA = new Date(a.date);
    const fechaB = new Date(b.date);
    const hourA = a.hour.split(':')[0]
    const hourB = b.hour.split(':')[0]
    fechaA.setHours(hourA)
    fechaB.setHours(hourB)
    const secondsA = Date.parse(fechaA);
    const secondsB = Date.parse(fechaB);
    if (secondsA < secondsB){
      return -1 
    } 
    if(secondsA > secondsB){
      return 1
    } 
    return 0
  })
  return matches
}

const renderDate = (date) => {
  const [month, day, year] = date.split('/')
  return `${day}/${month}`
}

const upLoadMatchesData = (id, resultPlayer1, resultPlayer2, winner) => {
  const docMatchesRef = doc(db, 'matches', id)
  getDoc(docMatchesRef)
    .then((doc) => {
        updateDoc(docMatchesRef, {
            result: {
                player1: resultPlayer1,
                player2: resultPlayer2, 
                winner: winner
            }      
        })
        toastSuccess()
    })  
}

const upLoadTeamData = (id, points, goals) => {
  const docTeamsRef = doc(db, 'teams', id)
  getDoc(docTeamsRef)
    .then((doc) => {
        const lastPoints = doc.data().points
        const lastGoals = doc.data().gf
        updateDoc(docTeamsRef, {
            points: Number(lastPoints) + points,
            gf: Number(lastGoals) + goals
        })
        toastSuccess()
    })
}

const upLoadEliminatoriasData = (dataBase, llave, column, resPlayer1, resPlayer2, winnerTeam) => {
  const docCuartosRef = doc(db, dataBase, llave)
  const colValue = column === '1' ? 'column1' : 'column2'
  getDoc(docCuartosRef)
    .then((doc) => {
      toastSuccess()
      updateDoc(docCuartosRef, {
        [colValue]: {
          resplayer1: resPlayer1,
          resplayer2: resPlayer2,
          winner: winnerTeam
        }
      })
    })
}

const upLoadFinalData = (resPlayer1, resPlayer2, winnerTeam) => {
  const docCuartosRef = doc(db, 'final', 'llave1')
  getDoc(docCuartosRef)
    .then((doc) => {
      toastSuccess()
      updateDoc(docCuartosRef, {
        resplayer1: resPlayer1,
        resplayer2: resPlayer2,
        winner: winnerTeam
      })
    })
}

export { 
  sortedGroup, 
  sortedMatchesbyDate, 
  renderDate, 
  upLoadMatchesData, 
  upLoadTeamData, 
  toastSuccess,
  alertError,
  upLoadEliminatoriasData,
  upLoadFinalData,
  toastSuccessForm,
  alertErrorForm,
}