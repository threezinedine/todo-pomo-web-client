import { 
    LOGIN_PAGE_LOGIN_BUTTON_DATA_TEST_ID,
    LOGIN_PAGE_PASSWORD_DATA_TEST_ID,
    LOGIN_PAGE_USERNAME_DATA_TEST_ID,
    LOGIN_ROUTER,
} from "const"
import { 
    getComponentExistByDataTestId,
} from "../utils"

describe('Login Page', () => {
    it('should contains the username and password input tags', () => {
        cy.visit(LOGIN_ROUTER)
        getComponentExistByDataTestId(LOGIN_PAGE_USERNAME_DATA_TEST_ID)
        getComponentExistByDataTestId(LOGIN_PAGE_PASSWORD_DATA_TEST_ID)
        getComponentExistByDataTestId(LOGIN_PAGE_LOGIN_BUTTON_DATA_TEST_ID)
    })
})