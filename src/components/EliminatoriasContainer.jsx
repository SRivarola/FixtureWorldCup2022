import { Eliminatorias, FixtureNavbar } from './index'

const EliminatoriasContainer = () => {
  return (
    <>
      <FixtureNavbar groupLink={'/GroupFixture'} eliminatoriasLink={'/EliminatoriasFixture'}/>
      <div className='flex lg:flex-row flex-col relative bg-primary py-20 px-5'>
          <Eliminatorias column='1'/>
          <Eliminatorias column='2'/>
      </div>
    </>
  )
}

export default EliminatoriasContainer