// Question-1:  Create a function to perform a deep clone of an object, handling nested objects and arrays.

// Question-2:  Write a function that takes two objects and returns an object containing the common key-value pairs.

// const obj1 = {
//     "name" : "Archana",
//     "age" : 22,
//     "place" : "Aurangabad"
// };
// const obj2 = {
//     "name" : "Shrawani",
//     "age" : 18,
//     "place" : "Aurangabad"
// };
// const obj3 = {};
// const myfunc = (obj1, obj2) => {
//     for (let o in obj1) {
//         if (o in obj2 && obj1[o] === obj2[o]) {
//             obj3[o] = obj1[o];
//         }
//     }
//     return obj3;
// }

// console.log(myfunc(obj1, obj2));

// --------------------------------------------------------------------------------------------------

// Question-3:  Create a function that transforms an object by renaming its keys based on a provided mapping. The function should handle nested objects. For example:
// input: { firstName: 'John', address: { city: 'New York' } }
// mapping: { firstName: 'name', address: { city: 'location.city' } }
// output: { name: 'John', location: { city: 'New York' } }


// --------------------------------------------------------------------------------------------------

// Question-4:  Write a function that validates an object against a provided schema. The schema should define the expected structure, data types, and optional/required fields. For example:
// object: { name: 'John', age: 25, email: 'john@example.com' }
// schema: { name: 'string', age: 'number', email: 'string', address: 'string?' }
// valid output: true

// object = { name: 'John', age: 25, email: 'john@example.com' };
// schema = { name: 'string', age: 'number', email: 'string', address: 'string' };

// const myfun= (object, schema) => {
//     for(let key in object){
//         if(key in schema){
//             if(key === 'age'){
//                 if(typeof object[key] !== 'number')return false;
//             }
//             if(typeof schema[key] !== typeof object[key]) return false;
//         }
//         // else return false;
//     }
//     return true;
// }
// console.log(myfun(object, schema));

// --------------------------------------------------------------------------------------------------

// Question-5:  Create a function that merges two objects. If there are conflicts in values, allow for custom logic to determine the merged result. For example:
// object1: { a: 1, b: 2 }
// object2: { b: 3, c: 4 }
// customMerge: (key, val1, val2) => key === 'b' ? val1 * val2 : val2
// output: { a: 1, b: 6, c: 4 }


// sync and async

function sum(){
    let a = 0;
    for(let i=0; i<100; i++){
        a += i;
    }
    console.log(a);
}
setTimeout(sum(), 5000);
console.log("Hello World");