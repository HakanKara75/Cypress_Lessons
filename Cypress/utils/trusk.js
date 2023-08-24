export class Google {

    elements= {

        googleSearch: () =>cy.get('.gLFyf')
    }


    googleUrl (){

        cy.visit('www.google.com')
    }





}





export const google = new Google();

export class Trusk {




    truskUrl (){

        cy.visit('https://trusk.com/fr/')
    }







}





export const trusk = new Trusk();