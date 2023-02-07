import userEvent from "@testing-library/user-event"
import {
    REGISTER_PAGE_PASSWORD_DATA_TEST_ID,
    REGISTER_PAGE_PASSWORD_LABEL, 
    REGISTER_PAGE_REGISTER_BUTTON_DATA_TEST_ID, 
    REGISTER_PAGE_USERNAME_DATA_TEST_ID, 
    REGISTER_PAGE_USERNAME_LABEL,
    REGISTER_PAGE_USERNAME_MUST_HAVE_MORE_THAN_MIN_NUMBER_CHARACTERS_ERROR_MESSAGE,
    REGISTER_PAGE_VALID_PASSWORD_DATA_TEST_ID,
    REGISTER_PAGE_VALID_PASSWORD_LABEL,
} from "const"
import {
    setupValidRegisterApi,
} from "../api"
import {
    FULL_REGISTER_ROUTER,
    REGISTER_API_ALIAS,
    REGISTER_PAGE_LESS_THAN_MIN_NUMBER_CHARACTERS_USERNAME, 
    REGISTER_PAGE_VALID_PASSWORD, REGISTER_PAGE_VALID_USERNAME,
    REGISTER_PAGE_VALID_VALID_PASSWORD,
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

    it("should call the api for register route, when all component is typed and the submit button is clicked.", () => {
        setupValidRegisterApi()
        cy.visit((FULL_REGISTER_ROUTER))

        checkComponentExistByDataTestId(REGISTER_PAGE_USERNAME_DATA_TEST_ID)
            .type(REGISTER_PAGE_VALID_USERNAME)
        checkComponentExistByDataTestId(REGISTER_PAGE_PASSWORD_DATA_TEST_ID)
            .type(REGISTER_PAGE_VALID_PASSWORD)
        checkComponentExistByDataTestId(REGISTER_PAGE_VALID_PASSWORD_DATA_TEST_ID)
            .type(REGISTER_PAGE_VALID_VALID_PASSWORD)

        checkComponentExistByDataTestId(REGISTER_PAGE_REGISTER_BUTTON_DATA_TEST_ID)
            .click()

        cy.wait(`@${REGISTER_API_ALIAS}`)
            .then(intercept => {
                expect(intercept.request.body.username).to.equal(REGISTER_PAGE_VALID_USERNAME)
                expect(intercept.request.body.password).to.equal(REGISTER_PAGE_VALID_PASSWORD)
            })
    })

    it("should check some length limitation all fields and the valid password must match with the password", () => {
        cy.visit((FULL_REGISTER_ROUTER))

        checkComponentExistByDataTestId(REGISTER_PAGE_USERNAME_DATA_TEST_ID)
            .type(REGISTER_PAGE_LESS_THAN_MIN_NUMBER_CHARACTERS_USERNAME)

        checkComponentExistByDataTestId(REGISTER_PAGE_REGISTER_BUTTON_DATA_TEST_ID)
            .click()

        checkTextExist(REGISTER_PAGE_USERNAME_MUST_HAVE_MORE_THAN_MIN_NUMBER_CHARACTERS_ERROR_MESSAGE)
    })
})
