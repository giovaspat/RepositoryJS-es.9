const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

const dataKeys = Object.keys(person);


dataKeys.forEach(data => {
  console.log(data, ":", person[data]);
})