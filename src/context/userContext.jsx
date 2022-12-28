import React, { useEffect, useState } from 'react';
import { auth } from '../constants/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { alertErrorForm, toastSuccessForm } from '../constants/functions';
import { addDoc, collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../constants/firebase.config';
import { useNavigate } from 'react-router-dom'

export const UserContext = React.createContext();

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState();
    const [logged, setLogged] = useState(false);
    const navigate = useNavigate()

    const register = (email, password, ref, name, lastName, groupName, admin = false) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                toastSuccessForm('Usuario registrado con exito')
                const userData = userCredential.user
                addDoc(ref, {
                    email: email,
                    name: name,
                    lastName: lastName,
                    groupName: groupName,
                    uid: userData.uid,
                    admin: admin
                })
                setUser({
                    email: email,
                    name: `${name} ${lastName}`,
                    groupName: groupName,
                    uid: userData.uid
                })
                setTimeout(() => {
                    navigate('/groups')
                }, 3000);
            })
            .catch( err => {
                alertErrorForm('Este email ya esta en uso')
            })
    }

    const login = (email, password, groupName, name) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const userData = userCredential.user;
                setUser({
                    email: email,
                    name: name,
                    groupName: groupName,
                    uid: userData.uid
                })
                toastSuccessForm(`Bienvenido ${name}`)
                setTimeout(() => {
                    navigate('/groups')
                }, 2500);
            })
            .catch((err) => {
                alertErrorForm('Contraseña incorrecta!')
            })
    }

    const logout = () => {
        signOut(auth)
            .then(()=> {
                toastSuccessForm("Cierre de sesión!");
            })
            .catch ((err)=>{
                alertErrorForm('No se pudo cerrar sesión, intentelo nuevamente!');
          })
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const usersRef = collection(db, 'users')
                getDocs(usersRef)
                    .then((res) => {
                        const data = res.docs.map((doc) => ({docId: doc.id, ...doc.data()}))
                        const findedUser = data.find((doc) => doc.email === user.email)
                        setUser({
                            email: findedUser.email,
                            name: `${findedUser.name} ${findedUser.lastName}`,
                            groupName: findedUser.groupName,
                            uid: findedUser.uid
                        });
                    })
                setLogged(true);
            } else {
                setLogged(false);
            }
        })
    },[])

    return (
        <UserContext.Provider value={{
            user, 
            logged,
            register, 
            login, 
            logout
        }}>
            {children}
        </UserContext.Provider>
    )
}