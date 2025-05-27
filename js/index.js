//två backslash för kommentar som inte kommer tolkas av webbläsaren som kod

const myName = "Sebastian";     // String
let age = 25;                  // Number
let isStudent = true;           // Boolean (true or false)

console.log("Hej mitt namn är " + myName + " och jag är " + age + " år gammal och jag är student ");
console.log("Student: " + isStudent)

if (age > 18) {
    console.log("Adult student")
}
if (age < 18) {
    console.log("Under 18 student")
}
if (myName == "Sebastian" && age == 25) {
    console.log("Identity confirmed!")
}
if (isStudent == true && age > 17) {          // Två eller tre lika med tecken, inte ett
    console.log('Log in accepted!');
}
else {  // <-- Detta bildar ett uttryck som kan vara sant eller falskt            
    console.log('Log in denied, student is under 18 or not registered as a student.');   
}

// > större än, < mindre än, 

// == jämförelse, || eller, && och 

// Nu kan du ändra true or false på isStudent och den visar log in denied eller accepted i konsol.