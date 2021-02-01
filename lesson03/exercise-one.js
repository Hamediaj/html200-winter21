// Create an array, with at least 5 strings
// Add an element to the end of the array
// Remove the third element
// Create a string from the elements and comma separate them

let arr = ['croissants', 'danishes', 'macarons', 'pies', 'cupcakes'];

arr.push('tarts');
console.log(arr);

arr.splice(2,1);
console.log(arr);

let str = arr.join(',');
console.log(str);
