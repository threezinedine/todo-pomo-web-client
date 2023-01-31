export const checkTextExist = (text: string) => {
    cy.contains(text) 
}

export const checkComponentExistByDataTestId = (testid: string) => {
    cy.get(`[data-testid="${testid}"]`)
}
