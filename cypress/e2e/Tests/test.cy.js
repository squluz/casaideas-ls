/// <reference types="Cypress"/>
import Home from "../pages/home";

describe('Nombre de la suite', function () {
    //Global variables

    //Creating the page objets
    const home = new Home()
    

    beforeEach(function () {
        cy.visit('https://www.casaideas.cl/')


    })


    it('registro de usuario', () => {

        cy.get('.DesktopMegamenu_desktop-megamenu-list__0RP49').find('li').each((el,index)=>{
            expect(el.text()).to.be.equal(home.navbarLinks()[index])
        });
    });

})
