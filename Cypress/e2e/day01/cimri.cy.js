describe("Hepsiburada sayfasi testi", () => {
   //testin oncesinde yapilmasi istenen kodlar beforeEach icine yazilir. Tekrarlanan isler icin kullanilir. 
    beforeEach(() => {
        cy.visit("/");
     });
    
 /*    afterEach(() => {
        //afterEach her test sonrasinde yapilan isler
        cy.reload();
        //reload sayfayi refresh etmek icin
     });
     */
    
     it('Anasayfanin acildigini dogrula', () => {
        cy.url().should('eq', "https://www.cimri.com/");
        cy.title().should('eq', 'Cimri');
     });
    
it('Arama yapılmalıdır ve sonuçlar doğrulanmalıdır', () => {
const expectedText='Asus rog zephyrus'

   cy.get('.s17vz787-1').click();
   cy.get('.s17vz787-4').type(expectedText)
   cy.wait(2000)
   //force:true ile clickleme yapmadiginda zorla click yaptirir
   cy.contains('asus rog zephyrıs g14').click({force:true});

});

})