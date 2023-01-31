//Create a function that will take the array and a student id (any number you want) as parameters. Use map to create a new array that stores each score in an object that includes the activity ID (first score is 0, second score 1, etc.) as well as the student ID. 

//Create a function that will create a new array with the lowest score removed. (For this exercise if both 0s are removed that is OK.)

//Create a function that will Sum the scores.

//Create a function that will compute the average from an array passed in.

//Create a function that will create a new array of score objects that have a 0 score.

//Using the functions you have created, generate a new array with full data. Compute the average once the lowest score has been removed. And create an array of zero scores with the full data that could be provided to the learner.

const array = [10, 0, 90, 80, 50, 0, 60];


const mapStudentsDate = function (array, studentId) {
    return array.map(function (score, index) {
        return {
            score: score,
            activityId: index,
            studentId: studentId,
        }
    })
}

const removeLowestScore = (array) => {
    const min = Math.min(...array.map(item => item.score));
    return array.filter(item => item.score !== min);
}
const removeLowestUsingReduceScore = (array) => {
    let min = Math.min(...array.map(item => item.score));
    return array.reduce(function (result, item) {
        if (item.score !== min) {
            return [...result, item];
        }
        if (item.score === min) {
            min = null;
            return result;
        }
    }, []);
}
const removeLowestUsingIndexOf = (array) => {
    const min = Math.min(...array.map(item => item.score));
    const newArray = [...array];
    newArray.splice(array.findIndex(item => item.score === min), 1);
    return newArray;
}
const sumScores = items => items.reduce((total, item) => total + item.score, 0)

const computeAverage = items => sumScores(items) / items.length

const filterZerosScore = function (array) {
    return array.filter(item => item.score === 0);
}

const fullData = mapStudentsDate(array, 3000);
const lowValueRemoved = removeLowestUsingIndexOf(fullData);
const highAverage = computeAverage(lowValueRemoved);
const lowAverage = computeAverage(fullData);
const zeroAssignments = filterZerosScore(fullData);

const pipe = function (...fns) {
    return function (x) {
        return fns.reduce(function (v, f) {
            return f(v);
        }, x);
    }
};

const highAverageWithCompositeWay = pipe(
    removeLowestUsingIndexOf,
    computeAverage
)(fullData);

// libs
// https://github.com/functionaljs/functional-js
// https://immutable-js.com
// https://ramdajs.com
// https://lodash.com

