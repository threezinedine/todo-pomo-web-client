import axios from 'axios'

import { 
    API_BASE_ROUTE,
} from 'const'


const api = axios.create({
    baseURL: API_BASE_ROUTE,
})


export default api