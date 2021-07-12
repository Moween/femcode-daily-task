// Collect user year of birth;
// Calculate age;
// Check that age is greater 18 and less than 50;
// Calculate Bonus
// age 18- 20 => 5% of salary + salary;
// age 21- 30 => 5% of salary + salary;
// age 31- 50 => 5% of salary + salary;

// checks if salary and year  is a valid input
const validateInput = (question) => {
  let value;
  while (true) {
    value = question;

    if (value || value === null) {
      break;
    }
  }
  if (value) {
    value = +value;
  }
  return value;
};

const calculateEmployeeBonus = () => {
  const userYear = validateInput(prompt('Enter your birth year:', ''));
  const salary = validateInput(prompt('Enter your monthly income:', ''));

  if (!userYear || !salary) {
    return 'You are not entitled to a bonus.';
  }
  // Our maximum age is 50years so current year - 50 will give us the year 1971
  const age = 2021 - userYear;
  let bonus;

  if (age >= 18 && age <= 20) {
    bonus = ((5 / 100) * salary) + salary;
  } else if (age >= 21 && age <= 30) {
    bonus = ((10 / 100) * salary) + salary;
  } else if (age >= 31 && age <= 50) {
    bonus = ((20 / 100) * salary) + salary;
  } else {
    return 'Your age is not a working age in our register.';
  }
  return `Your bonus is ${bonus}.`;
};

calculateEmployeeBonus();