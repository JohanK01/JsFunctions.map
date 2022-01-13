'use strict';

    let header = document.createElement('h2');
    header.textContent = 'ONE';
    document.getElementById('content').appendChild(header);
    let cars = [];
    let uniqueArr = [];
    
function addData() {
    
    
    let carMake = document.getElementById('make').value;
    cars.push(carMake);
    // console.log(cars);
    uniqueArr = [...new Set(cars.map((item) => item))]; //maps through array keeping unique
    // console.log(uniqueArr)

    let count = cars.reduce(function (allCars, cars) {
        if( cars in allCars){
            allCars[cars]++
        }
        else{
            allCars[cars] = 1
        }
        console.log(allCars)
     
        return allCars
        
    }, {})
}

function calculate(){

  
    const li = document.createElement('li');
    document.getElementById('list').appendChild(li);
    li.textContent = uniqueArr;
   
   
}
