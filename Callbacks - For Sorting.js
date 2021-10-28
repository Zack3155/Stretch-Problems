const customComparison = function(a, b) {
  if (a.name > b.name) return 1;
  else if (a.name === b.name) return (a.age > b.age) ? 1 : -1;
  return -1;
};

const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

console.log(students.sort(customComparison));

