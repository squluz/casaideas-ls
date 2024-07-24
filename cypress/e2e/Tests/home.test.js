/// <reference types="Cypress"/>
import Home from "../pages/home";

describe('Home Page - Page View', function () {
    //Global variables
    const home = new Home()

    beforeEach(function () {
        cy.viewport(1500, 800)
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

    it('Main page elements - View', () => {
        cy.wait(10000);
        cy.closeFloatingElements()
        //Header
        home.logo().should('be.visible')
        home.searchBox().should('be.visible')
        home.scanProduct().should('be.visible')
        home.userIcon().should('be.visible')
        home.heartIcon().should('be.visible')
        home.cartIcon().should('be.visible')

        //Navbar
        cy.get('.DesktopMegamenu_desktop-megamenu-list__0RP49').eq(1).find('li').each((el, index) => {
            expect(el.text()).contains(home.navbarLinks()[index])
        });
        home.trackOrderIcon().should('be.visible')
        home.shopIcon().should('be.visible')
        home.languageIcon().should('be.visible')
    });

    it('Footer elements - View', () => {
        cy.wait(10000);
        cy.closeFloatingElements()

        cy.contains('a', 'Venta por mayor');
        cy.contains('a', 'Rastrea tu pedido');
        cy.contains('a', 'Encuentra una tienda');
        cy.contains('a', 'Necesito ayuda');
        cy.contains('a', 'Calendario De Casaideas');

        for (const icon of home.socialMedia()) {
            cy.get(`a[title="${icon}"]`).should('be.visible')
        }

        cy.get('a[title="Home"]').should('be.visible');
        home.footerDisclaimer().should('be.visible').and('contain.text', home.txtDisclaimer())
        home.contactFormTitle().should('be.visible').and('contain.text', home.txtFormTitle())

        home.contactInputName().should('be.visible')
        home.contactBirthDay().should('be.visible')
        home.contactEmail().should('be.visible')
        home.sendContacForm().should('be.visible').and('contain.text','Suscribirme')
        
        home.cardUs().should('be.visible')
        home.customerService().should('be.visible')
        home.sustainability().should('be.visible')
    });
})
