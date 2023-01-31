import {
    REGISTER_PAGE_PASSWORD_DATA_TEST_ID,
    REGISTER_PAGE_PASSWORD_LABEL, 
    REGISTER_PAGE_USERNAME_DATA_TEST_ID, 
    REGISTER_PAGE_USERNAME_LABEL,
    REGISTER_PAGE_VALID_PASSWORD_DATA_TEST_ID,
    REGISTER_PAGE_VALID_PASSWORD_LABEL,
} from "const"
import {
    FULL_REGISTER_ROUTER,
} from "../constants"
import {
    checkComponentExistByDataTestId,
    checkTextExist,
} from "../utils"



describe("Register Page testing", () => {
    it("should display Username, Password, Valid Password label and username, password, valid data-testid input tags", () => {
        cy.visit(FULL_REGISTER_ROUTER)
        
        checkTextExist(REGISTER_PAGE_USERNAME_LABEL)
        checkTextExist(REGISTER_PAGE_PASSWORD_LABEL)
        checkTextExist(REGISTER_PAGE_VALID_PASSWORD_LABEL)

        checkComponentExistByDataTestId(REGISTER_PAGE_USERNAME_DATA_TEST_ID)
        checkComponentExistByDataTestId(REGISTER_PAGE_PASSWORD_DATA_TEST_ID)
        checkComponentExistByDataTestId(REGISTER_PAGE_VALID_PASSWORD_DATA_TEST_ID)
    })
})
