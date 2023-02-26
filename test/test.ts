import{t} from 'testcafe'
import{Selector} from 'testcafe'
fixture('start')
.page('https://www.saucedemo.com')

test('mytest',async t =>{

await t
.typeText('#user-name','performance_glitch_user')
.typeText('#password','secret_sauce')
.click('#login-button')

.expect(Selector('.inventory_item_name').withText('Sauce Labs Fleece Jacket').exists)
    .ok()

.expect(Selector('.inventory_item_price').withText('49.99').exists)
.ok()

.click('#add-to-cart-sauce-labs-backpack')
.click('#add-to-cart-sauce-labs-fleece-jacket')


.click('#shopping_cart_container')

.expect(Selector('#item_4_title_link,#item_5_title_link').exists).ok()

.click('#checkout')

.typeText('#first-name','sahan')
.typeText('#last-name','dananjaya')
.typeText('#postal-code','60344')

.click('#continue')
.click('#finish')


});