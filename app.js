// Chapter No 21 t0 25;
// Question No 01;
// var firstName = "Hasnain";
// var lastName = "Qari";
// console.log(firstName + lastName);

// Question No 02;
// var universityName = "University Of Karachi";
// for(var i = 0; i <= 20; i++){
//     console.log(universityName[i]);
// }

// Question No 03;
// var text = "The quick brown fox jumps over the lazy dog".toLowerCase();
// var move = text.split("the").join("hasnain");
// console.log(move);

// Question No 04;
// var countryName = "Pakistani";
// console.log(countryName.indexOf("n"));

// Question No 05;
// var word = "Hello World";
// console.log(word.lastIndexOf("l"));

// Question No 06;
// var myCountryName = "Pakistani";
// console.log(myCountryName.indexOf("i"));

// Question No 07;
// var city = "Islamabad".toLowerCase();
// var city1 = city.split("islam").join("Hyder");
// console.log(city1);

// Question No 08;
// var ali = "Ali and sara are best friends.They play cricket and football together.".toLowerCase();
// var sara = ali.split("and").join("&");
// console.log(sara);

// Question No 09;
// var number = "472"
// console.log(Number(number));

// Question No 11;
// var num = 35.54;
// var str = num.replace("35.54","3554");
// console.log("Number: " +num);
// console.log("Number: " +str);

// Question No 12;
// var bakery = ["Apple","Banana","Cake","Pastry","Pineapple","Grapes"];

// var bak = prompt("Welcome to QARI BAKERY\nWhat do you want to order?");

// var match = "NO";

// for(var i = 0; i < bakery.length; i++){
//     if(bakery[i] === bak){
//         match = "YES"
//         alert ("Congratulation " + bakery[i]+" is Availabe");
//         break
//     }
// }

// if(match === "NO"){
//     alert("We are sorry this item is not available in our Bakery.")
// };

// Question No 13;
// var myCityName = prompt("Enter a city name?");
// console.log(myCityName.lastIndexOf());

// Question No 15;
// var phoneList = ["Samsung","Motrola","Vivo","Infinix","Oppo","Techno","iPhone",];

// var userNamePhone = prompt("Enter Your Favorite Phone Name");

// var correct = "No";

// for(var i = 0; i < phoneList.length; i++){
//     if(phoneList[i] === userNamePhone){
//         correct = "Yes";
//         alert("My Favorite Phone is " +  phoneList[i]  + " & this Lenght is " + phoneList.length);
//     }
// }
// if(correct === "No"){
//     alert("Oops! This is not your Favorite Phone");
// }

// Question No 14;
// var userInputPassword = prompt("Enter Your Password");
// var passwordCapital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var passwordSmall = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var passwordNumber = ["0","1","2","3","4","5","6","7","8","9"]; 

// var isNumber = false;
// var isAlpha = false;
// var isInvalid = false;

// if (passwordNumber.indexOf(userInputPassword[0]) !== -1) {
//     alert("Number is not allowed on index 0");
// }
// else if(userInputPassword.length < 6){
//     alert("Password should be at leasat 6");
// }
//  else {
//   for(var i = 0; i < userInputPassword.length; i++){
//       if(passwordCapital.indexOf(userInputPassword[i]) !== -1){
//         isAlpha = true
//       }else if(passwordSmall.indexOf(userInputPassword[i]) !== -1){
//         isAlpha = true
//       }else if(passwordNumber.indexOf(userInputPassword[i]) !== -1){
//         isNumber = true
//       }else{
//         isInvalid = true
//       }
//   }
//   if(isAlpha && isNumber && !isInvalid){
//     alert("Correct password");
//   }else{
//     alert("Password is Wrong / Special charactors are not allowed");
//   }
// }
