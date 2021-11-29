import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";
/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/
function getYearStats(array) {
var newArr = []
    for (let i = 0; i <= array.length; i++) {
        newArr.push(Object.values(array[i])[17]);
    }
    return getStatistics(newArr);
}

function checkHybrid(object) {
    return (object.hybrid);
}

function getHybridRatio(array) {
    var newArr = []
    var result = array.filter((checkHybrid));
    return (result.length / array.length);
}

export default function avgMPG(array) {
    var newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push( Object.values(array[i])[0]);
    }
    
    let x = 0;
    for (let i = 0; i < newArr.length; i++) {
        x += newArr[i];
    }
    let cityV = x/newArr.length;

    var newArr1 = []
    for (let i = 0; i < array.length; i++) {
        newArr1.push( Object.values(array[i])[6]);
    }
    
    let x1 = 0;
    for (let i = 0; i < newArr1.length; i++) {
        x1 += newArr1[i];
    }
    let hwyV = x1/newArr1.length;

    let newObj = {
        city: cityV,
        highway: hwyV
    }

    return newObj
}
/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
    
    avgMpg: avgMPG(mpg_data),
    allYearStats: getYearStats(mpg_data),
    ratioHybrids: getHybridRatio(mpg_data)
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: undefined,
    avgMpgByYearAndHybrid: undefined
};
