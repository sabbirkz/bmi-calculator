const calculateBMI = () => {
    const weight = document.getElementById('weightInput').value;
    const height = document.getElementById('heightInput').value;

    if (weight > 0 && height > 0) {
        const bmi = weight / ((height) * (height));
        document.getElementById('result').innerHTML = `Your BMI is ${bmi.toFixed(2)}.`;
    }
    else {
        document.getElementById('result').innerHTML = "Please enter valid weight and height values.";
    }
};

document.getElementById('calculateBtn').addEventListener('click', calculateBMI);

