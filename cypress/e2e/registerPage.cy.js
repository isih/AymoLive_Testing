describe('Register Page', () => {
  it('should show validation errors when leaving all fields blank', () => {
    cy.visit('https://aymo-qa-task.netlify.app/')
    //cy.get('[type="button"]').click({ multiple: true });
    //cy.get('.MuiButton-sizeMedium').click({ multiple: true });
    cy.get('.MuiButton-sizeMedium').as('step3').click({ multiple: true });
    
    cy.get('.css-ofc7jj').as('step4').click({ multiple: true });
    cy.contains('Continue').click();
    //cy.get('.css-ofc7jj').as('step5').click({ multiple: true });
    cy.get('.css-1ujsas3').as('step5').click();


  })

  it('should show success when user enters correct email and password', () => {
    cy.visit('https://aymo-qa-task.netlify.app/')
    //cy.get('[type="button"]').click({ multiple: true });
    //cy.get('.MuiButton-sizeMedium').click({ multiple: true });
    cy.get('.MuiButton-sizeMedium').as('step3').click({ multiple: true });
    
    cy.get('.css-ofc7jj').as('step4').click({ multiple: true });
    cy.contains('Continue').click();
    //cy.get('.css-ofc7jj').as('step5').click({ multiple: true });
    cy.get('#email').as('step7').type('ali@gmail.com');
    cy.get('#password').as('step9').type('bkdk23ck');
    cy.get('.css-1ujsas3').as('step5').click();


  })

  it('should show error when user enters only email but no password', () => {
    cy.visit('https://aymo-qa-task.netlify.app/')
    //cy.get('[type="button"]').click({ multiple: true });
    //cy.get('.MuiButton-sizeMedium').click({ multiple: true });
    cy.get('.MuiButton-sizeMedium').as('step3').click({ multiple: true });
    
    cy.get('.css-ofc7jj').as('step4').click({ multiple: true });
    cy.contains('Continue').click();
    //cy.get('.css-ofc7jj').as('step5').click({ multiple: true });
    cy.get('#email').as('step7').type('ali@gmail.com');
    //cy.get('#password').as('step9');
    cy.get('.css-1ujsas3').as('step5').click();


  })

  it('should show error when user enters only password but no email', () => {
    cy.visit('https://aymo-qa-task.netlify.app/')
    //cy.get('[type="button"]').click({ multiple: true });
    //cy.get('.MuiButton-sizeMedium').click({ multiple: true });
    cy.get('.MuiButton-sizeMedium').as('step3').click({ multiple: true });
    
    cy.get('.css-ofc7jj').as('step4').click({ multiple: true });
    cy.contains('Continue').click();
    //cy.get('.css-ofc7jj').as('step5').click({ multiple: true });
    //cy.get('#email').as('step7').type('ali@gmail.com');
    cy.get('#password').as('step9').type('jkfd23nsj76');
    cy.get('.css-1ujsas3').as('step5').click();


  })

  it('should show error when user enters incorrect email but password is ok', () => {
    cy.visit('https://aymo-qa-task.netlify.app/')
    //cy.get('[type="button"]').click({ multiple: true });
    //cy.get('.MuiButton-sizeMedium').click({ multiple: true });
    cy.get('.MuiButton-sizeMedium').as('step3').click({ multiple: true });
    
    cy.get('.css-ofc7jj').as('step4').click({ multiple: true });
    cy.contains('Continue').click();
    //cy.get('.css-ofc7jj').as('step5').click({ multiple: true });
    cy.get('#email').as('step7').type('aligmail');
    cy.get('#password').as('step9').type('jkfd23nsj76');
    cy.get('.css-1ujsas3').as('step5').click();


  })

  it('when user enters correct email, password then submit the form and also finish the whole procedure', () => {
    cy.visit('https://aymo-qa-task.netlify.app/')
    //cy.get('[type="button"]').click({ multiple: true });
    //cy.get('.MuiButton-sizeMedium').click({ multiple: true });
    cy.get('.MuiButton-sizeMedium').as('step3').click({ multiple: true });
    
    cy.get('.css-ofc7jj').as('step4').click({ multiple: true });
    cy.contains('Continue').click();
    //cy.get('.css-ofc7jj').as('step5').click({ multiple: true });
    cy.get('#email').as('step7').type('ali@gmail.com');
    cy.get('#password').as('step9').type('jkfd23nsj76');
    cy.get('.css-1ujsas3').as('step5').click();
    cy.get('.css-ofc7jj').as('step11').click({ multiple: true });


  })
})

