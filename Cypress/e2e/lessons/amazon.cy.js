describe("ilk test", () =>{
    it("Cypress sayfasini ziyaret et", ()=>{
        // burada visit metodu içinde koyulan / işareti baseUrl'dir. Bunu cypress.config.js dosyasından okur
        cy.visit("/");
    
    
    });
    
    
    it("Çerezleri kabul et",() =>{
        cy.xpath("//input[@id='sp-cc-accept']").click();
    });

    it('Url ve title kontrol et', ()=>{
        //url doğrulama
    cy.url().should('include', 'amazon')
    //title doğrulama
    cy.title().should('include', 'Amazon')
    });
    it('Arama kutusuna bir ürün yaz', ()=>{
        cy.get('#twotabsearchtextbox').type('Samsung S23 Ultra{enter}');
       //cy.get('#nav-search-submit-button').click();yukarida enter metodu yazmasak bu kod ayni islevi gorur
        cy.xpath("//input[@id='sp-cc-accept']").click();
    });
    it("Çerezleri kabul et",() =>{
        //bu kod çerezleri kabul eder
        cy.xpath("//input[@id='sp-cc-accept']").click();
    });
    it('anasayfaya geri dön', ()=>{
        //cy.get('.s-result-list .s-result-item').eq(0).click(); bu komut sayfadaki 0. indexteki ürünü seçer
        cy.go('back');
        //cy.go('back'); bu da ileri sayfaya gider
    });
    it('Kategori seçim kutusunda Elektroniki seç', ()=>{
        //kategori dropdown dan elektronik seçecek
        cy.get('#searchDropdownBox').select('Elektronik');
    });
    it('Profilim sekmesine geçinik', ()=>{
        //profilim sekmesi tiklandi
        cy.get('#nav-link-accountList').click();
        //üye giriş sayfasına git
        cy.contains("Amazon hesabınızı oluşturun").click();
    });
    it('Bir hesap oluşturun', ()=>{
        //Belirli bir texti içeren HTML elementi tıklandı
        cy.contains("Amazon hesabınızı oluşturun").click();
    });
    it('Hesap oluşturma sayfasında olduğunu doğrula', ()=>{
        //Sayfada olduğunu bir elementin texti ile doğrular
        cy.get(':nth-child(1) > :nth-child(2) > a-form-label').should("contain","Ad - Soyad");
    });
    it('Hesap oluşturma sayfasında olduğunu doğrula', ()=>{
        //Sayfada olduğunu bir elementin texti ile doğrular
        cy.get(':nth-child(1) > :nth-child(2) > a-form-label').should("contain","Ad - Soyad")

        //have.text bir metinin öncesi sonrası boşluk tuşları var ise tamamını karşılaştırır
        //cy.get('[for="app_email]').should("have.text","Cep telefonu numarası veya e-posta")

        //be.visible textin bir parçasının görünür olup olmadığını sorgular, boşuklara bakmaz
        cy.get('[for="app_email]').should("be.visible","Cep telefonu numarası veya e-posta")
        //yukarıdakinin ayni görevi görür
        cy.contains("Cep telefonu numarası veya e-posta").should('be.visible')
    });
})
//only metodu ile diğer test caseler çalışmaz sadece bu case test edilir.
describe.only("Amazon ürün arama", function () {
    it('Ana sayfayı ziyaret et', () => {
        cy.visit("/")
            //url doğrulama
        cy.url().should('include', 'amazon')
        //title doğrulama
        cy.title().should('include', 'Amazon')
        });

        it('Arana kutusunu bul ve ürün adını gir', ()=>{
            //const ile değişken tanımlanıyor
        const urunAdi="alcatel 2019G";
    
        //type ile sendkey gönderiyor
        cy.get('#twotabsearchtextbox').type(urunAdi).type('{enter}')
        //bu kod çerezleri kabul eder
        cy.xpath("//input[@id='sp-cc-accept']").click();
    });

    it('Arana sonuçlarını doğrula', ()=>{
        //locate almada class kullanilacaksa başına (.) koyulur
        //locate alırken id kullanılacaksa basina (#) koyulur
    
    //asagidaki kodda arama sonucunda 37 urun olup olmadigini dogruluyor
    //cy.get('.sg-col-inner').should("have.length",37)

    //asagidaki kodda arama sonucunda 20 urunden fazla olup olmadigi dogrulaniyor
    cy.get('.sg-col-inner').should("have.length.greaterThan", 20)
});
    })