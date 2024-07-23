/// <reference types="Cypress"/>
import Home from "../pages/home";

describe('Home Page - Page View', function () {
    //Global variables
    const home = new Home()

    before(function () {
        cy.visit('https://www.casaideas.cl/')
    })


    it('Floating elements - View', () => {
        cy.wait(6000)

        home.personalNotificationsModal().should('be.visible')
        cy.wait(2000)

        home.personalNotificationsModalCloseBtn().click({ force: true })
        home.personalNotificationsModal().should('not.exist')
        home.topBanner().should('be.visible')
        cy.wait(1000)

        home.closeTopBanner().click()
        cy.wait(4000)

        home.topBanner().should('not.exist')

        home.exponeaBannerPromo().should('be.visible')
        cy.wait(2000)

        home.exponeaBannerPromoCloseBtn().click()
        home.exponeaBannerSubscribe().should('be.visible')
        cy.wait(2000)

        home.exponeaBannerSubscribeCloseBtn().click()

        home.cookiesBanner().should('be.visible')
        home.aceptCookies().should('be.visible')
        home.aceptCookies().click()
        home.chatIcon().should('be.visible')
    });

    it.only('Main page - View', () => {
       cy.wait(8000);
        cy.closeFloatingElements()
        //Header
        home.logo().should('be.visible')
        home.searchBox().should('be.visible')
        home.scanProduct().should('be.visible')
        home.userIcon().should('be.visible')
        home.heartIcon().should('be.visible')
        home.cartIcon().should('be.visible')

        //Navbar
        cy.get('.DesktopMegamenu_desktop-megamenu-list__0RP49').eq(1).find('li').each((el,index)=>{
            expect(el.text()).contains(home.navbarLinks()[index])
        });
    });
})
