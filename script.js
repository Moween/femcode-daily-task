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
    value = prompt(question);

    if (parseInt(value) || value === null) {
      break;
    }
  }
  return value;
};

const calculateEmployeeBonus = () => {
  const userYear = validateInput('Enter your birth year:');
  const salary = validateInput('Enter your monthly income:');

  if (!userYear || !salary) {
    return 'You are not entitled to a bonus.';
  }
  // Our maximum age is 50years so current year - 50 will give us the year 1971
  const age = 2021 - userYear;
  let bonus = 0;

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

// alert(calculateEmployeeBonus());


// Day 2 Task
// ======
// Create a function that accepts a parameter  "n" 

// The function should print out a multiplication table for n only If n is a multiple of 3, 5 or 7

// multiplication table range is 1- 20

// Example : 

// functionname(3) should return
// 3*1=3
// 3*2 =6
// 3*3 =9
// .
// .
// .
// 3*20 = 60

const getMultiple = (num) => {
  const arr = [];

  if(num % 3 === 0 || num % 5 === 0 || num % 7 === 0)  {
    for(let i = 1; i <= 20; i++) {
      arr.push( i * num)
    }
  }else {
    return `${num} not a multiple`
  }
  return `Multiples of ${num}:  ${arr}`;
};

// console.log(getMultiple(3));


// Day3 task
// ===

// Write a program to determine if a person is eligible for voting or note

// Note: voting age is 18 years

// User enters date of birth in a prompt in the format : dd/mm/yyyy

// ===
// Validation check : it the user is to be 18 years of age by tomorrow it simply means the person cannot vote today

// Meaning you are calculating the persons age down to the day 

// Not just using the year alone



const checkVotersELigibility = () => {
  let dateOfBirth = prompt('Enter DOB \ndd/mm/yy:');
  dateOfBirth = dateOfBirth.split('/');
  const dayOfBirth = parseInt(dateOfBirth[0]);
  const monthOfBirth = parseInt(dateOfBirth[1]);
  console.log(monthOfBirth)
  const yearOfBirth = parseInt(dateOfBirth[2]);
  
  const now = new Date();
  const currentDay = now.getDate();
  const currentMonth = now.getMonth() + 1;
  console.log(currentMonth)
  const currYear = now.getFullYear();
  
  const age = currYear - yearOfBirth;
  console.log('User\'s age', age)

  if(age === 18 && currentMonth < monthOfBirth) {
    return 'Not Eligible to vote';
  }else if (age === 18 && dayOfBirth > currentDay) {
    return 'Not Eligible to vote';
  } else if(age < 18) {
    return 'Not eligible to vote';
  }

  return 'Eligible to vote';
  
}

console.log(checkVotersELigibility());

