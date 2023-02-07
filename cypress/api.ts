import { 
    HTTP_200_OK,
    POST_METHOD,
    REGISTER_API_ROUTE,
} from "const"
import {REGISTER_API_ALIAS, REGISTER_API_RESPONSE_USER} from "./constants"


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
