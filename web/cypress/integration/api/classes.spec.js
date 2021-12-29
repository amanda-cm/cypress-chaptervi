/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

describe('Classes endpoint', () => {
    it('POST- Cadastrar um novo professor', () => {

        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {                    //inspect payload -> view source
                "name": "Jubileu teste",
                "avatar": "",
                "whatsapp": "55997876654",
                "bio": "Campo de biografia",
                "subject": "Artes",
                "cost": 50,
                "schedule":[
                    {
                    "week_day": "1",
                    "from": "10:00",
                    "to": "12:00"
                    }
                ]
            }
        }).then((response) => {

            expect(response.status).to.be.equal(201)
            expect(response.duration).lt(50)      

            expect(response.headers)
                .to.have.property('content-type')
                .an('string')
                .equal('application/json; charset=utf-8')
        })
    });
});