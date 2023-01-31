export const checkTextExist = (text: string) => {
    cy.contains(text) 
}

export const checkComponentExistByDataTestId = (testid: string) => {
    return cy.get(`[data-testid="${testid}"]`)
}
