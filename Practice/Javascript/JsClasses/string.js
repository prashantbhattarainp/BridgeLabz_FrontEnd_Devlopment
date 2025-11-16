//String = > Primitive Data Type, Object Data Type
//String is immutable

let a = "Hii"; //1st Way
let b = "Hii"; //2nd Way
let c = "Hii"; //3rd Way

let g = new String("Hello"); //Another Way
console.log(g);

let d = a + " " + b; //1st Way
console.log(d);

let e = a.concat(b); //2nd Way
console.log(e)

let f = `Hii${b}`; //3rd Way
console.log(f)


//Inbuilt methods 

// 1.length
console.log(b.length);
console.log("Ayush".length);

//toUpperCase
console.log(b.toUpperCase());

//toLowerCase
console.log(b.toLowerCase());

//trim
console.log(b.trim());

//includes
console.log("Hello".includes('He'));

//lastIndexOf
console.log("Hello".lastIndexOf('l'));

//Slice
console.log("Hello".slice(1,4)); // output:- ell(exclude last index), slice can take negative index.

//substring
console.log("Hello".substring(1,4)); //output:- ell, take only positive index.

//split
console.log("H e l l o".split(' '));