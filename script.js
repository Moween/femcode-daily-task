// Collect user year of birth;
// Calculate age;
// Check that age is greater 18 and less than 50;
// Calculate Bonus
// age 18- 20 => 5% of salary + salary;
// age 21- 30 => 5% of salary + salary;
// age 31- 50 => 5% of salary + salary;

const validateYearInput = () => {
  let year;
  while (true) {
    year = prompt('Enter your birth year', '');

    if (year || year === null) {
      break;
    }
  }
  if (year) {
    year = +year;
  }
  return year;
};

// checks that salary is a valid input
const validateSalary = () => {
  let salary;
  while (true) {
    salary = prompt('Enter your monthly income', '');

    if (salary || salary === null) {
      break;
    }
  }
  if (salary) {
    salary = +salary
  }
  return salary;
};

const calculateEmployeeBonus = () => {
  const userYear = validateYearInput();
  const salary = validateSalary();

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
    return 'You are not entitled to a bonus.';
  }
  return `Your bonus is ${bonus}.`;
};

calculateEmployeeBonus();