Feature: Ecommerce Validations

    @web
    Scenario: Placing The Order
        Given A login to Ecommerce application with "lucky8463@gmail.com" and "GetHigh@8463"
        When  Add "ADIDAS ORIGINAL" to cart
        Then Verify "ADIDAS ORIGINAL" is displayed in the Cart
        When Enter valid details and place the Order
        Then Verify order is present in the Orderhistory

    
    Scenario: Placing The Order
        Given A login to Ecommerce2 application with "lucky8463@gmail.com" and "GetHigh@8463"
        Then Verify error Message is displayed

    @new
    Scenario Outline: Scenario Outline name: Placing The Order
        Given A login to Ecommerce2 application with "<username>" and "<password>"
        Then Verify error Message is displayed

        Examples:
            | username            | password     |
            | lucky8463@gmail.com | GetHigh@8463 |
            | anshika@gmail.com   | Iamking@000  |

