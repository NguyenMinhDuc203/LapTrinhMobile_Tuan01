

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
    var lab02 = function(dolphines03, koalas03) {
        var dol = (dolphines03[0] + dolphines03[1] + dolphines03[2]) / 3;
        var koa = (koalas03[0] + koalas03[1] + koalas03[2]) / 3;
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
    
    var dolphines03 = [97, 112, 101];
    var koalas03 = [109, 95, 123];
    var data1 = lab02(dolphines03, koalas03);
    
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




console.log("Lab05");

var calcAverage = function(arr){
    var sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum / arr.length;

}

var dolphines05_01 = [85, 54, 41];
var koalas05_01 = [23, 34, 27];

avg_dolphines05 = calcAverage(dolphines05_01);
avg_koalas05 = calcAverage(koalas05_01);

console.log(`AVG Dolphines: ${avg_dolphines05} AVG Koalas: ${avg_koalas05}`);

var checkWinner = function(avg_dolphines05, avg_koalas05){
    if(avg_dolphines05 >= 2*avg_koalas05){
        return `Dolphines win (${avg_dolphines05} vs. ${avg_koalas05})`;
    } else if(avg_koalas05 >= 2*avg_dolphines05){
        return `Koalas win (${avg_koalas05} vs. ${avg_dolphines05})`;
    } else {
        return "No one wins!";
    }
}

var winner = checkWinner(avg_dolphines05, avg_koalas05);
console.log(winner);



console.log("Lab06");

var calcTip = function(bill){
    return bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
}

var bill = [125, 555, 44];

var tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
var total = [bill[0]+tips[0], bill[1]+tips[1], bill[2]+tips[2]];

console.log(`Bill: ${bill} Tips: ${tips} Total: ${total}`);



console.log("Lab07");

var calcBMI = function(mass, height){
    return mass / height**2;
}

var markMiller = [78, 1.69];
var johnSmith = [92, 1.95];

var markBMI = calcBMI(markMiller[0], markMiller[1]);
var johnBMI = calcBMI(johnSmith[0], johnSmith[1]);
console.log(`Mark's BMI: ${markBMI} John's BMI: ${johnBMI}`);
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
}
else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}




console.log("Lab08");

var tipss = [];
var totalss = [];
var calcTip = function(bill){
    for (let index = 0; index < bill.length; index++) {
        tipss.push(bill[index]>=50 && bill[index]<=300 ? bill[index]*0.15 : bill[index]*0.2);
        totalss.push(bill[index]+tipss[index]);
    } 
    return
}

var bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
calcTip(bill);
console.log(`Bill: ${bill}`);
console.log(`Tips: ${tipss}`);
console.log(`Total: ${totalss}`);

console.log("Bonus")

var calcAverages = function(arr){
    var sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum / arr.length;
}
var bonus = calcAverages(totalss);
console.log(`Bonus-Total Average: ${bonus}`);


console.log("Lab09");


var printForecast = function(arr) {
    for (let index = 0; index < arr.length; index++) {
        console.log(`... ${arr[index]}°C in ${index + 1} days`);
        
    }

}

console.log("Data 01")
var arr = [17, 21, 23];
printForecast(arr);
console.log("Data 02")
var arr = [12, 5, -5, 0, 4];
printForecast(arr);




console.log("Lab10, chưa làm");









console.log("Lab11");
const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [
        [
            'Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies',
            'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnabry', 'Lewandowski',
        ],
        [
            'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi',
            'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
const printGoals = function (...players) {
    console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);



console.log("Lab12")

const printScorers = function(score){
    for (let index = 0; index < score.length; index++) {
        console.log(`Goal ${index+1}: ${score[index]}`)
        
    }

}

const print = printScorers(game.scored)

const sumOdds = function(odds){
    let sum = 0
    for(let[key, value] of Object.entries(odds)){
        sum+=value
        console.log(sum)
    }
    return sum/3
}

const avgOdd = sumOdds(game.odds)
console.log(` the average odd is ${avgOdd}`)

const valueOdds = function(odds){
    let arr = []
    for(let [key, value] of Object.entries(odds)){
        arr.push(value)
    }
    return arr
}

const arrValOdd = valueOdds(game.odds);
console.log(`Odd of victory Bayern Munich: ${arrValOdd[0]}
Odd of draw: ${arrValOdd[1]}
Odd of victory Borrussia Dortmund: ${arrValOdd[2]}
`)

const objScore = function(scored){

    let scorers = {};
    
    for (let player of scored) {
        if (scorers[player]) {
            scorers[player]++;
    } else {
        scorers[player] = 1;
    }
}
return scorers
}
const scorers = objScore(game.scored)
console.log(scorers)

