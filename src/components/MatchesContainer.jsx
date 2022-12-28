import { useEffect, useState, useContext } from 'react'
import { DataContext } from '../context/dataContext'
import { NavLink, useParams } from "react-router-dom"
import { FixtureNavbar, Match, Skeleton, ScrollTop } from './index'

const MatchesContainer = () => {
  
  const { group } = useParams()
  
  const { matches, matchesByGroup, getMatchesByGroup } = useContext(DataContext)
  const [loading, setLoading] = useState(false)
  const [ thisMatches, setThisMatches ] = useState([])
  
  useEffect(() => {
    setLoading(true)
    const groupLetter = group?.charAt(group.length - 1)
    if(group){
      getMatchesByGroup(groupLetter)
      setTimeout(() => {
        setThisMatches(matchesByGroup)
        setLoading(false)
      }, 1500);
    } else {
      setThisMatches(matches)
      setTimeout(() => {
        setLoading(false)
      }, 1500);
    }
  }, [group]);
  
  return (
    <>
      <FixtureNavbar groupLink={'/GroupFixture'} eliminatoriasLink={'/EliminatoriasFixture'}/>
      <div className="w-full bg-white">
        <ul className="flex justify-center flex-wrap text-secondary sm:text-[16px] text-[14px] items-center font-poppins">
          <li className="mx-3 p-1"><NavLink to='/GroupFixture/groupA' className={({ isActive }) => isActive ? `${matches[0]?.color.tx} font-semibold` : 'text-primary'}>Grupo A</NavLink></li>
          <li className="mx-3 p-1"><NavLink to='/GroupFixture/groupB' className={({ isActive }) => isActive ? `${matches[0]?.color.tx} font-semibold` : 'text-primary'}>Grupo B</NavLink></li>
          <li className="mx-3 p-1"><NavLink to='/GroupFixture/groupC' className={({ isActive }) => isActive ? `${matches[0]?.color.tx} font-semibold` : 'text-primary'}>Grupo C</NavLink></li>
          <li className="mx-3 p-1"><NavLink to='/GroupFixture/groupD' className={({ isActive }) => isActive ? `${matches[0]?.color.tx} font-semibold` : 'text-primary'}>Grupo D</NavLink></li>
          <li className="mx-3 p-1"><NavLink to='/GroupFixture/groupE' className={({ isActive }) => isActive ? `${matches[0]?.color.tx} font-semibold` : 'text-primary'}>Grupo E</NavLink></li>
          <li className="mx-3 p-1"><NavLink to='/GroupFixture/groupF' className={({ isActive }) => isActive ? `${matches[0]?.color.tx} font-semibold` : 'text-primary'}>Grupo F</NavLink></li>
          <li className="mx-3 p-1"><NavLink to='/GroupFixture/groupG' className={({ isActive }) => isActive ? `${matches[0]?.color.tx} font-semibold` : 'text-primary'}>Grupo G</NavLink></li>
          <li className="mx-3 p-1"><NavLink to='/GroupFixture/groupH' className={({ isActive }) => isActive ? `${matches[0]?.color.tx} font-semibold` : 'text-primary'}>Grupo H</NavLink></li>
        </ul>
      </div>
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
            thisMatches.length > 0 &&
            thisMatches.map((match) => (
              <Match key={match.docId} match={match} />      
            ))
          )
        }
        <ScrollTop />
      </div>
    </>
  )
}

export default MatchesContainer