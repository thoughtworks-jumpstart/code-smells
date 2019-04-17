const names = [];

for (const person of people) {
  if (person.job === "programer") {
    names.push(person.name);
  }
}
