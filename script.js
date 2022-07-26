/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

const billInput = document.getElementById('billTotal');
const tipInput= document.getElementById('tipInput')
const splitBill = document.getElementById('no-of-people')
const totaltip = document.getElementById('perPersonTotal')

// Get number of people from number of people div


let totalP=Number(splitBill.innerText)
// ** Calculate the total bill per person **
const calculateBill = () => {

  // get bill from user input & convert it into a number
const bill = Number(billInput.value)

  // get the tip from user & convert it into a percentage (divide by 100)
const tip = Number(tipInput.value)/100

  // get the total tip amount
  const total = bill * tip
  // calculate the total (tip amount + bill)
  const totalbill = bill + total

  // calculate the per person total (total divided by number of people)

  const amount = totalbill / totalP
  
  // update the perPersonTotal on DOM & show it to user
  totaltip.innerText= `$${amount.toFixed(2)}`
  // totaltip.innerText=`$${amount}`

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  totalP+=1

  // update the DOM with the new number of people
  splitBill.innerText=totalP
  
  // calculate the bill based on the new number of people
  calculateBill()
  
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if(totalP<=1){
    throw 'Hey ! You can not have less than 1 people'
    return
  }
  
  
// decrement the amount of people
 totalP-=1
  

  // update the DOM with the new number of people
  splitBill.innerText=totalP
 
  // calculate the bill based on the new number of people
  calculateBill()
 
}