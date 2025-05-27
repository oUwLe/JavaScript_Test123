//två backslash för kommentar som inte kommer tolkas av webbläsaren som kod

let myName = "Sebastian";     // String
let age = 25;                  // Number
let isStudent = true;           // Boolean (true or false)

console.log("Hej " + myName + " jag är " + age + " år ");
console.log("Student: " + isStudent)

if (isStudent == true) {          // Två eller tre lika med tecken, inte ett
    console.log('Success!');
}

else {  // <-- Detta bildar ett uttryck som kan vara sant eller falskt            
    console.log('Failure!');   
}

// Nu kan du ändra true or false på isStudent och den printar antingen sucess or failure.