import Loading from "./Loading"
import { Circles } from  'react-loader-spinner'

const Skeleton = ({bg}) => {
    return (
        <div className={`${bg} flex items-center justify-center rounded-[5px] h-[200px] w-[400px] p-4 m-2`}>
           <Circles
                height="80"
                width="80"
                color="#faebd7"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            {/* <Loading /> */}
        </div>

    )
}

export default Skeleton