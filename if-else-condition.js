// ******Condition - no confusion******

// Practice:

// 1. তোর আম্মু বলছে, 6 টার আগে বাসায় ফিরলে তোকে নাস্তা খাওয়াবে। আর দেরি করলে ঝাড়ুর বাড়ি দিবে। এই শর্তের জন্য কোড কর।

const reachTime = 5;
if (reachTime < 6){
    console.log("Mother will give snacks");
} else{
    console.log("you will be beaten by mop");
}

//2. একটা মোবাইল অ্যাপে যদি লগইন সফল হয়, তাহলে “Welcome!” দেখাবে। যদি ব্যর্থ হয়, “Get Lost!” দেখাবে। এই শর্তের জন্য প্রোগ্রাম লিখ।

const loginSuccess = true;

if (loginSuccess == true){
    console.log("Welcome!");
} else {
    console.log('Get Lost!');

}
//3.  তুই যদি 5 কি.মি. দৌড়াস, তাহলে তোকে চকলেট খেতে দিবে। যদি না দৌড়াস, তাহলে তোর মোটা ভুড়ি হবে। এই শর্তের জন্য প্রোগ্রাম লিখ।

const youRun = 5;
if (youRun === 5){
    console.log("you have got a chocolate");
} else {
    console.log("you will be obese");
}

//4. ধর, তোর বাবা বলেছে, যদি তুই পরীক্ষায় 80-এর বেশি পেয়ে পাস করিস, তাহলে তোকে বাইক কিনে দিবে। কিন্তু যদি কম হয়, তাহলে বাইক দিবে না। একটা প্রোগ্রাম লিখে দেখ,তুই বাইক পাবি কি না, যদি তোর নাম্বার 85 হয়।

const yourExamMarks = 85;
if(yourExamMarks > 80){
    console.log("You will get a bike");
} else {
    console.log("You will not get");
}

//5. যদি মোভির শো রাত 9টার আগে হয়, তাহলে তুই মুভি দেখবি। যদি পরে হয়, তাহলে বাসায় গিয়ে নাকে তেল দিয়ে ঘুমাবি। এর জন্য প্রোগ্রাম লিখ।

const movieShowTime = 8;

if (movieShowTime < 9 ){
    console.log("You will watch the movie");
} else{
    console.log("You will sleep at home");
}

// 6. তাপমাত্রা 30 ডিগ্রি বা তার বেশি হয়, তাহলে এয়ার কন্ডিশনার চালাবি। আর কম হলে কম্বল মুড়ি দিয়ে ঘুমাবি। এর জন্য কোড লিখ।

const roomTemp = 29;
if (roomTemp >= 30){
    console.log("AC will be ON");
} else{
    console.log("Please Use blanket");
}



