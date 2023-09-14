/// <reference types="cypress" />
describe('File Upload', () => { 
    /*
    https://www.npmjs.com/package/cypress-file-upload sitesinden 
    npm install --save-dev cypress-file-upload kodunu terminale yazariz
    */ 
   const path1 = "1.jpg"
        const path2 = "2.jpg"
    it.only('Single File Upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
       
        cy.get('#filesToUpload').attachFile(path1)
        cy.get('#fileList > li').should('include.text','1.jpg')
    })
    it('Multiple File Upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
      
        cy.get('#filesToUpload').attachFile(path1).attachFile(path2) //bende çalışmadı
    })
    it('Multiple File Upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        
        cy.get('#filesToUpload').attachFile([path1,path2])
        cy.get('#fileList > :nth-child(1)').should('have.text','1.jpg')
        cy.get('#fileList > :nth-child(2)').should('contain.text','2.jpg')
        cy.get('#fileList > :nth-child(2)').should('include.text','2.jpg')
    })
    it.only('Overwrite File Name',()=>{
       
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        //filePath attach edilecek dosyayi, fileName ise eklenen dosyanin ismini degistirir
        cy.get('#filesToUpload').attachFile({filePath:path1,fileName:'image01.png'}) // dosyanın ismini değiştirerek upload eder
    })
    })