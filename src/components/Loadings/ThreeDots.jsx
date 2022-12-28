import { ThreeDots } from 'react-loader-spinner';


const ThreeDotsLoading = () => {
  return (
    <div className='bg-dimWhite flex justify-center items-center m-1 p-1 rounded-[5px]'>
        <ThreeDots 
            height="25" 
            width="25" 
            radius="9"
            color="#00040f" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    </div>
  )
}

export default ThreeDotsLoading