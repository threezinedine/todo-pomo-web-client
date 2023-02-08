import React from 'react'
import {
    createBrowserRouter,
} from 'react-router-dom'

import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'
import {
    LOGIN_ROUTER,
    REGISTER_ROUTER,
} from 'const'


const router = createBrowserRouter([
    {
        path: REGISTER_ROUTER,
        element: <RegisterPage />,
    },
    {
        path: LOGIN_ROUTER,
        element: <LoginPage />,
    },
])


export default router
