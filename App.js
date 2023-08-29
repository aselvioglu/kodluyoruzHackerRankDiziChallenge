// Selecting DOM elements
let inputDOM = document.querySelector("#array");
let arrayShow = document.querySelector("#sortedArray");

// Adding an event listener to respond to Enter key press
inputDOM.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let stringarr = inputDOM.value;
        let array1 = stringarr.split(" ").map(Number); // Convert input string to an array of numbers

        let sortedOne = [...array1].sort(function(a, b) { return a - b }); // Create a sorted copy of the array

        // Handling small arrays
        if (sortedOne.length <= 1) {
            arrayShow.innerHTML = "Array must contain at least two numbers.";
        } else {
            arrayShow.innerHTML = `The sorted array: [${sortedOne}], 
            The original array: [${array1}],
            The second largest element of the original array: ${getSecondLargest(array1)}`;
        }

        inputDOM.value = "";
    }
});


console.log(inputDOM.value);




function getSecondLargest(nums) {
    // Complete the function
    
    let newNums=nums.sort(function(a, b){return a-b});
    console.log(newNums);
    let newNums1=[];
   newNums.forEach((num, indeks) =>{
        if(indeks==0){
            newNums1[indeks]=num;
        }
        //console.log("aaa " + newNums[indeks])
        if(indeks>0 && num!=newNums[indeks-1]){
           newNums1[indeks]=num;
        }
        if(num==newNums[indeks-1]) {newNums1[indeks]=-999;}
       
    
        //console.log(newNums1);
    })
    
    let lastArray=[];
    let indis=0;
    newNums1.forEach(function(sayi, ind){
        if(sayi!=-999) {lastArray[indis]=sayi;
            indis++;
        }
    });
    //
    //console.log(lastArray)
    return lastArray[(lastArray.length)-2];
}
