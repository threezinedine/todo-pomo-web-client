import { 
    HTTP_200_OK,
    LOGIN_API_ROUTE,
    POST_METHOD,
    REGISTER_API_ROUTE,
    USER_KEY,
} from "const"
import {
    LOGIN_API_ALIAS,
    LOGIN_API_RESPONSE_USER,
    LOGIN_PAGE_TESTING_TOKEN,
    REGISTER_API_ALIAS, 
    REGISTER_API_RESPONSE_USER,
} from "./constants"


export const setupValidRegisterApi = () => {
    cy.intercept({
        url: REGISTER_API_ROUTE,
        method: POST_METHOD,
    },
    {
        statusCode: HTTP_200_OK,
        body: REGISTER_API_RESPONSE_USER,
    }).as(REGISTER_API_ALIAS)
}


export const setupInvalidLoginSuccess = () => {
    cy.intercept({
        url: LOGIN_API_ROUTE,
        method: POST_METHOD,
    },
    {
        statusCode: HTTP_200_OK,
        body: {
            TOKEN_KEY: LOGIN_PAGE_TESTING_TOKEN,
            USER_KEY: LOGIN_API_RESPONSE_USER,
        },
    }).as(LOGIN_API_ALIAS)
}