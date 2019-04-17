const names = people
  .filter(person => person.job === "programer")
  .map(person => person.name);
