package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BooksPage extends Utility {
    private static final Logger log = LogManager.getLogger(BooksPage.class.getName());

    @FindBy(id = "products-orderby")
    WebElement _sortByAtoZ;
    @FindBy(xpath = "//a[contains(text(),'Fahrenheit 451 by Ray Bradbury')]")
    WebElement _rayBeadbury;
    @FindBy(className = "button-2 product-box-add-to-cart-button")
    WebElement _addToCart;


    public void productSortBy(String SortBy){
        Reporter.addStepLog("Sorting products by A to Z" + SortBy + "selecting A to Z"+ _sortByAtoZ.toString());
        clickOnElement(_sortByAtoZ);
        selectByVisibleTextFromDropDown(_sortByAtoZ,SortBy);
        log.info("Sorting products by A to Z" + SortBy + "selecting A to Z"+ _sortByAtoZ.toString());
    }

    public void selectingBooks(){
        Reporter.addStepLog("Clicking on Book of auther Ray Bedbury"+_rayBeadbury.toString());
        clickOnElement(_rayBeadbury);
        log.info("Clicking on Book of auther Ray Bedbury"+_rayBeadbury.toString());
    }


    public void addToCart(){
        Reporter.addStepLog("Clicking on Add to Cart button"+_addToCart.toString());
        clickOnElement(_addToCart);
        log.info("Clicking on Add to Cart button"+_addToCart.toString());
    }
    public void userShouldAddBookToCart(String SortBy){
        productSortBy(SortBy);
        selectingBooks();
        addToCart();

    }
}
