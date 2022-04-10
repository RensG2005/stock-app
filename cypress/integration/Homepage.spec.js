describe("My First Test", () => {
  it("Visits Home page", () => {
    cy.visit("http://localhost:3000");

    cy.contains("h1", "THE BEST STOCK APP IN THE WORLD");
  });
});
