function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();
  printDetails(customer, outstanding)
}

function printDetails(customer, outstanding){
  console.log(`name : ${customer}`);
  console.log(`amount : ${outstanding}`);
}
