import { 
    LOGIN_PAGE_LOGIN_BUTTON_DATA_TEST_ID,
    LOGIN_PAGE_LOGIN_BUTTON_LABEL,
    LOGIN_PAGE_PASSWORD_DATA_TEST_ID,
    LOGIN_PAGE_PASSWORD_LABEL,
    LOGIN_PAGE_USERNAME_DATA_TEST_ID,
    LOGIN_PAGE_USERNAME_LABEL,
} from "const"
import { 
    FULL_LOGIN_ROUTER,
} from "../constants"
import { 
    checkTextExist,
    getComponentExistByDataTestId,
} from "../utils"

describe('Login Page', () => {
    it('should contains the username and password input tags', () => {
        cy.visit(FULL_LOGIN_ROUTER)
        checkTextExist(LOGIN_PAGE_USERNAME_LABEL)
        checkTextExist(LOGIN_PAGE_PASSWORD_LABEL)
        checkTextExist(LOGIN_PAGE_LOGIN_BUTTON_LABEL)
        getComponentExistByDataTestId(LOGIN_PAGE_USERNAME_DATA_TEST_ID)
        getComponentExistByDataTestId(LOGIN_PAGE_PASSWORD_DATA_TEST_ID)
        getComponentExistByDataTestId(LOGIN_PAGE_LOGIN_BUTTON_DATA_TEST_ID)
    })
})