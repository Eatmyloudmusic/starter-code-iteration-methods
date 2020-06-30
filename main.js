// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
// console.log(users)
const main = document.querySelector('main')

//-------------
// function printKataHeading (parentElement, kataNumber){
//     const kata1Heading = document.createElement("h1")
//     kata1Heading.append("KATA" + kataNumber)
//     parentElement.append(kata1Heading)
// }
// function printObject (parentElement, object){
//     const stringifiedObject = JSON.stringify(object)
//     parentElement.append(stringifiedObject)
// }
// printKataHeading(main, 0)
// const greenEyes1 = users.filter(user => user.eyeColor === 'green')
// printObject(main, greenEyes1)
//------------

//------------
// function printKata (kataNumber, object){
//     const detailsElement = document.createElement('details')
//     main.append(detailsElement)

//     const summaryElement = document.createElement('summary')
//     summaryElement.append("KATA " + kataNumber)
//     detailsElement.append(summaryElement)

//     const stringifiedObject = JSON.stringify(object)
//     detailsElement.append(stringifiedObject)
// }
//-------------

// Append the katas to this element:

// const greenEyes1 = users.filter(user => user.eyeColor === "green")
// // OR...
// // const greenEyes2 = users.filter(function (user) {
// //     return user.eyeColor === "green"
// // })
// console.log(greenEyes1)

// const greenEyes = users
//     .filter(user => user.eyeColor === 'green')
//     .map(user => user.name)
// printKata(0, greenEyes)



//Kata 1: filter(), isActive
const isActive1 = users.filter(user => user.isActive === true)
// printKata(1, isActive1)

main.append(isActive1)
const h1 = document.createElement("h1")
h1.append('Kata1: .filter')
main.append(h1)
main.append(JSON.stringify(isActive1))

//Kata 2: map(), email addresses
const email1 = users.filter(user => user.email)
main.append(email1)
const h1k2 = document.createElement("h1")
h1k2.append('Kata2: .map')
main.append(h1k2)
main.append(JSON.stringify(email1))

//Kata 3: some(), OVATION/company property
//comes back as TRUE
const ovationProperty = users.some(user => user.company === 'OVATION')
// .filter(user => user.tags.includes === 'fugiat')
main.append(ovationProperty)
const h1k3 = document.createElement("h1")
h1k3.append('Kata3: .some')
main.append(h1k3)
main.append(JSON.stringify(ovationProperty))

// //Kata 4: find(), first user with age of 38 in array.
const firstOver38 = users.find(user => user.age === 38)
main.append(firstOver38)
const h1k4 = document.createElement("h1")
h1k4.append('Kata4: .find')
main.append(h1k4)
main.append(JSON.stringify(firstOver38))

// //Kata 5: filter(), find(), isActive and over the age of 38.
const isActiveAgeOver38 = users
    .filter(user => user.isActive === true)
    .find(user => user.age > 38)
main.append(isActiveAgeOver38)
const h1k5 = document.createElement("h1")
h1k5.append('Kata5: .filter, .find')
main.append(h1k5)
main.append(JSON.stringify(isActiveAgeOver38))

// //Kata 6: filter(), map(), balance of every user from ZENCO company.
const balanceAtZenco = users
    .filter(user => user.balance)
    .map(user => user.company === 'ZENCO')
main.append(balanceAtZenco)
const h1k6 = document.createElement("h1")
h1k6.append('Kata6: .filter, .map')
main.append(h1k6)
main.append(JSON.stringify(balanceAtZenco))

// //Kata 7: filter(), includes(), show the age of every user with the 'fugiat' tag.
const ageWithFugiat = users.filter(user => user.age).includes(user => user.tags === 'fugiat')

    // .filter(user => user.tags === 'fugiat')
    // .includes(user => user.age)
main.append(ageWithFugiat)
const h1k7 = document.createElement("h1")
h1k7.append('Kata7: .filter, .includes')
main.append(h1k7)
main.append(JSON.stringify(ageWithFugiat))



