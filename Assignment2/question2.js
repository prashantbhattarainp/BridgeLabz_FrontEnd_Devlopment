// Q2. String Manipulation Report

let productName = " wireless headphones PRO ";


let trimmed = productName.trim().toLowerCase();


let formatted = trimmed
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

let finalTitle = formatted.replace("Pro", "Pro Edition");

console.log("Cleaned Title:", finalTitle);
console.log("Length:", finalTitle.length);