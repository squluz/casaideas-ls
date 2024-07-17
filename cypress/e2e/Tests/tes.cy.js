/// <reference types="Cypress"/>

import RegisterPage from "../pages/registerPage";

describe('Nombre de la suite', function () {
    //Global variables

    //Creating the page objets
    const registerPage = new RegisterPage()
    

    beforeEach(function () {
        cy.visit('https://www.casaideas.cl/')


    })


    it('registro de usuario', () => {
        registerPage.goToRegisterModal();


    });

})
