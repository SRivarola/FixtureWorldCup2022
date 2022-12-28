import { useEffect, useState, useContext } from 'react'
import { DataContext } from '../context/dataContext'
import { FixtureNavbar, MyMatch, Skeleton, ScrollTop } from './index'

const MyProde = () => {
  
  const { matches } = useContext(DataContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      <FixtureNavbar groupLink={'/miFixture/grupos'} eliminatoriasLink={'/miFixture/eliminatorias'} />
      <div className="bg-primary min-h-[405px] p-4 flex flex-row flex-wrap justify-evenly items-center">
        {
          loading ? (
            <>
              <Skeleton bg='bg-groupA'/>
              <Skeleton bg='bg-groupB'/>
              <Skeleton bg='bg-groupC'/>
              <Skeleton bg='bg-groupD'/>
              <Skeleton bg='bg-groupE'/>
              <Skeleton bg='bg-groupF'/>
              <Skeleton bg='bg-groupG'/>
              <Skeleton bg='bg-groupH'/>
            </>
          ) : (
            matches.length > 0 &&
            matches.map((match) => (
              <MyMatch key={match.docId} match={match} />      
            ))
          )
        }
        <ScrollTop />
      </div>
    </>
  )
}

export default MyProde