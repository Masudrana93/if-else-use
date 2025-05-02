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