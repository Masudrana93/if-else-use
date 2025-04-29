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



 // --------for Double condition { && and ||(or)} --------

//  Practice:

//1. একটা প্রোগ্রাম লিখ। যেটা চেক করবে, বয়স 18-এর বেশি কি না এবং উচ্চতা 60 ইঞ্চির বেশি কি না। তাহলে সে গাড়ি ঠেলবে, না হয় সে গাড়িতে বসে থাকবে।


const age = 19;
const height = 70;

if(age > 18 && height > 60){
    console.log("He will push the car");
} else{
    console.log("He will seat down on the car");

}

//2. একটা প্রোগ্রাম লিখ। যা চেক করবে, একজন শিক্ষার্থী ভর্তি হওয়ার যোগ্য কিনা। গণিত স্কোর 80-এর বেশি অথবা ইংরেজি স্কোর 85 -এর বেশি হতে হবে। আর এইগুলোর কোনোটাই সত্যি না হলে বলবি- তোকে বিয়ে দিয়ে দিব।

const mathScore = 75;
const englishScore = 86;

if (mathScore > 80 || englishScore > 85){
    console.log("You are eligible")
}
   
else{
    console.log("You will be married off");
}

//3. একজন স্টুডেন্টের  GPA যদি 5 হয় এবং পরিবারের মাসিক আয় 10000-এর কম হয়, তাহলে সে স্কলারশিপ পাবে। না হয় তাকে বেতন দিয়ে পড়তে হবে।

const gpa = 4;
const fMonthlyIncome = 9000;

if(gpa == 5 && fMonthlyIncome < 10000){
    console.log("He will get scholarship");
} else {
    console.log("You have to pay the tution fees");
}

//4. একজন চাকরিপ্রার্থী পরীক্ষা দিতে পারবে, যদি তার বয়স 30-এর কম হয় এবং কাজের অভিজ্ঞতা 2 বছরের বেশি হয়। আর না হয় চাকরির পরীক্ষা দিতে পারবে না।

const candidateAge = 29;
const jobExpe = 3;

if(candidateAge < 30 && jobExpe > 2){
    console.log("You are eligible to seat for exam");
} else{
    console.log("You are not eligible");
}

//5. তোর ফ্রিজের ভিতর ডিমের সংখ্যা 12-এর বেশি অথবা মুরগি না থাকে, তাহলে তুই ডিমের কোরমা রান্না করবি। আর না হলে পাউরুটি আর কলা খাবি।

const eggQty = 10;
const chicken = 1;

if(eggQty > 12 || chicken == 0){
    console.log("Please cook egg curry");
} 
else{ 
    console.log("will take bread and banana");

}

//6. একজন মানুষের শরীরের তাপমাত্রা 100 ডিগ্রির বেশি অথবা কাশি থাকে,তাহলে সে ডাক্তারের কাছে যাবে। নচেৎ সে কাথা মুড়ি দিয়ে শুয়ে থাকবে। এর একটা প্রোগ্রাম লিখ।

const temp = 99;
const cough = false;

if(temp > 100 || cough == true){
    console.log("He will go to doctor");
}else{
    console.log("he will lay with blanket");
}

//7. একজন শিক্ষার্থীকে পরীক্ষা দিতে দেওয়া হবে, যদি তার উপস্থিতি 80 শতাংশের বেশি হয় এবং হোমওয়ার্ক জমা দেয়া থাকে । নচেৎ অটো ফেল। এই শর্তের জন্য প্রোগাম লিখ।

const attendance = 81;
const homework = false;

if(attendance > 80 && homework == true){
    console.log("Participant will be allowed");
}else{
    console.log("Auto fail");
}

//8. যদি তোর বাসায় বিদ্যুৎ চলে যায় এবং মোবাইলে চার্জ না থাকে, তাহলে তুই পড়তে বসবি। না হলে ভিডিও গেম খেলবি। এর জন্য কোড লিখ।

const electricityGone = true;
const mobileChargeZero = true;

if( electricityGone == true && mobileChargeZero == true ){
    console.log("You will sit to study");
}else{
    console.log("You will play a video game");
}

//9. শার্টের দাম 1000 টাকার বেশি হলে এবং কুপন থাকলে তোকে 20 পারসেন্ট ডিসকাউন্ট দেয়া হবে । এর জন্য প্রোগ্রাম লিখ।

const shirtPrice  = 1050;
const coupon = true;

if( shirtPrice > 1000 && coupon == true){
    console.log("You will get 20% discoount");
}else{
    console.log("You are not eligible for getting discount");
}