describe('Portfolio testing', () => {
  beforeEach(() => {
    cy.visit('https://portofolio-zahwa.vercel.app/');
  });

  describe('1920, 1080', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
    })

    it('Navbar testing', () => {

      cy.clickNavLink('Skills');
      cy.clickNavLink('Projects');
      cy.clickNavLink('Contact');
      cy.clickNavLink('Home');
  
      cy.get('#lancon').click();
      cy.get('#lanpro').click();
        
  
    });
  
    it('form testing', () => {
              
      cy.fillOutForm({
        name: 'zahwa',
        email: 'zahwa@gmail.com',
        message: 'test',
      });
    });

  }) 
  


describe('responsive mobile', () => {
  beforeEach(() => {
    cy.viewport('samsung-s10');
  });

  it('Navbar testing', () => {

    cy.get('.rounded-full > img').click();

    cy.clickNavLink('Skills');
    cy.clickNavLink('Projects');
    cy.clickNavLink('Contact');
    cy.clickNavLink('Home');

    cy.get('.justify-end > button > img').click();

    cy.get('#lancon').click();
    cy.get('#lanpro').click();
    
    

  });

  it('form testing', () => {
         
    cy.fillOutForm({
      name: 'zahwa',
      email: 'zahwa@gmail.com',
      message: 'test',
    });
  });
});

describe('responsive ipad', () => {
  beforeEach(() => {
    cy.viewport(500, 700);
  });

  it('Navbar testing', () => {

    cy.get('.rounded-full > img').click();

    cy.clickNavLink('Skills');
    cy.clickNavLink('Projects');
    cy.clickNavLink('Contact');
    cy.clickNavLink('Home');

    cy.get('.justify-end > button > img').click();

    cy.get('#lancon').click();
    cy.get('#lanpro').click();

    
  });
  
  it('form testing', () => {
    
        
    cy.fillOutForm({
      name: 'zahwa',
      email: 'zahwa@gmail.com',
      message: 'test',
    });
  });
});

describe('social media and project', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it('Social Media testing', () => {
    cy.get('#linkedin').click();
    cy.get('#github').click();
    cy.get('#ig').click();

  });

  it('Project testing', () => {

    cy.get('[id^=hover]').each(($element) => {

      cy.wrap($element)
        
        .trigger('mouseover')
        .within(() => {
          cy.get('[id^=link-]').click();
        });

    });
  });
  
});
});