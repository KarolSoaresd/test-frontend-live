describe('Acessar blog do ThoughBot ', () => {
    beforeEach(() => {
        cy.visit('https://thoughtbot.com/blog/tags')
    })

    it('Positivo: Validar direcionamento ao blog escolhido no Thoughtbot', () => {
        cy.get(':nth-child(6) > :nth-child(15) > .tags-list-link').click()
        cy.url().should('be.equal', 'https://thoughtbot.com/blog/tags/bug')
        cy.get(':nth-child(1) > article > .mini-post-title > .mini-post-link').should('contain', 'Debugging Series 2021: Welcome to the Jungle')
    })

    it('Negativo: Validar campo de pesquisa com texto inválido', () => {
        cy.get('.site-nav-tag-links > :nth-child(6)').click()
        cy.get('#query').type('jsjsjsdgd')
        cy.get('.input-button-unit > .button').click()
        cy.get('.search-results-summary').should('contain', 'No articles found')
        cy.get('.search-results-summary').should('be.visible')
    })
})