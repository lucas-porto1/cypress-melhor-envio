/// <reference types="cypress" />


import Elements from '../elements/elm'

const elm = new Elements
const url = Cypress.config("baseUrl")


class CadastroPage {

    acessarSite() {
        cy.visit(url)
  
    }


    informarNome(nome) {
        cy.get(elm.inputNome()).should('have.value', '').type(nome)
    }


    informarSobrenome(sobrenome) {
        cy.get(elm.inputSobrenome()).type(sobrenome)
    }

    informarNomeLoja(nomeLoja) {
        cy.get(elm.inputNomeLoja()).type(nomeLoja)
    }


    informarCelular(celular) {
        cy.get(elm.inputCelular()).type(celular)
    }


    informarCPF(cpf) {
        cy.get(elm.inputCPF()).type(cpf)
    }

    informarDtNascimento(dtNascimento) {
        cy.get(elm.inputDtNascimento()).type(dtNascimento)
    }

    informarOndeVende(ondeVende) {
        cy.get(elm.inputOndeVende()).type(ondeVende + '{downarrow}{enter}')
    }

    informarMediaMensal(mediaMensal) {
        cy.get(elm.inputMediaMensal()).type(mediaMensal + '{downarrow}{enter}')
    }


    informarEmail(email) {
        cy.get(elm.inputEmail()).type(email)
    }

    informarConfirmaEmail(confirmaEmail) {
        cy.get(elm.inputConfirmaEmail()).type(confirmaEmail)
    }


    informarSenha(senha) {
        cy.get(elm.inputSenha()).type(senha)
    }

    informarConfirmaSenha(confirmaSenha) {
        cy.get(elm.inputConfirmaSenha()).type(confirmaSenha)
    }

    checkTermos() {
        cy.contains('Concordo com os').click()
    }

    confirmaCadastro() {
        cy.contains('avançar').click()
    }

    informarCep(cep) {
        cy.get(elm.inputCep()).should('have.value', '').type(cep)
    }

    informarNumero(numero) {
        cy.get(elm.inputNumero()).type(numero)
    }

    verificaCadastro(msg) {
        cy.get(elm.step()).should('contain', msg)
    }

}

export default CadastroPage;