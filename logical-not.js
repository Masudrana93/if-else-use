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

// Practice:

// 1. তুই নিজের দোকান খুলছিস। তোর দোকানে কেউ 3000 টাকার বেশি কেনাকাটা করলে ক্যাশব্যাক 500 টাকা। আর তার কম কেনাকাটা করলে ক্যাশব্যাক 0 টাকা। এখন এই জিনিসটা এক লাইনে লিখ। ভেরিয়েবলের নাম হবে cashback , আর মান সেট করবি টার্নারি অপারেটর ইউজ করে।

const cashback = 3000;

cashback > 3000 ? console.log("500 Tk.") : console.log("0 Tk.");

//2. তোর বয়স যদি 15-এর বেশি হয়, তাহলে “Teenager” দেখাবে। আর যদি কম হয়, তাহলে “Child” দেখাবে। এটা টার্নারি অপারেটর দিয়ে এক লাইনে লিখ।

const yourAge = 14;

yourAge >= 15 ? console.log("Teenager") : console.log("Child");

//3. যদি isLoggedIn-এর মান true হয়, তাহলে “Welcome back”-কে  message হিসেবে সেট করবি। আর যদি false হয়, তাহলে "Please login"-কে message হিসেবে সেট করবি। এই জিনিসটা টার্নারি অপারেটর দিয়ে এক লাইনে লিখ।

const isLoggedIn = true;

isLoggedIn === true ? console.log("Welcome back") : console.log("Please login");

//4. তোর গাড়ির তেলের ট্যাংক যদি full হয়, তাহলে "Ready for a log drive" দেখাবি। আর না হলে "Fill the tank" দেখাবি।

const tankFull = false;

tankFull === true ? console.log("Ready for a long drive") : console.log("Fill the tank");

//5. তুই যদি পরীক্ষায় পাস করিস, তাহলে "Party time"  দেখাবি। আর যদি ফেল করিস, তাহলে "Next semester e serious study korbo" দেখাবি । এক লাইনে টার্নারি অপারেটর দিয়ে কর।

const examPassed = true;

examPassed === true ? console.log("Party time") : console.log("Next semester e serious study korbo") ;

//6. যদি suuny  ভেরিয়েবলের মান false হয়, তাহলে  "Stay home-কে কনসোল লগ করবি।  

const sunny = false ;

if(!sunny){
    console.log("Stay home");
}

//7. যদি Expensive ভেরিয়েবলের মান false হয়, তাহলে কনসোল লগ করবি "I will buy this item." 

const expensive = false;

if(!expensive){
    console.log("I will buy this item.");
}