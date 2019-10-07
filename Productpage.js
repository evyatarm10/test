const SeleniumInfra = require('./SeleniumInfra')
let SI3 = new SeleniumInfra()

class ProductsPage {
   constructor(URL) {
       URL = SI3.getURL(URL)
   }
   async pressUp(cakesBefore, cakesAfter) {
       try {
           async function checkCakesOrder(cakesOrder) {
               let cakesArr = await SI3.findElementListBy("xpath", "//table[@id='productsTable']//following::th//following::h3")
               let cakesArrText = []
               for (let cake of cakesArr) {
                   let cakeText = await SI3.getTextFromElement(null, null, cake)
                   cakesArrText.push(cakeText)
               }
               console.log(`cakesArrText: ${cakesArrText}`)
               if (cakesArrText[0] == cakesOrder[0] && cakesArrText[1] == cakesOrder[1]) {
                   console.log("true")
               } else {
                   console.log("false")
               }
           }
           await checkCakesOrder(cakesBefore)
           await SI3.clickElement("id", "arrow-up")
           await checkCakesOrder(cakesAfter)
       }
       catch (error) {
           console.error(`pressUpFunc error`)
           console.error(`error: ${error}`);
       }
   }
   async pressDown(cakesBefore, cakesAfter) {
       try {
           async function checkCakesOrder(cakesOrder) {
               let cakesArr = await SI3.findElementListBy("xpath", "//table[@id='productsTable']//following::th//following::h3")
               let cakesArrText = []
               for (let cake of cakesArr) {
                   let cakeText = await SI3.getTextFromElement(null, null, cake)
                   cakesArrText.push(cakeText)
               }
               console.log(`cakesArrText: ${cakesArrText}`)
               if (cakesArrText[0] == cakesOrder[0] && cakesArrText[1] == cakesOrder[1]) {
                   console.log("true")
               } else {
                   console.log("false")
               }
           }
           await checkCakesOrder(cakesBefore)
           await SI3.clickElement("id", "arrow-down")
           await checkCakesOrder(cakesAfter)
       }
       catch (error) {
           console.error(`pressDownFunc error`)
           console.error(`error: ${error}`);
       }
   }
}
module.exports = ProductsPage

