export const GET_METHOD = 'GET'
export const POST_METHOD = 'POST'
export const PUT_METHOD = 'PUT'
export const DELETE_METHOD = 'DELETE'

export const HTTP_200_OK = 200 

export const REGISTER_ROUTER = '/register'

export const REGISTER_PAGE_USERNAME_LABEL = 'Username'
export const REGISTER_PAGE_PASSWORD_LABEL = 'Password'
export const REGISTER_PAGE_VALID_PASSWORD_LABEL = 'Valid Password'
export const REGISTER_PAGE_USERNAME_DATA_TEST_ID = 'username'
export const REGISTER_PAGE_PASSWORD_DATA_TEST_ID = 'password'
export const REGISTER_PAGE_VALID_PASSWORD_DATA_TEST_ID = 'validPassword'
export const REGISTER_PAGE_REGISTER_BUTTON_DATA_TEST_ID = 'registerButton'

export interface User {
    userId: number
    username: string
    password: string
    description: string | null
    image: string | null
}
