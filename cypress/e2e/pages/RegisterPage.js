class RegisterPage {
    visit() {
        cy.visit('https://www.casaideas.cl/');
    }

    goToRegisterModal() {
        this.IconSession().click()
        cy.contains("span", "regístrate aquí").click()
    }

    IconSession() {
        return cy.get('.UserNav_avatarButton__Zw5Lk')
    }
    registerModal() {
        return cy.get('registerView');
    }


    fillEmail(email) {
        cy.get('#email').type(email);
    }

    fillFirstName(firstName) {
        cy.get('#firstName').type(firstName);
    }

    fillLastName(lastName) {
        cy.get('#lastName').type(lastName);
    }
    fillPhone(phone) {
        cy.get('#phone').type(phone);
    }
    fillRut(rut) {
        cy.get('#rut').type(rut);
    }
    fillBirth(birth) {
        cy.get('#birthday').type(birth);
    }

    fillPassword(password) {
        cy.get('#password').type(password);
    }
    fillConfirmPassword(confirmpassword) {
        cy.get('#confirmPassword').type(confirmpassword);
    }
    inforegister() {
        return cy.get('.modal-wrapper')  //debo poner una clase - preguntar jorge
    }

    //agregar direccion 

    addAddress() {
        cy.get('#shippingAddress').check(); // Cambia el selector según sea necesario un check para deseleccionarlo
    }
    saveAddressName(saveaddress) {
        cy.get('#saveAddressAs').type(saveaddress);

    }
    selectRegion(selectregion) {
        cy.get('#select-region').display(selectregion); //metodo de seleccion display preguntar 
    }
    addressNumber(addressnumber) {
        cy.get('#addressNumber').type(addressnumber);
    }
    addressComplement(addresscomplement) {
        cy.get('#addressComplement').type(addresscomplement);
    }
    zipCode(zipCode) {
        cy.get('#zipcode').type(zipCode);
    }

    addressPhone(addressphone) {
        cy.get('#addresPhone').type(addressphone);
    }
    acceptOfferByEmail() {
        cy.get('#acceptOfferByEmail').check();
    }
    acceptTerms() {
        cy.get('#acceptTerms').check();
    }
    submit() {
        cy.get('button[type="submit"]').click();
    }
}

export default RegisterPage;
