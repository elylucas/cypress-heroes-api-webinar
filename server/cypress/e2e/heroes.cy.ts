describe('heroes endpoint', () => {
  it('get all the heroes', () => {
    cy.api('/heroes')
      .its('body')
      .then((body) => {
        expect(body.length).to.have.greaterThan(0);
      });
  });

  it('should create hero', () => {
    cy.api({
      method: 'POST',
      url: '/auth',
      body: {
        username: 'admin@test.com',
        password: 'test123',
      },
    }).then((response) => {
      const accessToken = response.body.access_token;
      cy.api({
        method: 'POST',
        url: '/heroes',
        body: {
          name: 'Test Hero',
          price: 1,
          saves: 1,
          fans: 1,
          powers: [1],
        },
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    });
  });
});
