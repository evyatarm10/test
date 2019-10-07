const SeleniumInfra = require('./SeleniumInfra')
let SI2 = new SeleniumInfra()

class HomePage {
   constructor(URL) {
       URL = SI2.getURL(URL)
   }
   async search(input) {
       try {
           await SI2.write(input, "id", "inputSearch")
           await SI2.clickElement("id", "inputSearchSubmit")
           console.log("clicked inputSearchSubmit btn")
           if (SI2.validURL(input.toLowerCase())) {
               console.log(`URLValFunc: ${input} is true`)
               return true
           } else {
               console.error(`URLValFunc: ${input} is false`)
               return false
           }
       } catch (error) {
           console.error(`searchfunc error`)
           console.error(`error: ${error}`)
       }
   }
   async validAdvanceSearch(cakesArr = null , ratesArr = null , date = null , txt1= null  , txt2= null ){
    await seleniuminfra.clickElement("id" , "myBtn")
    let stringResult = "You have searched the following:"
    let results , newDate
    if(cakesArr){ // Click 'checkbox' button for cakes
        for(let cakeType of cakesArr){ 
            await seleniuminfra.clickElement("css" , `.cakeTypes[value='${cakeType}']`)
        }
        stringResult+= `\nCake type: ${cakesArr}`
    }
    if(ratesArr){ // Click 'checkbox' button for rates
        for(let cakeRate of ratesArr){
            await seleniuminfra.clickElement("css" , `.cakeRates[value="${cakeRate}"]`)
        }
        stringResult+= `\nCake ratings: ${ratesArr}`
    }
    if(date){ // Insert date to Date input and change date format for comparing
        await seleniuminfra.write(date , "xpath" , `//input[@type='date']`)
        let spl = date.includes(".")?date.split("."):date.includes("/")?date.split("/"):date.split("-")
        newDate = spl[2] + "-" + spl[1] + "-" + spl[0]
        stringResult+= `\nDate of upload: ${newDate}`
    }
    if(txt1){ // Insert text to first text input
        await seleniuminfra.write(txt1 , "id" , "input1")
        stringResult+= `\nWeb pages that have all of these words: ${txt1}`
    }
    if(txt2){ // Insert text to second text input
        await seleniuminfra.write(txt2 , "id" , "input2")
        stringResult+= `\nWeb pages that have this exact wording or phrase: ${txt2}`
    }
    await seleniuminfra.clickElement("id" , "myBtnForm") // Click 'Search' Buttons
    results = await seleniuminfra.getTextFromElement("className" , "searchedItem") // getText from search

    // console.log(results)
    // console.log(stringResult)
    if(results.split(' ').join('') == stringResult.split(' ').join('')){ // Compare between wanted and result search
        console.log("woohoo Well Done!!")
    }else{
        console.log("Nooooo!!!!!!!!")
    }
    await seleniuminfra.clickElement("className" , "close")
 }
}

let cakes = ["Mousse", "Chocolate"]
let ratings = [5, 4]
let date = 30092019


// let homePage = new HomePage("https://cakes-automation-course.herokuapp.com/index.html")
// // homePage.advanceSearch(cakes, ratings, date, "cake", "chocolate")
// homePage.search("Aabout")
// const SeleniumInfra = require('./SeleniumInfra')
// let SI3 = new SeleniumInfra()