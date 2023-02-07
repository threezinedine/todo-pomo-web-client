export const EMPTY_STRING = ''

export const API_BASE_ROUTE = 'http://localhost:8000'

export const GET_METHOD = 'GET'
export const POST_METHOD = 'POST'
export const PUT_METHOD = 'PUT'
export const DELETE_METHOD = 'DELETE'

export const HTTP_200_OK = 200 

export const REGISTER_ROUTER = '/register'

export const REGISTER_API_ROUTE = '/register'

export const REGISTER_PAGE_USERNAME_LABEL = 'Username'
export const REGISTER_PAGE_PASSWORD_LABEL = 'Password'
export const REGISTER_PAGE_VALID_PASSWORD_LABEL = 'Valid Password'
export const REGISTER_PAGE_USERNAME_DATA_TEST_ID = 'username'
export const REGISTER_PAGE_PASSWORD_DATA_TEST_ID = 'password'
export const REGISTER_PAGE_VALID_PASSWORD_DATA_TEST_ID = 'validPassword'
export const REGISTER_PAGE_REGISTER_BUTTON_DATA_TEST_ID = 'registerButton'

export const USERNAME_KEY = 'username'
export const PASSWORD_KEY = 'password'
export const VALID_PASSWORD_KEY = 'validPassword'

export const REGISTER_PAGE_USERNAME_MIN_LENGTH = 8
export const REGISTER_PAGE_USERNAME_MUST_HAVE_MORE_THAN_MIN_NUMBER_CHARACTERS_ERROR_MESSAGE = `Username must have more than ${
    REGISTER_PAGE_USERNAME_MIN_LENGTH
} characters.`

export const REGISTER_PAGE_USERNAME_MAX_LENGTH = 40
export const REGISTER_PAGE_USERNAME_MUST_HAVE_LESS_THAN_MAX_NUMBER_CHARACTERS_ERROR_MESSAGE = `Username must have less than ${
    REGISTER_PAGE_USERNAME_MAX_LENGTH
} characters.`


export interface User {
    userId: number
    username: string
    password: string
    description: string | null
    image: string | null
}
