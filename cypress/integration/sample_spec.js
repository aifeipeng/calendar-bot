const getIframeBody = () => {
  // get the iframe > document > body
  // and retry until the body element is not empty
  return (
    cy
      .get("iframe")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      // wraps "body" DOM element to allow
      // chaining more Cypress commands, like ".find(...)"
      // https://on.cypress.io/wrap
      .then(cy.wrap)
  );
};

describe("My First Test", () => {
  //   origin site
  // cy.visit("https://onlinebokning.pastelldata.com/1538/");

  it("Visits iframe", () => {
    const userName = "ENTER YOUR USERNAME";
    const password = "ENTER YOUR PASSWORD";
    const fortnightAway = new Date(+new Date() + 12096e5);
    const valueString = `${fortnightAway.toISOString().split("T")[0]} 16:00:00`;

    cy.visit(
      "https://web-8155.pastelldata.com/(S(av2vto3slutgmp24j1tootgk))/Home/SetUnit?GID=1538&GOTOPAGE=DEFAULT&HIDEMENU=0&CUSTOMCSS=https://css.pastelldata.com/1538/1538.css"
    );
    cy.get(".LoginLabel").click();
    cy.get("#QuickLoginForm #UserName").click();
    cy.get("#QuickLoginForm #UserName").type(userName);
    cy.get("#QuickLoginForm #Password").type(password);
    cy.get("#QuickLoginForm .PDThemeSecondaryButtonColor").click();
    cy.wait(2000);
    cy.get("#InfoObject_NoneLabelFor_RadioActivityTimeFilterCombo").click();
    cy.contains("Badminton 60").click();
    cy.wait(2000);
    cy.get(
      `.LCDayCell:nth-child(${fortnightAway.getDate()}) .LCDayText`
    ).click();
    cy.wait(3000);
    cy.get(`[value=${valueString}]`).click();
  });
});

// can be used to couple to text
// cy.contains('Submit').click()
// to get certain 
// cy.get("button");


