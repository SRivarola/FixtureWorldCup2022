import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userContext'
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../constants/firebase.config';
import { FriendData } from './index';

const MyFriends = () => {

  const { user } = useContext(UserContext)
  const [users, setUsers] = useState()

  useEffect(() => {
    const usersRef = collection(db, 'users')
    getDocs(usersRef)
      .then((res) => {
        const data = res.docs.map((doc) => ({docId: doc.id, ...doc.data()}))
        const filteredData = data.filter((doc) => doc.groupName === user.groupName)
        setUsers(filteredData)
      })
  }, []);

  return (
    <div className='w-full min-h-screen h-auto py-[50px] bg-primary flex justify-center items-center'>
      <div className='w-[95%] xs:w-[60%] bg-white rounded-[10px] font-poppins'>
        <div className='p-5 flex gap-10 font-semibold items-center'>
          <div className='w-[70%] text-center'>Nombre</div>
          <div className='w-[30%] text-center'>Puntos</div>
        </div>
        {
          users &&
          users.map((user, idx) => (
            <FriendData key={idx} item={user} idx={idx} users={users}/>
          ))
        }
      </div>
        
    </div>
  )
}

export default MyFriends