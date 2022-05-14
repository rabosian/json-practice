// JSON: JavaScript Object Notation

/* Serialize: Object to JSON string */
// JSON.stringify(object)
let myObj = {
    name: 'rabosian',
    age: '300',
    occupation: 'dev',
    color: 'very peri',
    birthDate: new Date(), // converted to Date() result
    say: () => {
        console.log(`my name is ${name}!`)
    } // function is not included to JSON string, not data of object
}

toJson = JSON.stringify(myObj)
console.log(toJson)

/* Replacer */ 
toJsonUsingReplacer = JSON.stringify(myObj, ["name",'occupation'])
console.log(toJsonUsingReplacer) // only "name" and "occupation" property is converted and returned to JSON 

toJsonReplacerUsingCallback = JSON.stringify(myObj, (key, value) => {
    console.log(`key: ${key}, value: ${value}`)
    return key === 'name' ? 'RBSA' : value // if key 'name' set value as a 'RBSA' else original value
})
console.log(toJsonReplacerUsingCallback)

/* Reviver */ 
console.log(myObj.birthDate.getDate())
// TypeError: toJson.birthDate is a string. cannot call method
console.log(toJson.birthDate.getDate())

let usingReviver = JSON.parse(toJson, (key, value) => {
    console.log(`key: ${key}, value: ${value}`)
    return key === 'birthDate' ? new Date(value) : value
})

// works
console.log(usingReviver.birthDate.getDate())



/* Deserialize: JSON string to Object */
// JSON.parse(JSON)
json = JSON.stringify(myObj)
newObj = JSON.parse(json)
console.log(newObj)

newObj.say() // ERROR. doesn't have say()
// myObj -> json (say() is not included in stringify process)
// json -> newObj >>> say() X





