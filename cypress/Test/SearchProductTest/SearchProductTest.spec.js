
import { DataTable, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import searchProduct from "../../Pages/SearchProductPage/SearchProductPage.spec";
import homePage from "../../Pages/HomePage/HomePage.spec";

Given("I navigate to the Website",()=>{
    homePage.enterURL();
});

When("Search the blog",(DataTable)=>{
    DataTable.hashes().forEach((Element)=>{
        searchProduct.searchProduct(Element.blog);
    });
});

Then("Verify correct blog name searchd",(DataTable)=>{
    DataTable.hashes().forEach((Element)=>{
        searchProduct.verifyProduct(Element.searchValue);
    });
});