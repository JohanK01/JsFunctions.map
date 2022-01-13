'use strict';

    let header = document.createElement('h2');
    header.textContent = 'ONE';
    document.getElementById('content').appendChild(header);
    let cars = [];
    let uniqueArr = [];
    
function addData() {
    
    function map(f,a){
    let result = []; // Create a new Array
    let i; // Declare variable

    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result; 
    }
    
    let carMake = document.getElementById('make').value;
    cars.push(carMake);
    console.log(cars);
    uniqueArr = [...new Set(cars.map((item) => item))];
    console.log(uniqueArr)
}
