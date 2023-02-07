export const checkTextExist = (text: string) => {
    cy.contains(text) 
}

export const getComponentExistByDataTestId = (testid: string) => {
    return cy.get(`[data-testid="${testid}"]`)
}
