describe("Login test", () => {
	it("Visits local host", () => {
		// Visit the website and make sure Login button takes you to the login
		cy.visit("http://localhost:5173/");
		cy.contains("Login").click();
		cy.url().should("include", "/login");
		// Try logging in with valid credentials
		cy.fixture("example").then((data) => {
			cy.get("#username").type(data.username);
			cy.get("#password").type(data.password);
			cy.contains("Login").click();
			cy.url().should("include", `/${data.username}`);
		});
		cy.contains("Logout").click();
		// Make sure you can not visit userpage without being logged in
		cy.fixture("example").then((data) => {
			cy.visit(`http://localhost:5173/user/${data.username}`);
			cy.url().should("include", "/login");
		});
	});
});
