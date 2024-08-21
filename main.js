

console.log('Lab01');

var lab01 = function(markMass, markHeight, johnMass, johnHeight) {
  
    var mark = markMass / (markHeight ** 2);
    var john = johnMass / (johnHeight ** 2);
    return mark > john;

}
var data1 = lab01(78, 1.69, 92, 1.95);
console.log('Data 1: Is Mark\'s BMI higher than John\'s is ' + data1);

var data2 = lab01(95, 1.88, 85, 1.76);
console.log('Data 2: Is Mark\'s BMI higher than John\'s is ' + data2);



console.log('Lab02');

var lab02 = function(markMass, markHeight, johnMass, johnHeight) {
  
    var mark = markMass / (markHeight ** 2);
    var john = johnMass / (johnHeight ** 2);
    return [mark, john, mark > john];

}
var data1 = lab02(78, 1.69, 92, 1.95);
if(data1[3] == true){
    console.log(`Mark's BMI ${data1[0]} is higher than John's ${data1[1]}!`);
}
else
    console.log(`John's BMI ${data1[1]} is higher than Mark's ${data1[0]}!`);
var data2 = lab02(95, 1.88, 85, 1.76);
if(data2[3] == true){
    console.log(`Mark's BMI ${data2[0]} is higher than John's ${data2[1]}!`);
}
else
    console.log(`John's BMI ${data2[1]} is higher than Mark's ${data2[0]}!`);


    console.log("Lab03");
    var lab02 = function(dolphines, koalas) {
        var dol = (dolphines[0] + dolphines[1] + dolphines[2]) / 3;
        var koa = (koalas[0] + koalas[1] + koalas[2]) / 3;
        console.log(`Dolphins: ${dol} Koalas: ${koa}`);
        if (dol > koa && dol >= 100) {
            return "Dolphins win the trophy!";
        } else if (koa > dol && koa >= 100) {
            return "Koalas win the trophy!";
        } else if (dol === koa && dol >= 100 && koa >= 100) {
            return "Both win the trophy!";
        } else {
            return "No one wins the trophy!";
        }
    }
    
    var dolphines = [97, 112, 101];
    var koalas = [109, 95, 123];
    var data1 = lab02(dolphines, koalas);
    
    console.log(data1);
    


console.log("Lab04");

var lab04 = function(bill) {
    for (let index = 0; index < bill.length; index++) {
        let tip = bill[index]>=50 && bill[index]<=300 ? bill[index]*0.15 : bill[index]*0.2;
        let total = bill[index]+tip;
        console.log(`The bill was ${bill[index]}, the tip was ${tip}, and the total value ${total}`);
        
    }
}

var bill = [275, 40, 430];
var lab04 = lab04(bill);