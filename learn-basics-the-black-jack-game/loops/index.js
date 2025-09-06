// Count to ten!

// We need to specify...

// Where should we start counting?
// Where is the finish line?
// What's the step size we should use?

// //    START           FINISH       STEP SIZE
// for ( let count = 1;  count < 11;  count += 1 )  {
    
//     console.log(count)

// }
///////////////////////////////////////////////
// Challenge:
// Example: Create a for loop that counts from 0 to 5
// Use console.log to log out the numbers
// for (let i = 0; i < 6; i += 1) {
//     console.log(i)
// }

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

// for (let i = 10; i < 101; i += 10) {
//     console.log(i)
// }

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear",
    "🙌",
    "Thank you for the help!",
    "You're welcome!",
    "Talk to you later!",
    "Bye! 👋"
]

// DRY - Don't repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

// for (let i = 0; i < 6; i += 1) { // i = index
//     console.log(messages[i]) // Accessing the array with the index i
//     // (The variable i is commonly used in JavaScript examples.
//     // You can name the variable anything meaningful for your project.)
//     // Line 45 renders messages[0], messages[1], messages[2], ...
// }

// Instead of hardcoding the 6 in the for loop, we can use messages.length
// This way, if we add or remove messages from the array, the loop will still work correctly

for (let i = 0; i < messages.length; i += 1) { // i = index
    console.log(messages[i]) // Accessing the array with the index i
    // (The variable i is commonly used in JavaScript examples.
    // You can name the variable anything meaningful for your project.)
    // Line 45 renders messages[0], messages[1], messages[2], ...
}

