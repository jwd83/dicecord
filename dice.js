// create our dice class

class Dice {

    // roll a dice with a given number of sides and return the result
    roll(sides) {
        return Math.floor(Math.random() * sides) + 1;
    }

    // roll two of the same dice and return the higher result
    roll_advantage(sides) {
        return Math.max(this.roll(sides), this.roll(sides));
    }

    // roll two of the same dice and return the lower result
    roll_disadvantage(sides) {
        return Math.min(this.roll(sides), this.roll(sides));
    }

    // roll three of the same dice and return the highest result
    roll_elven_accuracy(sides) {
        return Math.max(this.roll(sides), this.roll(sides), this.roll(sides));
    }

    // roll a character stat - 4d6 drop the lowest
    roll_stat() {
        // record our rolls
        let results = [];

        // roll 4d6
        results.push(this.roll(6));
        results.push(this.roll(6));
        results.push(this.roll(6));
        results.push(this.roll(6));

        // drop the lowest result
        results.sort();
        // console.log(results);
        results.shift();
        // console.log(results);

        // return the sum of the remaining results
        return results.reduce((a, b) => a + b, 0);
    }


}


// export
module.exports = {Dice};