
import { useEffect, useMemo } from 'react'
import Cookies from 'universal-cookie';

// ** Third Party Imports
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Types import
import { RootState, AppDispatch } from '../../store'

// ** Import Custom hooks
// import useToggleDrawer from "src/@core/hooks/useToggleDrawer"

// ** Actions Imports
import {
    loginAction,
    fetchAction,
    registerAction,
} from '../../store/apps/auth'

import { auth } from '../../schema'
import { register } from '../../schema'

const defaultValues = {
    email: '',
    password: ''

}

export const useAuth = (data: string | null) => {

    // ** Hook
    const dispatch = useDispatch<AppDispatch>()
    //   const { handleDrawer, handleModal } = useToggleDrawer();
    const store = useSelector((state: RootState) => state.auth)
    const loginForm = useForm({
        defaultValues,
        mode: 'onChange',
        resolver: yupResolver(auth.login)
    })
    const registerForm = useForm({
        defaultValues,
        mode: 'onChange',
        resolver: yupResolver(register.register)
    })

    useEffect(() => {
        data && dispatch(fetchAction(data))
    }, [data])

    useMemo(() => {
        if (store.auth && data) {
            // @ts-ignore
            loginForm.setValue('email', store.auth.email)
        }
        else {
            loginForm.setValue('email', '')
        }
    }, [store.auth, data])

    const userLogin = async (data: any) => {
        dispatch(loginAction({ ...data }))
            .then(({ payload }: any) => {
                // console.log(payload);

                if (payload) {
                    window.localStorage.setItem('token', payload?.data[0]?.token)
                    loginForm.reset()
                    //   handleDrawer(null)
                } else {
                    console.log('============API_ERROR===============');
                    console.log(payload);
                    console.log('====================================');
                }
            })
    }

    const userRegister = async (data: any) => {
        dispatch(registerAction({ ...data }))
            .then(({ payload }: any) => {
                if (payload) {
                    registerForm.reset()
                    const cookies = new Cookies();
                    cookies.set('accessToken', payload.data.tokens.accessToken, { path: '/' });
                    cookies.set('refreshToken', payload.data.tokens.refreshToken, { path: '/' });
                    //   handleDrawer(null)
                } else {
                    console.log('============API_ERROR===============');
                    console.log(payload);
                    console.log('====================================');
                }
            })
    }

    return { loginForm, registerForm, store, userLogin, userRegister }

}
