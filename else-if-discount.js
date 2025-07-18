// ******Dicount Kheko if-else******

//example-1
const price = 6500;

if(price >= 5000){
    const discount = price / 100 * 10;
    const pay = price - discount;
    console.log(pay);
}else{
    console.log(price);
}

//example-2 with another extra condition 
// 5000 টাকার বেশি কেউ কিনলে তাকে তো 10% ডিসকাউন্ট দিবে । আর কেউ যদি 5000 টাকার কম, 2500 টাকার বেশি জিনিস কিনে, তাহলে ৫% ডিসকাউন্ট দিবে । এইটার জন্য কোড লিখ।

const salePrice = 2000;

if(salePrice >= 5000){
    const discount2 = salePrice / 100 * 10;
    const payTwo = salePrice - discount2;
    console.log(payTwo);

}else if(salePrice >= 2500) {
    const discount3 = salePrice / 100 * 5;
    const pay3 = salePrice - discount3;
    console.log(pay3);
}else{
    console.log(salePrice);
}


// Practice:

// 1. তুই নিজের দোকান খুলছিস। তোর দোকানে কেউ ৩০০০ টাকার বেশি কেনাকাটা করলে ৫% ডিসকাউন্ট, আর ৬০০০ টাকার বেশি কেনাকাটা করলে ১৫% ডিসকাউন্ট দিবি। যদি এক বন্ধু এসে ৪৫০০ টাকার জিনিস কিনে, তবে তাকে কত টাকা দিতে হবে?

const buy = 4000;

if(buy > 6000){
    const discount4 = buy / 100 * 15;
    const pay4 = buy - discount4;
    console.log(pay4);
}else if( buy > 3000){
    const discount5 = buy / 100 * 5;
    const pay5 = buy - discount5;
    console.log(pay5);
}else{
    console.log(buy);
}

//2. তুই একটা রেস্টুরেন্ট চালাচ্ছস, যেখানে ১২ বছরের নিচে বাচ্চাদের ফ্রি খাওয়ানো হয় এবং ৬০ বছরের ওপরের মানুষকে ৫০% ডিসকাউন্ট দেওয়া হয়, বাকিদের পুরা টাকা দিতে হয়।

const customerAge = 60;


if(customerAge < 12){
    console.log("they will get free meal");
}else if(customerAge > 60){
    console.log("They will get 50% discount");
}else{
    console.log("You will have to pay full amount of bill");
}

//3. যদি কারো ব্যাংক অ্যাকাউন্টে ব্যালেন্স ১০০০ টাকার কম হয়, তাহলে বলবি, “ডিপোজিট কর”। ১০০০ থেকে বেশি হলে বলবি, “ বিন্দাস লাইফ এনজয় কর”। আর ৫০০০ এর বেশি হলে বলবি,“তুই ধনী, আমাকে বিয়ে কর।”

const accountBalance = 5200;

if(accountBalance > 5000){
    console.log("you are rich, marry me");
    
}else if(accountBalance > 1000){
    console.log("enjoy bindas life");
}else if(accountBalance < 1000){
    console.log("please deposit money");
}

// 4. একটা পরীক্ষায় যদি কোনো ছাত্রের মার্কস ৫০ এর কম হলে বলবি “Fail”, ৫০ থেকে ৮০ এর মধ্যে হলে বলবি “Pass”, আর ৮০ এর বেশি হলে বলবি “A+”।

const marks = 81;

if(marks > 80){
    console.log("A+");
}else if(marks >= 50){
    console.log("Pass");
}else if(marks < 50){
    console.log("Fail");
}

//5. কোনো বইয়ের পৃষ্ঠাসংখ্যা 100 এর কম হলে বলবি “Small Book”, 100 থেকে 500 এর মধ্যে হলে বলবি “Mid-size Book” , আর 500 এর বেশি হলে বলবি “Heart-attack size book” ।

const bookPages = 200;

if(bookPages > 500){
    console.log("Heart-attck size book");
}else if(bookPages >= 100){
    console.log("Mid-size book");
}else if( bookPages < 100){
    console.log("Small book");
}

//6. একটা প্রোগ্রাম লিখ । যা চেক করবে, তাপমাত্রা 0 ডিগ্রির কম হলে বলবে “Ice”, 0 থেকে 20 এর মধ্যে হলে বলবে “Cool Cool” , আর 20 এর বেশি হলে বলবে “Hot Hot”।

const tempareture = 2;

