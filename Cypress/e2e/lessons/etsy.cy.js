describe("Ürün Ara, Fiyata Göre Sırala ve Sepete Ekle", function() {

    //before her senaryodan once bir kez yapar
    before(()=>{
        //etsy web sitesine gidilir
        const url="https://www.etsy.com"
        cy.visit(url)
        //cy.contains("Accepter").click()
        cy.url().should("include", "etsy")

    });

    it('Sayfanin en altina in ve About goruldugunu dogrula', ()=>{
        cy.wait(2000)
        cy.get(':nth-child(3) > .wt-hide-xs').scrollIntoView()
        cy.get(':nth-child(3) > .wt-hide-xs').should('contain', 'About')
        cy.contains('About').should('be.visible');

       
    });

    it('Urun ara', ()=> {
        cy.wait(2000);
        cy.get('.wt-z-index-4 > .wt-grid > .wt-list-unstyled').scrollIntoView()
    cy.get('#global-enhancements-search-query').type('bracelet{enter}')
   //cy.contains("Accepter").click()
        
    });

    
 it('Filtrele kisminin secenekleri ve calistigini dogrula', ()=>{

    cy.get('.wt-menu__trigger > .wt-show-lg').click()
    cy.wait(2000);

    //siralama seceneklerini tanimla
    const siralamaSecenekleri= ['Relevancy', 'Lowest Price', 'Highest Price', 'Top Customer Reviews', 'Most Recent']

    cy.wait(2000);
    siralamaSecenekleri.forEach((secenek) => {
        cy.get('[data-menu-title-selected-option=""]')
        .contains(secenek)
        .should('be.visible')
        .then(()=> {
            cy.log('"${secenek}" siralama secenegi gorunur.');

    });
 });  
}); 

/*then: Önceki bir komutun tamamlanmasını bekler ve ardından belirtilen işlevi çalıştırır.
cy.log: Bir log mesahını konsola yazdırmak için kullanılan bir Cypress fonksiyonudur.
const: Değişken tanımlamak için kukllanılan bir JavaScript anahtar kelimesidir. Sabit (değiştirlemez) bir
değer atamak için kullanılır.

*/








    
    
})