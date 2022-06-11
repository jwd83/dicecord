const {Dice} = require("./dice.js");

dice = new Dice();

function simulate() {
    let sum = 0;
    let rounds = 100000000;

    for(let i = 0; i < rounds; i++) {
        // sum += dice.roll_advantage(20);
        sum += dice.roll_elven_accuracy(20);
    }

    console.log("Average: " + (sum / rounds));
}

function simulate_stat() {
    // dice.roll_stat();
    let results = [];
    let rounds = 1000000;
    for(let i = 0; i < rounds; i++) {
        let stat = dice.roll_stat();
        results[stat] = results[stat] ? results[stat] + 1 : 1;
    }

    for(j in results) {
        let pct = results[j] / rounds * 100;
        console.log(j + ":\t" + pct.toFixed(3) + " %");
    }

}

function main() {
    simulate();
    // simulate_stat();
}

main();