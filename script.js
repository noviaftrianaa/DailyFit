document.getElementById('bmi-btn').addEventListener('click', () => {
  const weight = parseFloat(document.getElementById('bmi-weight').value);
  const heightCm = parseFloat(document.getElementById('bmi-height').value);
  if (!weight || !heightCm) {
    showResult('bmi-result', 'Please enter valid weight and height.');
    return;
  }
  const height = heightCm / 100;
  const bmi = weight / (height * height);
  let status = '';
  if (bmi < 18.5) status = 'Underweight';
  else if (bmi < 25) status = 'Normal';
  else if (bmi < 30) status = 'Overweight';
  else status = 'Obese';
  showResult('bmi-result', `Your BMI: ${bmi.toFixed(1)} (${status})`);
});

document.getElementById('water-btn').addEventListener('click', () => {
  const weight = parseFloat(document.getElementById('water-weight').value);
  if (!weight) {
    showResult('water-result', 'Please enter a valid weight.');
    return;
  }
  const waterLiters = weight * 0.035;
  showResult('water-result', `Recommended water intake: ${waterLiters.toFixed(2)} liters/day`);
});

document.getElementById('steps-btn').addEventListener('click', () => {
  const steps = parseInt(document.getElementById('steps').value);
  if (!steps || steps < 0) {
    showResult('steps-result', 'Please enter a valid number of steps.');
    return;
  }
  if (steps >= 10000) {
    showResult('steps-result', `Great job! You reached your daily step goal.`);
  } else {
    const remaining = 10000 - steps;
    showResult('steps-result', `You need ${remaining} more steps to reach 10,000.`);
  }
});

document.getElementById('register-btn').addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const selectedClass = document.getElementById('class').value;

  if (!name || !email || !selectedClass) {
    showResult('register-result', 'Please fill in all fields.');
    return;
  }
  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showResult('register-result', 'Please enter a valid email address.');
    return;
  }

  showResult('register-result', `Thank you, ${name}! You have registered for the ${selectedClass} class.`);
  // Clear form
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('class').selectedIndex = 0;
});

function showResult(id, message) {
  document.getElementById(id).textContent = message;
}
