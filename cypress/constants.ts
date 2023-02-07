import { 
    REGISTER_ROUTER, 
    User,
} from "const"


export const TESTING_HOST_BASE = "http://localhost:3000"
export const FULL_REGISTER_ROUTER = `${TESTING_HOST_BASE}${REGISTER_ROUTER}`


export const REGISTER_PAGE_VALID_USERID = 1
export const REGISTER_PAGE_VALID_USERNAME = "threezinedineusername"
export const REGISTER_PAGE_VALID_PASSWORD = "threezinedinepassword"
export const REGISTER_PAGE_VALID_VALID_PASSWORD = "threezinedinepassword"

export const REGISTER_PAGE_LESS_THAN_MIN_NUMBER_CHARACTERS_USERNAME = "thre"
export const REGISTER_PAGE_MORE_THAN_MAX_NUMBER_CHARACTERS_USERNAME = "adlsfkahwoeijadslkfasf;asdfajflkasfjaslfkafghasldkfasfjsadfafsd"
export const REGISTER_PAGE_HAVE_SPECIAL_CHARACTER_USERNAME = "threezinedineusername!"
export const REGISTER_PAGE_HAVE_SPACE_CHARACTER_USERNAME = "threezinedine username"

export const REGISTER_PAGE_LESS_THAN_MIN_NUMBER_CHARACTERS_PASSWORD = "thre"
export const REGISTER_PAGE_MORE_THAN_MAX_NUMBER_CHARACTERS_PASSWORD = "adlsfkahwoeijadslkfasf;asdfajflkasfjaslfkafghasldkfasfjsadfafsd"
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
