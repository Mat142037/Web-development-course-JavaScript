//Array with the samples values taken from the river
let samples = [4.2, 5.1, 3.8, 4.7, 5.3];

//Function to calculate the mean value of the samples
function meanCalc(samples) {
    let sum = 0;
    for (let i = 0; i < samples.length; i++) {
    sum += samples[i];
    }
    return sum / samples.length;
}

//Code to round the mean value to 2 decimal places and display the reults with a string in the console
let average = meanCalc(samples);
let result = Math.round(average * 100) / 100;
let display = "The mean value is " + result;

console.log(display);

