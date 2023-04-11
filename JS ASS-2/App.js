
//Question-1
function createClosure(num) {
    return function (n) { //Function
        return n + num;
    }
}
const add5 = createClosure(5);
//Examples
console.log(add5(5));  // Output: 10
console.log(add5(10)); // Output: 15
console.log(add5(15)); // Output: 20
console.log(add5(20)); // Output: 25


  //Question-2
  // function search(array1, value) {
//     if (array1.length === 0) {
//       return false; // Base case: value not found
//     } else if (array1[0] === value) {
//       return true; // Base case: value found
//     } else {
//       return search(array1.slice(1), value); // Recursive case: continue searching
//     }
//   }
//   // Examples
//   const myArray = [2, 4, 6, 8, 10, 12, 14];
//   console.log(search(myArray, 1)); // Output: False
//   console.log(search(myArray, 12)); // Output: True
//   console.log(search(myArray, 3)); // Output: False
//   console.log(search(myArray, 6)); // Output: True


 //Question-3
 // function addParagraph(text) {
//   const newParagraph = document.createElement("p");
//   newParagraph.textContent = text;
//   document.body.appendChild(newParagraph);
// }
// // Example:
// addParagraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque placerat ac nisl ac feugiat. Sed eu accumsan mauris.");



 //Question-4
 // const myPara = (messages) => {
//     const addNewPara = document.createElement("p");
//     addNewPara.textContent = messages;
//     document.body.appendChild(addNewPara);
//   };
//   myPara(
//     "Lorem Ipsum is dommmmmm simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//   );


 //Question-5
 // // //Code-1 
// // function changeBgColor(element, color) {
// //     if (element != null) {
// //         element.style.backgroundColor = color;
// //     }
// // }
// // // Example:
// // const myElement = document.getElementById("my-element");
// // changeBgColor(myElement, "aqua");

// //Code-2
// function changeBgColor(element, newColor) {
//     element.style.backgroundColor = newColor;
// }

// // Example:
// const myElement = document.getElementById("my-element");
// changeBgColor(myElement, "red");


 //Question-6
 // function saveObjectToLocalStorage(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
// }
// // Example:
// const myObj = { name: "Muneeba", age: 24 };
// saveObjectToLocalStorage("my-object", myObj);
// //Eg-2
// const myObj1 = { name: "Rashid", age: 50 };
// saveObjectToLocalStorage("my-object", myObj1);


 //Question-7
 // function getObjectFromLocalStorage(key) {
//     const objString = localStorage.getItem(key);
//     if (objString === null) {
//         return null;
//     }
//     return JSON.parse(objString);
// }


 //Question-8
 // function saveObjectToLocalStorage(obj) {
//     // Iterate over the properties of the object
//     for (let prop in obj) {
//         // Use the property name as the key and the property value as the value
//         localStorage.setItem(prop, obj[prop]);
//     }
//     // Retrieve the object from localStorage
//     let newObj = {};
//     for (let prop in obj) {
//         newObj[prop] = localStorage.getItem(prop);
//     }
//     // Return the new object
//     return newObj;
// }
// //Example:
// let myObj = { name: "Muneeba", age: 24, city: "Karachi" };
// let storedObj = saveObjectToLocalStorage(myObj);
// console.log(storedObj); // { name: "Muneeba", age: "24", city: "Karachi" }
// //Example-2:
// let myObj1 = { name: "M.Rashid", age: 50, city: "Karachi" };
// let storedObj1 = saveObjectToLocalStorage(myObj1);
// console.log(storedObj1); // { name: "M.Rashid", age: "50", city: "Karachi" }