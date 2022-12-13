beforeEach(() => {
  cy.visit("http://localhost:3000");
});
describe("Check elements", () => {
  it(`Visits homepage`, () => {
    cy.visit("http://localhost:3000");
  });
  it(`Check for h1`, () => {
    cy.contains("Citizen Ticket Challenge");
  });
  it(`Has input`, () => {
    cy.contains("category");
  });
  it(`Has choose colour button`, () => {
    cy.get("button").should("have.class", "choose-colour");
  });
  it(`Has choose icon button`, () => {
    cy.get("button").should("have.class", "choose-icon");
  });
  it(`Has create category button`, () => {
    cy.contains("Create Category");
  });
  it(`Has a next link that goes to category page`, () => {
    cy.contains("Next").click();
    cy.url().should("include", "category");
  });
});
