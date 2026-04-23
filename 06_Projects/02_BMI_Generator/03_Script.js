const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    // Check for NaN as well, as parseInt returns NaN for empty strings
    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0 || isNaN(height) || isNaN(weight)) {
        result.innerHTML = 'Please enter valid height and weight!';
    } else {
        // Calculate BMI
        const bmi = (weight / ((height * height) / 10000));
        if (bmi < 18.6) {
            result.innerHTML = `BMI: <span>${bmi.toFixed(2)}</span> (Underweight)`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `BMI: <span>${bmi.toFixed(2)}</span> (Normal Range)`;
        } else if (bmi >= 25 && bmi < 29.9) {
            result.innerHTML = `BMI: <span>${bmi.toFixed(2)}</span> (Overweight)`;
        } else {
            result.innerHTML = `BMI: <span>${bmi.toFixed(2)}</span> (Obese)`;
        }

    } // Use .toFixed(2) to show only two decimal places    }
});