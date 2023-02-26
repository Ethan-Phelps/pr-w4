//Coding Steps:
//The answer to all questions must be printed to your Browser’s console -- using console.log():
//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//    Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//        Do not use numbers to reference the last element, find it programmatically, 
//        ages[7] – ages[0] is not allowed!
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length-1]-ages[0]);
//    Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(13);
console.log(ages[ages.length-1]-ages[0]);
//    Use a loop to iterate through the array and calculate the average age. 
let sumtotal = 0;
for(let i=0;i<ages.length;i++){sumtotal += ages[i];};
console.log(sumtotal/ages.length);
//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//    Use a loop to iterate through the array and calculate the average number of letters per name. 
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let sumtotalnames = 0;
for(let i=0;i<names.length;i++){sumtotalnames += names[i].length;};
console.log(sumtotalnames/names.length);
//    Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let totalnames = "";
for(let i=0;i<names.length;i++){totalnames += names[i] + " ";};
console.log(totalnames);
//3. How do you access the last element of any array?
//  The last can be accessed by using the index of the length of the array minus one.
//4. How do you access the first element of any array?
//  The first element is accessible by just using index 0.
//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//    For example:
//        let names = ["Kelly", "Sam", "Kate"]; 	//starting with this array
//        let nameLengths = [5, 3, 4]; 			    //create this new array
let nameLengths = [];
for(let i=0;i<names.length;i++){nameLengths[i] = names[i].length;};
console.log(nameLengths);
//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let sumlengths = 0;
for(let i=0;i<nameLengths.length;i++){sumlengths += nameLengths[i];};
console.log(sumlengths);
//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//      (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function multiply(word,n){let multiple="";for(let i=0;i<n;i++){multiple+=word;}return multiple;}
console.log(multiply("Hello",3));
//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. 
//      The full name should be the first and the last name separated by a space.
function fullName(firstName,lastName){return firstName+" "+lastName}
console.log(fullName("Ethan","Phelps"));
//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbers = [1,2,4,8,16,32,64];
function isSumGr100(numbers){let total=0;for(let i=0;i<numbers.length;i++){total+=numbers[i];}if(total>100){return true;}else{return false;}}
console.log(isSumGr100(numbers));
//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function sumAve(numbers){let total=0;for(let i=0;i<numbers.length;i++){total+=numbers[i];}return total/numbers.length;}
console.log(sumAve(numbers));
//11. Write a function that takes two arrays of numbers, 
//      and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let numbers2 = [100,20,8];
function isAve1Gr(numbers1,numbers2){
    let total1=0,total2=0;
    for(let i=0;i<numbers1.length;i++){total1+=numbers1[i];}
    for(let i=0;i<numbers2.length;i++){total2+=numbers2[i];}
    if(total1>total2){return true;}else{return false;}}
console.log(isAve1Gr(numbers,numbers2));
//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
//      and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = true; moneyInPocket =11;
function areFunds(isHotOutside,moneyInPocket){if(isHotOutside===true&&moneyInPocket>10.5){return true;}else{return false;}}
console.log(areFunds(isHotOutside,moneyInPocket));
//13. Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.
function isPrime(n){for(let i=2;i<n/2;i++){if(n%i===0){return false;}}return true;}
console.log(isPrime(853)); //this returns of a true if the number inputted is prime and a false if it is not. I chose to make this because I like math.