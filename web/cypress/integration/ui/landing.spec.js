/// <reference types="cypress" />

const larguras= [1200,1090]

larguras.forEach(largura => { //para cada largura ele vai executar todos os testes
    describe('Landing page', () => {

        beforeEach(() => {
            cy.visit('/')
            cy.viewport(largura, 900)
            cy.log('Largura: ', largura)
        })
        it('Quando eu clicar no botão dar aulas, então devo ser redirecionado para o cadastro de aulas', () => {
            cy.get('div a.give-classes').click()
            cy.url().should('contain', 'give-classes')
    
        });
        it('Quando eu clicar no botão estudar, então devo ser redirecionado para a pesquisa de professores', () => {
            cy.get('div a.study').click()
            cy.url().should('contain', 'study')
        });
    });
})
