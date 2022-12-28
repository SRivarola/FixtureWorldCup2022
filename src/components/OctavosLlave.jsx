const OctavosLlave = ({children, column}) => {
  return (
    <form className={`h-[110px] rounded-tr-[8px] rounded-br-[8px] flex flex-col justify-between border-solid border-y-2 border-r-2  border-white ${column === '2' && 'lg:border-l-2 lg:rounded-tl-[8px] lg:rounded-bl-[8px] lg:border-r-0 lg:rounded-tr-[0px] lg:rounded-br-[0px]'}`}>
        {children}
    </form>
  )
}

export default OctavosLlave