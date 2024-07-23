export default class Home {
    //Floating elements
    topBanner() {
        return cy.get('#text1');
    }
    closeTopBanner() {
        return cy.get('.close')
    }
    personalNotificationsModal() {
        return cy.get('.inner-wrapper')
    }
    personalNotificationsModalCloseBtn() {
        return cy.get('.weblayer--box-web-push-subscription > .close')
    }
    cookiesBanner() {
        return cy.get('.FeatureBar_root__oNfaI');
    }
    aceptCookies() {
        return cy.get('.Button_root__mZAHs.mx-5');
    }
    chatIcon() {
        return cy.get('#launcher');
    }
    exponeaBannerPromo() {
        return cy.get('.exponea-banner-promo')
    }
    exponeaBannerPromoCloseBtn() {
        return cy.get('.exponea-banner-promo > .exponea-close > .exponea-close-cross')
    }
    exponeaBannerSubscribe() {
        return cy.get('.exponea-banner-suscribir')
    }
    exponeaBannerSubscribeCloseBtn() {
        return cy.get('.exponea-banner-suscribir > .exponea-close')
    }

    //Page Elements
    //Header
    logo() {
        return cy.get('a[aria-label="Logo"]');
    }
    searchBox() {
        return cy.get('#mobile-search');
    }
    scanProduct(){
        return cy.get('button[aria-label="escanear producto"]');
    }
    userIcon(){
        return cy.get('button[aria-label="Menu"]');
    }
    heartIcon(){
        return cy.get('button[aria-label="Wishlist"]');
    }
    cartIcon(){
        return cy.get('button[aria-label="Bag"]');
    }
    
    //Navbar
    navbarLinks(){
        return ['ESPACIO DE LA CASA','PRODUCTOS','Nuevos','Muebles','Niñoideas','Outlet']
    }
};
