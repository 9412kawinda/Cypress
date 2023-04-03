
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../Pages/HomePage/HomePage.spec";

beforeEach(()=>{
    cy.viewport(1600,720);
});

Given("I navigated to the Website",()=>{
    homePage.enterURL();
});

Then("Validate the menua in home page",(datatable)=>{
    datatable.hashes().beforeEach((Element)=>{
        homePage.verifyPageTitle(Element.title);
    });
});
