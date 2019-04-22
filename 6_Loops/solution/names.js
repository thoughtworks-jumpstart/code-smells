function formatRecords(input) {
  const lines = input.split("\n");

  const result = lines
    .filter(line => line.trim() !== "")
    .map(line => line.split(","))
    .filter(record => record[1].trim() === "India")
    .map(record => ({ city: record[0].trim(), phone: record[2].trim() }));
   
  return result;  
}
