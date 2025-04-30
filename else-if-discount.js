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

const accountBalance = 1200;

if(accountBalance < 1000){
    console.log("please deposit money");
}else if(accountBalance > 1000){
    console.log("enjoy bindas life");
}else if(accountBalance > 5000){
    console.log("you are rich, marry me");
}