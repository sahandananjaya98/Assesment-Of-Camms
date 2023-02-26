import{t} from 'testcafe'
import{Selector} from 'testcafe'
import { faker } from '@faker-js/faker';

const firstName = faker.name.firstName(); 
const lastName = faker.name.lastName(); 
const zipCode = faker.address.zipCode();

fixture('start')
.page('https://www.saucedemo.com')

.beforeEach(async t => {
  await t.setTestSpeed(0.1)
})

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

.typeText('#first-name', firstName)
.typeText('#last-name', lastName)
.typeText('#postal-code', zipCode)

.click('#continue')
.click('#finish')


});