describe("https://eyessquare.netlify.app", () => {
  it("can register and login a user as watcer", () => {
    cy.visit("https://eyessquare.netlify.app/login_portal.html");
    cy.get(".cta").contains("WATCHER").click();
    cy.get(`a[href*="/signup_watcher.html"]`).click();
    cy.get("input#firstname").type("Joran");
    cy.get("input#surname").type("Engelund");
    cy.get("input#email").type("example@email.com");
    cy.get("input#password").type("12345678");
    cy.get("input#password2").type("12345678");
    cy.get(`button[type*="submit"]`).click();
    cy.get(".afterRegisterCta").click();
    cy.get(`li`).contains("Action").click();
    cy.get(".cta").first().contains("Play Now").click();
    cy.get(".back_btn").click();
    cy.get(".signout-icon").click();
    cy.get(".back_btn").click();
    cy.get(".cta").contains("CREATOR").click();
    cy.get(`input[name="email"]`).type("email@adress.com");
    cy.get(`input[name="password"]`).type("12345567");
    cy.get(`button[type*="submit"]`).click();
    cy.get(".header-item").contains("movies").click();
    cy.get(`input#search`).type("A good game");
    cy.get(`input#search`).clear();
    cy.get(".signout-icon").click();
    cy.get(".back_btn").click();
  });
});
