import { Field } from "formik"

const FormGroup = ({label, name, placeholder, type = 'text', styles, error, touched, }) => {
  return (
    <div className={`flex flex-col  ${styles}`}>
        <label className='font-semibold'>{label}</label>
        <div className="flex">
        </div>
        <Field
            name={name}
            placeholder={placeholder}
            className='my-1 p-1 pl-2 duration-1000 placeholder:italic focus:outline-0 bg-primary text-white h-[35px] rounded-[5px]'
            type={type} 
        />
        {
          error && touched &&
          <p className="mt-[-2px] ml-1 text-[12px] text-error">{error}</p>
        }
    </div>
  )
}

export default FormGroup