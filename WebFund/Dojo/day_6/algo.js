const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
    while 
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
    let coins = {};
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny = 0;

    while(cents > 0){
        if (cents > 25){
            quarter = cents % 25;
           cents = cents - (quarter * 25);
        }
        else if(cents > 10){
            dime = cents % 10;
           cents = cents - (dime * 10);
        }
        else if(cents > 5){
            nickel = cents % 5;
            cents = cents - (nickel * 5);
        }
        else{
            pennies = cents
        }
    }
    coins ["quarters"] = quarter;
    coins ["dimes"] = dime;
    coins ["nickels"] = nickel;
    coins ["pennies"] = penny;
    return coins;
}
fewestCoinChange(35);