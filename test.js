import {identifyVariable} from "./src/mild/mild_2.js";
import {identifyArray} from "./src/mild/mild_2.js";
import { removeKey } from "./src/mild/mild_2.js";
import {removeKeyNonDestructive} from "./src/mild/mild_2.js";
import {removeKeys} from "./src/mild/mild_2.js";
import {getStatistics, getSum} from "./src/medium/medium_1.js";
import {getMedian} from "./src/medium/medium_1.js";
import mpg_data from "./src/medium/data/mpg_data.js";
import { allCarStats } from "./src/medium/medium_2.js";
import { searchHighPower } from "./src/medium/medium_3.js";
import { searchName } from "./src/medium/medium_3.js";
import { searchByYear } from "./src/medium/medium_3.js";

const stats = allCarStats;
console.log(searchByYear(mpg_data, [2010, 2011, 2012]));