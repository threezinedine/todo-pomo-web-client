import React from 'react'
import {
    createBrowserRouter,
} from 'react-router-dom'

import RegisterPage from './RegisterPage'
import {
    REGISTER_ROUTER,
} from 'const'


const router = createBrowserRouter([
    {
        path: REGISTER_ROUTER,
        element: <RegisterPage />,
    },
])


export default router
