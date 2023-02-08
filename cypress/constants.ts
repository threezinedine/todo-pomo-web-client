import { 
    LOGIN_ROUTER,
    REGISTER_ROUTER, 
    User,
} from "const"


export const TESTING_HOST_BASE = "http://localhost:3000"

//register
export const FULL_REGISTER_ROUTER = `${TESTING_HOST_BASE}${REGISTER_ROUTER}`

export const REGISTER_PAGE_VALID_USERID = 1
export const REGISTER_PAGE_VALID_USERNAME = "threezinedineusername"
export const REGISTER_PAGE_VALID_PASSWORD = "threezinedinepassword"
export const REGISTER_PAGE_VALID_VALID_PASSWORD = "threezinedinepassword"

export const REGISTER_PAGE_LESS_THAN_MIN_NUMBER_CHARACTERS_USERNAME = "thre"
export const REGISTER_PAGE_MORE_THAN_MAX_NUMBER_CHARACTERS_USERNAME = "adlsfkahwoeijadslkfasfasdfajflkasfjaslfkafghasldkfasfjsadfafsd"
export const REGISTER_PAGE_HAVE_SPECIAL_CHARACTER_USERNAME = "threezinedineusername!"
export const REGISTER_PAGE_HAVE_SPACE_CHARACTER_USERNAME = "threezinedine username"

export const REGISTER_PAGE_LESS_THAN_MIN_NUMBER_CHARACTERS_PASSWORD = "thre"
export const REGISTER_PAGE_MORE_THAN_MAX_NUMBER_CHARACTERS_PASSWORD = "adlsfkahwoeijadslkfasfasdfajflkasfjaslfkafghasldkfasfjsadfafsd"
export const REGISTER_PAGE_HAVE_SPECIAL_CHARACTER_PASSWORD = "threezinedinepassword!"
export const REGISTER_PAGE_HAVE_SPACE_CHARACTER_PASSWORD = "threezinedine username"

export const REGISTER_PAGE_NOT_MATCH_PASSWORD_VALID_PASSWORD = "threezinedinepasswordnotmatch"

export const REGISTER_API_RESPONSE_USER: User = {
    userId: REGISTER_PAGE_VALID_USERID,
    username: REGISTER_PAGE_VALID_USERNAME,
    password: REGISTER_PAGE_VALID_PASSWORD,
    description: null,
    image: null,
}

export const REGISTER_API_ALIAS = "registerAPI"


// login
export const FULL_LOGIN_ROUTER = `${TESTING_HOST_BASE}${LOGIN_ROUTER}`

export const LOGIN_PAGE_VALID_USERID = 1
export const LOGIN_PAGE_VALID_USERNAME = "threezinedineusername"
export const LOGIN_PAGE_VALID_PASSWORD = "threezinedinepassword"

export const LOGIN_PAGE_INVALID_USERNAME = "threezinedineusernameinvalid"
export const LOGIN_PAGE_INVALID_PASSWORD = "threezinedinepasswordinvalid"

export const LOGIN_PAGE_LESS_THAN_MIN_NUMBER_CHARACTERS_USERNAME = "thre"
export const LOGIN_PAGE_MORE_THAN_MAX_NUMBER_CHARACTERS_USERNAME = "adlsfkahwoeijadslkfasfasdfajflkasfjaslfkafghasldkfasfjsadfafsd"
export const LOGIN_PAGE_HAVE_SPECIAL_CHARACTER_USERNAME = "threezinedineusername!"
export const LOGIN_PAGE_HAVE_SPACE_CHARACTER_USERNAME = "threezinedine username"

export const LOGIN_PAGE_LESS_THAN_MIN_NUMBER_CHARACTERS_PASSWORD = "thre"
export const LOGIN_PAGE_MORE_THAN_MAX_NUMBER_CHARACTERS_PASSWORD = "adlsfkahwoeijadslkfasfasdfajflkasfjaslfkafghasldkfasfjsadfafsd"

export const LOGIN_PAGE_TESTING_TOKEN = "asdlfaksfjlsdf.asfaslfkajsdflkaslfjsdlf.eqwoirsda"

export const LOGIN_API_RESPONSE_USER: User = {
    userId: LOGIN_PAGE_VALID_USERID,
    username: LOGIN_PAGE_VALID_USERNAME,
    password: LOGIN_PAGE_VALID_PASSWORD,
    description: null,
    image: null,
}

export const LOGIN_API_ALIAS = "loginAPI"