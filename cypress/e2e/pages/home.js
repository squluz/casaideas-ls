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
    scanProduct() {
        return cy.get('button[aria-label="escanear producto"]');
    }
    userIcon() {
        return cy.get('button[aria-label="Menu"]');
    }
    heartIcon() {
        return cy.get('button[aria-label="Wishlist"]');
    }
    cartIcon() {
        return cy.get('button[aria-label="Bag"]');
    }

    //Navbar
    navbarLinks() {
        return ['ESPACIO DE LA CASA', 'PRODUCTOS', 'Nuevos', 'Muebles', 'Niñoideas', 'Outlet']
    }
    trackOrderIcon() {
        return cy.get("a[rel='noreferrer']");
    }
    shopIcon() {
        return cy.get("div[class='Navbar_root__KPC00 Navbar_shadow-magical__t8pfJ nav-sticky'] a:nth-child(2)");
    }
    languageIcon() {
        return cy.get("button[aria-label='link']");
    }

    //Footer
    footerDisclaimer() {
        return cy.get("p[class='text-sm text-center mb-12 md:mb-0 md:text-left']");
    }
    txtDisclaimer() {
        return 'Un hogar es un lugar para vivir, donde nos sentimos seguros, queridos y donde también compartimos con otros. En Casaideas encontrarás artículos de diseño, para vivir día a día en un espacio que te haga feliz.'
    }
    //Social Network
    socialMedia() {
        return ['INSTAGRAM', 'FACEBOOK', 'PINTEREST', 'LINKEDIN']
    }

    //Contact Form
    contactFormTitle() {
        return cy.get('.uppercase.mb-2');
    }
    txtFormTitle() {
        return 'Regístrate y obtén un 15% de descuento en el mes de tu cumpleaños'
    }

    contactInputName() {
        return cy.get('#name');
    }
    contactBirthDay() {
        return cy.get('#birthday');
    }
    contactEmail() {
        return cy.get('#footerEmail');
    }
    sendContacForm() {
        return cy.get("button[type='submit'] span");
    }

    //Cards
    cardUs() {
        return cy.get("div[class='Footer_card__cKMvM Footer_about__99jDG'] h5[class='uppercase text-xl text-secondary Footer_title__Ch2Wj']");
    }
    customerService() {
        return cy.get("div[class='Footer_card__cKMvM Footer_service__f3yhh'] h5[class='uppercase text-xl text-secondary Footer_title__Ch2Wj']");
    }
    sustainability() {
        return cy.get("div[class='Footer_card__cKMvM Footer_resources__GLxps'] h5[class='uppercase text-xl text-secondary Footer_title__Ch2Wj']");
    }
};
