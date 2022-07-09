// Sum of two arrays

function Sum(arr) {  
    sum = 0; 
    for (let i = 0; i < arr.length; i++)  
        sum += arr[i];  

    return sum;  
}  

let arr_1= [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
console.log("Final_Sum: " + (Sum(arr_1)+Sum(arr_2)));


// Printing Even Numbers

function PrintEvenNumber(n){
    for(let i=1;i<=n;i++){
    if (i % 2 == 0) {
    console.log(i);
}
    }
}
let n=22;
PrintEvenNumber(n);

//Reverse order of elements

let arr = [43, "what", 9, true, "cannot", false, "be", 3.5, true];
for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
