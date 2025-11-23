// ================================
// Data set used for tasks
// ================================

// We have a list of students as an array of objects.
// Each student has: name, score and city.

const students = [
  { name: "Alicia", score: 80, city: "New York" },
  { name: "Luis", score: 90, city: "New York" },
  { name: "Maria", score: 70, city: "Los Angeles" },
  { name: "Juan", score: 100, city: "Los Angeles" },
  { name: "Sarah", score: 60, city: "New York" },
  { name: "Daniel", score: 85, city: "Chicago" },
  { name: "Sofia", score: 78, city: "Houston" },
  { name: "Ethan", score: 92, city: "Phoenix" },
  { name: "Olivia", score: 88, city: "San Francisco" },
  { name: "Noah", score: 73, city: "Seattle" },
  { name: "Emma", score: 95, city: "Miami" },
  { name: "Mason", score: 67, city: "Chicago" },
  { name: "Isabella", score: 81, city: "New York" },
  { name: "Liam", score: 76, city: "Houston" },
  { name: "Ava", score: 69, city: "Los Angeles" },
  { name: "Oliver", score: 84, city: "San Francisco" },
  { name: "Mia", score: 91, city: "Seattle" },
  { name: "Elijah", score: 58, city: "Phoenix" },
  { name: "Harper", score: 79, city: "Miami" },
  { name: "James", score: 87, city: "Chicago" },
  { name: "Charlotte", score: 94, city: "New York" },
  { name: "Benjamin", score: 72, city: "Houston" },
  { name: "Amelia", score: 66, city: "Los Angeles" },
  { name: "Lucas", score: 82, city: "San Francisco" },
  { name: "Evelyn", score: 75, city: "Seattle" },
  { name: "Henry", score: 89, city: "Phoenix" },
  { name: "Abigail", score: 93, city: "Miami" },
  { name: "Alexander", score: 70, city: "Chicago" },
  { name: "Emily", score: 65, city: "New York" }
];

//constant freeze variable
const MIN_PASSING_GRADE = 70;

// ================================
// Task 1: Passing students
// ================================

/**
 * Currently this function:
 * - Uses a manual for loop
 * - Uses push into a mutable array
 * - Does not use destructuring
 *
 * CHALLENGE:
 * 1) Make ESLint happy (no warnings).
 * 2) Rewrite using array methods (.filter, .map).
 * 3) Keep it pure and readable.
 */
function getPassingStudentsNames(list) {
  return list
    .filter(({ score }) => score >= MIN_PASSING_GRADE)
    .map(({ name }) => name.toUpperCase());
}

// Test the function
const passingStudents = getPassingStudentsNames(students);

console.log("Passing students: ", passingStudents);

// ================================
// Task 2: Average by city
// ================================

/**
 * This function is written in a verbose, imperative style.
 *
 * CHALLENGE:
 * 1) Rewrite using .filter, .reduce and destructuring.
 * 2) Do not mutate the input array.
 * 3) Try to keep the function short and declarative.
 */
function getAverageScoreByCity(list, city) {
  const filtered = list.filter(({ city: c }) => c === city);

  if (filtered.length === 0) {
    return 0;
  }

  const total = filtered.reduce((sum, { score }) => sum + score, 0);

  return total / filtered.length;
}

const averageByCity = getAverageScoreByCity(students, "Los Angeles");

console.log("Average by City: ", averageByCity.toFixed(2));

// ================================
// Task 3: Grouped result
// ================================

/**
 * We want a summary object with this shape:
 *
 * {
 *   "New York":    { count: X, average: Y },
 *   "Los Angeles": { count: X, average: Y },
 *   ...
 * }
 *
 * CHALLENGE:
 * 1) Implement this using .reduce() function.
 * 2) Use objects as dictionaries (keys = city names).
 * 3) Reuse getAverageScoreByCity or common helpers if it makes sense.
 * 4) Avoid repeating code, keep functions small.
 */
function buildCitySummary(list) {
  const cities = list.reduce((acc, { city }) => {
    acc.add(city);
    return acc;
  }, new Set());

  return Array.from(cities).reduce((summary, city) => {
    const cityStudents = list.filter(student => student.city === city);
    const count = cityStudents.length;
    const average = count ? cityStudents.reduce((s, { score }) => s + score, 0) / count : 0;

    return {
      ...summary,
      [city]: { count, average }
    };
  }, {});
}

// Small Console
console.log("Summary by city:", buildCitySummary(students));

