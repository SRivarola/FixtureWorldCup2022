import { FixtureNavbar, MyProdeEliminatorias } from "./index"

const MyProdeEliminatoriasContainer = () => {
  return (
    <>
        <FixtureNavbar groupLink={'/miFixture/grupos'} eliminatoriasLink={'/miFixture/eliminatorias'} />
        <div className='flex lg:flex-row flex-col relative bg-primary py-20 px-5'>
          <MyProdeEliminatorias column='1'/>
          <MyProdeEliminatorias column='2'/>
        </div>
    </>
  )
}
export default MyProdeEliminatoriasContainer