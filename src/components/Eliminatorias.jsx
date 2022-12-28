import { Octavos, Cuartos, Semis, Final } from './index'

const Eliminatorias = ({ column }) => {

    return (
        <div className='w-[100%] mb-[20px] '>
            <div className={`flex font-poppins ${column === '2' && 'lg:flex-row-reverse'}`}>
                <Octavos column={column} />
                <Cuartos column={column} />
                <Semis column={column} />
                <Final column={column} />
            </div>
        </div>
    )
}

export default Eliminatorias