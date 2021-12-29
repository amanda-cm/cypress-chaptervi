/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

describe('Connections endpoint', () => {
    it('GET- Obter total de conexões realizadas', () => {
      
       cy.api({
           method: 'GET',
           url: `${Cypress.config().apiUrl}/connections`
       }).then((response) => { //guarda o resultado da requisição
            console.log(response)

            expect(response.status).to.be.eq(200)
            expect(response.duration).lessThan(20) //verificando se a duração é menor que 20 segundos lt abreviação de lessThan
           
            expect(response.body)
                .to.have.property('total') //espero que tenha a propriedade total
                .to.be.a('number') //espero que seja um número
                .greaterThan(5) //valor acima de 5
            
            expect(response.headers)
                .to.have.property('content-type')
                .an('string')
                .equal('application/json; charset=utf-8')
        })
    });
});