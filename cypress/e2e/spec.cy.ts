describe("template spec", () => {
  it("passes", () => {
    cy.viewport(1920, 1080);
    cy.visit("localhost:3000");
    cy.contains("We Design Experiences that Connect");
  });
});
