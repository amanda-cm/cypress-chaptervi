/// <reference types="cypress" />

import React from 'react'
import PageHeader from '../../src/components/PageHeader'
import {mount} from 'cypress-react-unit-test' //monta os componenetes em tela
import {BrowserRouter as Router} from 'react-router-dom' //páginas estão sendo renderizadas em routes

 describe('PageHeader component', () => {
     const baseCss= '/__root/src/assets/styles/global.css' ///caminho de estilos global
     const indexCss= '/__root/src/components/PageHeader/styles.css' //estilo do componente
    it('deve ser renderizado com sucesso', () => {
        const title= "Que incrível que você quer dar aulas."
        const description= "O primeiro passo é preencher esse formulário de inscrição."

        mount(
            <Router>
                <PageHeader
                title= {title} //variavel contendo  o titulo
                description= {description} //variavel contendo a descrição
                />
            </Router>
            ,
            { //referenciar arquivos de estilo
                stylesheets: [baseCss, indexCss]
            }
        )

        cy.get('.page-header').as('header') //guarda o item de .page-header em header
        cy.get('@header').find('strong').as('title') //a partir do header vai pegar o elemento que possui o strong e "guardar" no title
        cy.get('p').as('description') //alias "dizendo" que o p é a description
       

        cy.get('@title').should('have.text', title) //@title para "acessar" o alias que é o seletor de strong, poderia chamar o strong direto sem fazer o alias
        cy.get('@description').should('have.text', description)

        cy.get('@header').then(($elemento) => { //validando elementos css
            cy.log($elemento.css('background-color')) //imprimir o background color do header
            expect($elemento.css('background-color')).to.be.equal('rgb(130, 87, 229)') //valida a cor de fundo
            expect($elemento.css('flex-direction')).to.be.equal('column') //valida a cor de fundo
        })
    });
});