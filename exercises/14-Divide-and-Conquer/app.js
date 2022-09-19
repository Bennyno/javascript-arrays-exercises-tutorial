let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

//your code here
let odd = [];
let even = [];
 function mergeTwoLists(odd, even){
     for(i=0; i <= list_of_numbers.length; i ++){
     if (i % 2 !== 0){
          odd.push(i);
     } else{
          even.push(i);
     }
     return mergeTwoLists;
    }

console.log(mergeTwoList(list_of_numbers);
