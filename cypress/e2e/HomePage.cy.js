describe("My First Test", () => {
  it("Visits homepage", () => {
    cy.visit("http://localhost:3000");
    cy.click(button);
  });
});
