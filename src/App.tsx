import React from 'react'
import {
    RouterProvider,
} from 'react-router-dom'

import router from 'pages'
import { Button } from 'components'



const App: React.FC = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App
