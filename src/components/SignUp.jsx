import { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { useParams, Link, useNavigate } from 'react-router-dom'
//import Formik and Yup
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { FormGroup }from './index'
// import firebase 
import { db } from '../constants/firebase.config'
import { getDocs, collection } from 'firebase/firestore/lite'
// import alerts
import { alertErrorForm } from '../constants/functions'



const signup = () => {
    
    const { query } = useParams()
    const { register, login } = useContext(UserContext)
    const navigate = useNavigate()
    
    const initialValues = query === 'register' 
    ? {
        group: 'false',
        groupName: '',
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    } : {
        groupName: '',
        email: '',
        password: '',
    }
    
    const validationSchema = query === 'register' ? Yup.object().shape({
        groupName: Yup
        .string()
        .required('*debe ingresar un nombre de grupo')
        .min(6, '*el nombre debe tener como minimo 6 caracteres')
        .max(15, '*el nombre debe tener como maximo 15 caracteres'),
        name: Yup
        .string()
        .required('*debe ingresar su nombre'),
        lastName: Yup
        .string()
        .required('*debe ingresar su apellido'),
        email: Yup
        .string()
        .required('*debe ingresar su email')
        .email('*email invalido'),
        password: Yup
        .string()
        .required('*debe ingresar su contraseña')
        .min(6, '*debe tener como minimo 6 caracteres')
        .max(10, '*debe tener como maximo 10 caracteres'),
    }) : Yup.object().shape({
        groupName: Yup
        .string()
        .required('*debe ingresar un nombre de grupo')
        .min(6, '*el nombre debe tener como minimo 6 caracteres')
        .max(15, '*el nombre debe tener como maximo 15 caracteres'),
        email: Yup
        .string()
        .required('*debe ingresar su email')
        .email('*email invalido'),
        password: Yup
        .string()
        .required('*debe ingresar su contraseña')
        .min(6, '*debe tener como minimo 6 caracteres')
        .max(10, '*debe tener como maximo 10 caracteres'),
    })

    const handleSubmit = async (values) => {
        const usersRef = collection(db, 'users')
        if(query === 'register'){
            // register without group
            if(values.group === 'false'){
                getDocs(usersRef)
                    .then((res) => {
                        const users = res.docs.map((doc) => ({docId: doc.id, ...doc.data()}))
                        const findedGroup = users.find((user) => user.groupName === values.groupName.toLowerCase())
                        if(!findedGroup){
                            register(values.email, values.password, usersRef, values.name, values.lastName, values.groupName.toLowerCase(), true)
                        } else {
                            alertErrorForm('El nombre del grupo ya esta en uso!')
                        }
                    }) 
                    .catch(err => console.log(err))
            } else { // register with group
                getDocs(usersRef)
                    .then((res) => {
                        const users = res.docs.map((doc) => ({docId: doc.id, ...doc.data()}))
                        const findedGroup = users.find((user) => user.groupName === values.groupName.toLowerCase())
                        if(findedGroup){
                            register(values.email, values.password, usersRef, values.name, values.lastName, values.groupName.toLowerCase())
                        } else {
                            alertErrorForm('El nombre del grupo no existe!')
                        }
                    })
            }
        } else { // login
            getDocs(usersRef)
                .then((res) => {
                    const data = res.docs.map((doc) => ({docId: doc.id, ...doc.data()}))
                    const findedUser = data.find((user) => user.email === values.email)
                    if(findedUser) {
                        if(findedUser.groupName === values.groupName.toLowerCase()){
                            login(values.email, values.password, values.groupName.toLowerCase(), `${findedUser.name} ${findedUser.lastName}`)
                        } else {
                            alertErrorForm('Nombre de grupo incorrecto!')
                        }
                    } else {
                        alertErrorForm('El email no esta registrado!')
                    }
                })
        }
    }

  return (
    <div className='absolute top-0 bg-secondary flex justify-center items-center h-[100vh] w-full'>
        <div className='mt-[100px] bg-white p-2 rounded-[10px] text-primary w-[95%] xs:w-[50%] shadow-3xl shadow-gray-400'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {
                    (formik) => (
                        <Form onSubmit={formik.handleSubmit} className='m-1 text-[14px]'>
                            <h1 className='my-2 p-1 font-semibold text-[20px] border-b-2 border-secondary'>{query === 'register' ? 'Registro' : 'Inicio de sesión'}</h1>
                            {
                                query === 'register' && (<>
                                    <div className='flex mb-1 mt-3'>
                                        <label className='font-semibold'>¿Ya tenés grupo?</label>
                                        <div className='flex'>
                                            <label className='mx-2 flex items-center justify-center'>
                                                <Field
                                                    name='group'
                                                    className='mr-[2px]'
                                                    value={'true'}
                                                    type='radio'
                                                />
                                                <span className='pb-1'>si</span>
                                            </label>
                                            <label className='mx-2 flex items-center justify-center'>
                                                <Field 
                                                    name='group'
                                                    className='mr-[2px]'
                                                    value={'false'}
                                                    type="radio" 
                                                />
                                                <span className='pb-1'>no</span>
                                            </label>
                                        </div>
                                    </div>
                                </>)
                            }
                            <FormGroup 
                                label={query === 'register' ? (formik.values.group === 'true' ? 'Nombre del grupo:' : 'Crear grupo:') : 'Nombre del grupo:'}
                                name='groupName'
                                placeholder='Ingrese el nombre del grupo'
                                error={formik.errors.groupName ? formik.errors.groupName : null}
                                touched={formik.touched.groupName ? formik.touched.groupName : null}
                            />
                            {
                                query === 'register' && (<>
                                    <div className='flex flex-col xs:flex-row xs:gap-2'>
                                        <FormGroup 
                                            label='Nombre:'
                                            name='name'
                                            placeholder='Ingrese su nombre'
                                            error={formik.errors.name ? formik.errors.name : null}
                                            touched={formik.touched.name ? formik.touched.name : null}
                                            styles='xs:w-[50%]'
                                        />
                                        <FormGroup 
                                            label='Apellido:'
                                            name='lastName'
                                            placeholder='Ingrese su apellido'
                                            error={formik.errors.lastName ? formik.errors.lastName : null}
                                            touched={formik.touched.lastName ? formik.touched.lastName : null}
                                            styles='xs:w-[50%]'
                                        />
                                    </div>
                                </>)
                            }
                            <FormGroup 
                                label='Email:'
                                name='email'
                                placeholder='Ingrese su email'
                                type='email'
                                error={formik.errors.email ? formik.errors.email : null}
                                touched={formik.touched.email ? formik.touched.email : null}
                                
                            />
                            <div className='flex flex-col xs:flex-row xs:gap-2'>
                                <FormGroup 
                                    label='Contraseña:'
                                    name='password'
                                    placeholder='Ingrese su contraseña'
                                    type='password'
                                    styles={`${query === 'register' ? 'xs:w-[50%]' : 'xs:w-full'}`}
                                    error={formik.errors.password ? formik.errors.password : null}
                                    touched={formik.touched.password ? formik.touched.password : null}
                                />
                                {
                                    query === 'register' &&
                                    <FormGroup 
                                        label='Confirmar contraseña:'
                                        name='confirmPassword'
                                        placeholder='Confirme su contraseña'
                                        type='password'
                                        styles='xs:w-[50%]'
                                        error={formik.values.password === formik.values.confirmPassword ? null : '*las contraseñas deben coincidir'}
                                        touched={formik.touched.password ? formik.touched.password : null}
                                    />
                                }
                            </div>
                            <div className='flex items-center justify-center'>
                                <button type='submit' className='m-3 px-5 py-1 bg-secondary text-white font-semibold rounded-[5px]'>{query === 'register' ? 'REGISTRARSE' : 'INICIAR SESION'}</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
            <div className='w-full flex justify-end items-center border-t-2 border-secondary'>
                <p className='text-[12px]'>{query === 'register' ? 'Si ya esta registrado debe ir a login, ' : 'Primero debe registrarse,'}</p>
                <Link to={query === 'register' ? '/signup/login' : '/signup/register'} className='m-1 text-[12px] text-right text-secondary font-semibold'>CLICK AQUI!</Link>
            </div>
        </div>
    </div>
  )
}

export default signup