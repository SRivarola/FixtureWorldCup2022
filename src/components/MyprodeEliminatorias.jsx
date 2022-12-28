import { MyProdeOctavos, MyProdeCuartos, MyProdeSemis, MyProdeFinal } from "./index"

const MyProdeEliminatorias = ({column}) => {
  return (
    <div className='w-[100%] mb-[20px] '>
      <div className={`flex font-poppins ${column === '2' && 'lg:flex-row-reverse'}`}>
        <MyProdeOctavos column={column} />
        <MyProdeCuartos column={column} />
        <MyProdeSemis column={column} />
        <MyProdeFinal column={column} />
      </div>
    </div>
  )
}
export default MyProdeEliminatorias