if(tempareture > 20){
    console.log("Hot Hot");
}else if(tempareture >= 0){
    console.log("Cool Cool");
}else if(tempareture < 0){
    console.log("Ice");
}

//7. তোর একটা গেমিং অ্যাপ আছে। প্লেয়ারের লেভেল 10 এর কম হলে বলবি “Novice”, 10 থেকে 50 এর মধ্যে হলে বলবি “Expert”, আর 50 এর বেশি হলে বলবি “Pro Gamer”।

const level = 9;

if(level > 50){
    console.log("Pro Gamer");
}else if(level >= 10){
    console.log("Expert");
}else if(level < 10){
    console.log("Novice");
}

//*******Nested If-else : এক শর্ত পার হওয়ার পর সেই শর্তের ভিতরে আরেকটা শর্ত। ***********


//Example -1

const money = 400;
const popCornPrice = 60;

if(money >= 300){
    console.log("Going to watch a movie");

    if(popCornPrice <= 50){
        console.log("Buying PopCorn");
    }else{
        console.log("PopCorn is Expensive")
    }
}else{
    console.log("Home Alone.");
}

//Practice

//1. বন্ধু যদি দাওয়াত দেয়, তাহলে তার জন্মদিনের পার্টিতে তুই যাবি। আর যদি তোকে দাওয়াত না দেয়, তাহলে তাকে ফ্রেন্ডলিস্ট থেকে বের করে দিবি। আর যদি বন্ধু দাওয়াত দিয়ে ফেলে, তাহলে দাওয়াতে যাওয়ার সময় চেক করে দেখবি, পকেটে কত টাকা আছে। যদি 1000 টাকার বেশি থাকে, তাহলে বন্ধুর জন্য একটা গিফট নিয়ে যাবি। না হয় খালি হাতে যাবি।

const friendInvite = true;
const pocketMoney = 12000;

if(friendInvite == true){
    console.log("will join his birthday party");
    if(pocketMoney > 1000){
        console.log("will go with gift");
    }else{
        console.log("go with empty hand");
    }
}else{
    console.log("Delete from friendlist");
}

//2. যদি তোর বাসায় মেহমান আসে, প্রথমে জিজ্ঞেস করবি, তারা চা খাবে কি না। যদি চা খেতে চায়,তাহলে জিজ্ঞেস করবি, সাথে বিস্কুট খাবে কি না। না চাইলে বলবি, শুধু চা রেডি। আর যদি চা-ও না খেতে চায়, বলবি, বসে বসে স্টার জলসা দেখুন।

const teaTake = true;
const biscuitTake = false;

if(teaTake == true){
    if(biscuitTake == false){
        console.log("Only tea is ready for you");
    }
}else{
    console.log("Please have a seat and watch Star Jalsha");
}

//3. তুই একটা অ্যাপ বানিয়েছিস। প্রথমে চেক করবি, ব্যবহারকারীর অ্যাকাউন্ট অ্যাকটিভ কি না । যদি অ্যাকটিভ হয়, তার সাবস্ক্রিপশন চেক করবি। যদি প্রিমিয়াম হয়, তাকে প্রিমিয়াম ফিচার দেখাবি। না হলে বলবি, ‘ফ্রি ভার্সন দেখুন।’

const userAccountActive = true;
const premium = false;

if(userAccountActive === true){
    if(premium === true){
        console.log("see the premium feature");
    
    }else{
        console.log("Please see the free version");
    }
}

//4.তোর বাসার ফ্রিজে খাবার আছে কি না, চেক করবি। যদি থাকে, খাবার গরম করবি। আর যদি না থাকে, চেক করবি, ফুড ডেলিভারি অ্যাপ কাজ করছে কি না। কাজ করলে অর্ডার করবি, না হলে বলবি, ‘আজকে আমি রোজা।’

const foodAtHome = false;
const appFoodWork = true;

if(foodAtHome === true){
    console.log("Heat the food");
}else{
    
   if(appFoodWork === true){
     console.log("order the food");
   }else{
    console.log("I am fasting");
   }
}

//5. ধর, তুই একটা পার্টি করবি। প্রথমে দেখবি, পার্টিতে 100 জনের বেশি গেস্ট আসবে কি না । তাহলে চেক করবি, সবাই গিফট আনবে কি না। যদি আনে, বলবি, ‘Lets party all night.’ নচেৎ বলবি, ‘I will party with myself.’

const partyAttendance = 120;
const allBringGift = false;

if(partyAttendance > 100){
 if(allBringGift === true){
    console.log("Lets party all night.");
 }else{
    console.log("I will party with myself.");
 }
}