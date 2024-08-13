function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let result = document.getElementById('result');

    if (isNaN(weight) || isNaN(height)) {
        result.textContent = 'Please enter valid numbers.';
        return;
    }

    let bmi = weight / (height ** 2);
    bmi = bmi.toFixed(2); // Round to two decimal places

    let message;
    if (bmi < 18.5) {
        message = 'You are underweight.';
    } else if (bmi < 25) {
        message = 'You are at a normal weight.';
    } else if (bmi < 30) {
        message = 'You are overweight.';
    } else {
        message = 'You are obese.';
    }

    result.textContent = `Your BMI is ${bmi}. ${message}`;
}