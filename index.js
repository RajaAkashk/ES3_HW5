// resturcturing

// function to rename parameters of an object usig restrcturing

const printPersonDetails = ({name:personName, age:personAge}) => {
  console.log(`Person : ${personName}, Age : ${personAge}`)
}
printPersonDetails({name:"Alice",age:25})

// function to rename pramaeter in an array

const printFruits = ([fruitName, fruitColor]) => {
  console.log(`Fruit: ${fruitName} is ${fruitColor} in color.`)
}
  printFruits(["Apple","Red"])

// function to print book details using restructuring

const printBookInfo = ({title:bookTitle, author: {name:authorName, nationality}}) => {
  console.log(`Book: ${bookTitle}, Author: ${authorName}, Nationality: ${nationality}`)
}
printBookInfo({title: "JavaScript Basics", author:{name:"John Doe", nationality:"American"}})


const displayPerson = ({name: PersonName = "Bob", age:personAge = 28 }) => {
  console.log(`Person Name: ${PersonName}, Age: ${personAge} `)
}
displayPerson({})
