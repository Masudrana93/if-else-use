// ******Logical not(!) physically hot******

//example-1
let isLeader = true;

if(isLeader === true){
    console.log("Goverment money is my money.");
}

//write this code shortly

if(isLeader){
    console.log("Goverment money is my money.");
}

let isPassed = true;
if(!isPassed){
    console.log("ajke khawa bondho")
}

// ******Ternary Operator*****

// টার্নারি অপারেটর হলো তিনটি অংশ নিয়ে গঠিত একটা শর্টকাট, যা if-else স্টেটমেন্টের শর্টকাট বা এক লাইনে লেখার জন্য ব্যবহার করা হয়। এটিকে তিনটি অংশে ভাগ করা যায়:
// 1. Condition: শর্ত বা কন্ডিশন
// 2. True Expression: শর্তটি সত্য হলে যা হবে 
// 3. False Expression: শর্তটি মিথ্যা হলে যা হবে

//Example: using if-else

const age = 20;

if(age >= 18){
    console.log("Vote for the Muslim");
}else{
    console.log("You are not eligible to vote.");
}

// Using ternary operator

const agE = 20;

agE >= 18 ? console.log("Eligible to vote") : console.log("Not eligible");


