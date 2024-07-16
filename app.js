//1
const createObjectWithDynamicField = (key,value) => ({[key]:value})
console.log(createObjectWithDynamicField("name", "Alice"));
console.log(createObjectWithDynamicField("age", 25));

//2
const addObjectField = (obj,key,val) => ({...obj,[key]:val})
console.log(addObjectField({ name: "Bob", age: 30 }, "city", "New York"));
console.log(addObjectField({ fruit: "apple", color: "red" }, "quantity", 3));

//3
const addObjField = (obj,key,val) => ({...obj, [key]:val})
console.log(addObjField({ productName: "Side Table", color: "Walnut Brown" }, "inStock", true));
console.log(addObjField({ productName: "Dining Table", color: "White" }, "inStock", false));

//4
const updateObjectField = (obj,key,val) => ({...obj,[key]:val})
console.log(updateObjectField({ name: "Charlie", age: 28 }, "age", 29));
console.log(updateObjectField({ city: "Paris", country: "France" }, "country", "Spain"));

//5
const updateProductObject = (obj,key,val) => ({...obj,[key]:val})
console.log(updateProductObject({ productName: "Side Table", inStock: true}, "inStock", false));
console.log(updateProductObject({ productName: "Dining Table", color: "White", inStock: false}, "inStock", true));

//6
const generateObject = (...args) => {
  const newObj = {}
  for(let i=0; i<args.length; i+=2){
    newObj[args[i]] = args[i+1];
  }
  return newObj
}
console.log(generateObject("animal", "Dog", "sound", "Bark"));
console.log(generateObject("fruit", "Banana", "color", "Yellow"));

//7
const generateObj = (...args) =>{
  const obj = {}
  for(let i=0; i<args.length; i+=2){
    obj[args[i]] = args[i+1]
  }
  return obj
}
console.log(generateObj("mealType", "Lunch", "meal", "Rice-Dal", "calorie", "200 Cal"));
console.log(generateObj("mealType", "Dinner", "meal", "Chapati-Dal", "calorie", "180 Cal"));

//8
const createNewObjectWithDynamicField = (...args) =>{
  const obj = {}
  for(let i=0; i<args.length; i+=2){
    obj[args[i]] = args[i+1]
  }
  return obj
}
console.log(createNewObjectWithDynamicField("name", "Maze", "favColor", "Pink", "isMarried", false));
console.log(createNewObjectWithDynamicField("age", 35, "hobby", "Cooking", "isMarried", true));
