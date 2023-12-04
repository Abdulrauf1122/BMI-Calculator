document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var bmi = calculateBMI(weight, height);
    var report = generateReport(weight, height, bmi);

    // Create a container for the report
    var reportContainer = document.createElement('div');
    reportContainer.classList.add('report-container');

    // Add a label to the report container
    var label = document.createElement('h2');
    label.textContent = 'BMI Report';
    reportContainer.appendChild(label);

    // Add the report content to the container
    var reportContent = document.createElement('pre');
    reportContent.innerHTML = report;
    reportContainer.appendChild(reportContent);

    // Append the report container to the body of the document
    document.body.appendChild(reportContainer);
});

function calculateBMI(weight, height) {
    var heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

function classifyBMI(bmi) {
    if (bmi < 18.5) {
        return 'underweight';
    } else if (bmi < 25) {
        return 'normal weight';
    } else {
        return 'overweight';
    }
}

function generateReport(weight, height, bmi) {
    var classification = classifyBMI(bmi);
    return 'Weight: ' + weight + 'kg\n' +
           'Height: ' + height + 'cm\n' +
           'BMI: ' + bmi + '\n' +
           'Classification: ' + classification;
}
