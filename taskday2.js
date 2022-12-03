
//task 1
// var arr=[1,2,3];

// function sum(arr)
// {
//     var sum=0;
//     for(var i=0;i<arr.length;i++)
//     {
//         sum+=arr[i];
//     }
//     return sum;
// }
// console.log(sum(arr));


//task 2
//  var number = 123;
//     function revers(number) {
//         var revnum = 0;
//         while(number > 0)
//         {
//             revnum = revnum * 10 + number % 10;
//             number = Math.trunc(number / 10);
//         }
//         return revnum;
//     }
//     console.log(revers(number));



///task3
// function reverseNum(n) {
//     var num = n.toString().split('').reverse().join('');
//     return Math.sign(n) * parseInt(num);
//   }

//   var number = prompt("enter a number to check if the number is palindrome : ");
//   if(number == reverseNum(number)){
//     console.log("yes");
//   }
//   else{
//       console.log("no");
//   }




// task4
//      var array=[1, 3, 0, 4, 5];  
//  var number =parseInt(prompt(" enter number of this[1 , 3 , 0 , 4 ,5] ")) ;
//  console.log(typeof(number));

//   if(array.indexOf(number) !== -1)  
//   {  
//           console.log("Yes ")  
//           console.log(array.indexOf(number));
//   }   
//   else  
//   {  
//     console.log("-1,there isn’t exists")  ;
//   }  


//task5
// var arr = [];
// var index = 2;
// var Array = [1, 2, 3, 4, 5];
// Array.splice(index, 1);
// console.log(Array);


//task 6
// var text = prompt(" enter text ");
// var data = text.split("");
// var arr = [text.charAt(0),text.charAt(1),text.charAt(text.length-3),text.charAt(text.length-2)];
// console.log(arr.join(""));



//task 7
var text = prompt(" enter the text ");
     var data = text.split("");
     var count_z = 0;
     var count_o = 0;
     for(var i =0 ; i <data.length ; i++){
        if (data[i]=='z'){
            count_z++;
        }
        if(data[i]=='o'){
            count_o++;
        }
     }
     if(count_o==count_z*2){
    console.log("yes");
     }
     else{
       console.log("no");
     }
