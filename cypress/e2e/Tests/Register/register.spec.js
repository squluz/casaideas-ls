import RegisterPage from '../pages/registerPage';

describe('User Registration', () => {
  it('should register a new user', () => {
    const registerPage = new RegisterPage();

    registerPage.visit();
    registerPage.goToRegisterPage();
    registerPage.fillEmail('luz.squ@example.com');
    registerPage.fillFirstName('Luz');
    registerPage.fillLastName('Squarzon');
    registerPage.fillPhone('65454668');
    registerPage.fillBirth('18/03')
    registerPage.fillPassword('Password123!');
    registerPage.fillConfirmPassword('Password123!')
    registerPage.fillrut('18999888')
    registerPage.acceptTerms();
    registerPage.submit();

    cy.url().should('include', '/mi-cuenta'); // Cambia según la URL de éxito
    
    cy.contains('Gracias por registrarte').should('be.visible'); 
  });
});
